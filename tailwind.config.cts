import type { Config } from "tailwindcss";

// .cts(CommonJS)로 둔 이유: package.json이 "type": "module"이라 .ts는 ESM으로 로드되는데,
// Node 22.12+는 ESM 설정을 require 캐시 밖에 두어 tailwind가 dev 서버 실행 중 변경을 다시 읽지 못함

module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // 기획안 디자인 가이드 색상 체계 (기획안.pdf 3p 참고)
      colors: {
        navy: "#0B2545",
        brand: "#1F6FB5",
        sky: "#3FA9E0",
        // 흰 섹션과 번갈아 쓸 때 경계가 보이도록 기존 #F4F7FB보다 한 톤 진하게
        section: "#EFF1F3",
        body: "#1C2430",
        muted: "#5B6675",
        line: "#DCE3EC",
      },
      fontFamily: {
        sans: ["Pretendard", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      // 섹션 상하 여백 — 120/72px은 섹션 사이가 비어 보여서 줄임
      spacing: {
        section: "55px",
        "section-mobile": "56px",
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
