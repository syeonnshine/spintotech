"""
src/assets/logos 의 로고 파일에서 바깥 여백을 잘라낸다.
로고 칸은 높이·너비 상한에 맞춰 축소되므로, 파일 안에 여백이 있으면 그만큼 로고가 작게 보인다.

- PNG/WebP: 투명 영역 기준으로 자름 (투명도가 없으면 흰 배경 기준)
- JPG: 흰 배경(거의 흰색 포함) 기준으로 자름
- SVG: headless Chrome으로 실제 그려진 영역(getBBox)을 구해 viewBox를 맞춤

사용법: python scripts/trim-logos.py   (Pillow 필요: pip install pillow)
이미 잘린 파일은 변화가 없으므로 여러 번 실행해도 안전하다.
"""

import re
import subprocess
import tempfile
from pathlib import Path

from PIL import Image, ImageChops

LOGO_DIR = Path(__file__).resolve().parent.parent / "src" / "assets" / "logos"
CHROME_PATHS = [
    Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe"),
    Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"),
]
# 잘라낸 뒤 가장자리 안티앨리어싱이 잘리지 않도록 남기는 여유 (px)
MARGIN = 2


def content_bbox(im: Image.Image):
    if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info):
        alpha = im.convert("RGBA").getchannel("A")
        # 거의 투명한 픽셀(그림자 잔상 등)은 무시
        return alpha.point(lambda a: 255 if a > 8 else 0).getbbox()
    rgb = im.convert("RGB")
    diff = ImageChops.difference(rgb, Image.new("RGB", rgb.size, (255, 255, 255))).convert("L")
    # JPG 압축 노이즈로 생긴 미세한 회색은 배경으로 취급
    return diff.point(lambda v: 255 if v > 16 else 0).getbbox()


def trim_raster(path: Path):
    with Image.open(path) as im:
        im.load()
        bbox = content_bbox(im)
        if not bbox:
            return f"건너뜀 (내용 없음)"
        l, t, r, b = bbox
        l, t = max(l - MARGIN, 0), max(t - MARGIN, 0)
        r, b = min(r + MARGIN, im.width), min(b + MARGIN, im.height)
        if (l, t, r, b) == (0, 0, im.width, im.height):
            return f"변화 없음 {im.width}x{im.height}"
        cropped = im.crop((l, t, r, b))
        cropped.save(path, **({"quality": 95} if path.suffix.lower() in (".jpg", ".jpeg") else {}))
        return f"{im.width}x{im.height} -> {cropped.width}x{cropped.height}"


def trim_svg(path: Path):
    chrome = next((p for p in CHROME_PATHS if p.exists()), None)
    if not chrome:
        return "건너뜀 (Chrome/Edge 없음)"
    src = path.read_text(encoding="utf-8")
    html = (
        "<body>" + src + "<script>const b=document.querySelector('svg').getBBox();"
        "document.body.setAttribute('data-bbox',[b.x,b.y,b.width,b.height].join(' '));</script></body>"
    )
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html)
        tmp = Path(f.name)
    try:
        out = subprocess.run(
            [str(chrome), "--headless=new", "--disable-gpu", "--dump-dom", tmp.as_uri()],
            capture_output=True, text=True, encoding="utf-8", timeout=60,
        ).stdout
    finally:
        tmp.unlink(missing_ok=True)
    m = re.search(r'data-bbox="([^"]+)"', out)
    if not m:
        return "건너뜀 (영역 계산 실패)"
    x, y, w, h = (float(v) for v in m.group(1).split())
    x, y, w, h = x - 1, y - 1, w + 2, h + 2
    vb = f"{x:g} {y:g} {w:g} {h:g}"
    tag = re.search(r"<svg\b[^>]*>", src).group(0)
    if f'viewBox="{vb}"' in tag:
        return "변화 없음"
    # viewBox를 실제 영역으로 맞추고, width/height도 같은 비율로 맞춰 img 태그에서 비율이 어긋나지 않게 함
    new_tag = re.sub(r'\s(viewBox|width|height)="[^"]*"', "", tag)
    new_tag = new_tag.replace("<svg", f'<svg width="{w:g}" height="{h:g}" viewBox="{vb}"', 1)
    path.write_text(src.replace(tag, new_tag, 1), encoding="utf-8")
    return f"viewBox -> {vb}"


def main():
    for path in sorted(LOGO_DIR.iterdir()):
        ext = path.suffix.lower()
        if ext == ".svg":
            result = trim_svg(path)
        elif ext in (".png", ".jpg", ".jpeg", ".webp"):
            result = trim_raster(path)
        else:
            continue
        print(f"{path.name}: {result}")


if __name__ == "__main__":
    main()
