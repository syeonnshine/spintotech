import type { Logo } from "../data/clients";

type Props = {
  logos: Logo[];
};

// src/assets/logos 폴더의 이미지를 빌드 시점에 모두 수집 → 파일만 넣으면 코드 수정 없이 자동 반영
const logoFiles = import.meta.glob<string>("../assets/logos/*.{svg,png,jpg,jpeg,webp}", {
  eager: true,
  import: "default",
});

// 파일명(확장자 제외) → URL 맵
const logoUrls: Record<string, string> = Object.fromEntries(
  Object.entries(logoFiles).map(([path, url]) => [path.split("/").pop()!.replace(/\.[^.]+$/, ""), url]),
);

// 고객사·제조사 로고 그리드. 로고 파일이 있으면 이미지, 없으면 회사명 텍스트.
// 로고를 끝내 못 구하는 회사도 있어서, 빈자리처럼 보이지 않게 로고 칸과 같은 실선 테두리 + 굵은 회사명으로 표기 hover/포커스 시 한글명 표시 (기획안.pdf 4p 요건)
export default function LogoGrid({ logos }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {logos.map((logo) => {
        const src = logoUrls[logo.file];
        return (
          <div
            key={logo.en}
            tabIndex={0}
            role="img"
            aria-label={logo.ko}
            className="group relative flex h-24 items-center justify-center rounded border border-line bg-white px-3 text-center sm:px-4 text-base font-bold tracking-tight text-navy transition-colors hover:border-brand focus:border-brand focus:outline-none sm:text-lg"
          >
            <span className="flex h-full w-full items-center justify-center group-hover:opacity-0 group-focus:opacity-0">
              {/* 로고마다 비율이 달라 높이·너비 모두 제한하고 object-contain으로 칸 안에 맞춤 */}
              {src ? (
                <img
                  src={src}
                  alt=""
                  className={`${logo.stacked ? "max-h-[72px]" : "max-h-12"} max-w-full object-contain`}
                  style={logo.shiftUp ? { transform: `translateY(-${logo.shiftUp}%)` } : undefined}
                />
              ) : (
                logo.en
              )}
            </span>
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-base text-brand opacity-0 sm:text-lg transition-opacity group-hover:opacity-100 group-focus:opacity-100">
              {logo.ko}
            </span>
          </div>
        );
      })}
    </div>
  );
}
