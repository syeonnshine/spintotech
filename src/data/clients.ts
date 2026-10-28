export type Logo = {
  en: string;
  ko: string;
  // src/assets/logos/{file}.svg|png|jpg|webp 파일명 (확장자 제외). 파일이 없으면 en 텍스트로 대체
  file: string;
  // 심볼 아래 글자가 붙은 세로형 로고. 가로형과 같은 높이 상한이면 글자가 너무 작아져서 높이를 더 허용
  stacked?: boolean;
  // 글자 위로 장식이 튀어나온 로고는 이미지 중심과 글자 중심이 어긋나 아래로 처져 보임 → 이미지 높이 대비 %만큼 위로 올림
  shiftUp?: number;
};

// hover/포커스 시 ko(한글명) 노출 (기획안.pdf 4p 요건)
export const clientLogos: Logo[] = [
  { en: "KEPCO", ko: "한국전력공사", file: "kepco" },
  { en: "KHNP", ko: "한국수력원자력", file: "khnp" },
  { en: "KOMIPO", ko: "한국중부발전", file: "komipo" },
  { en: "KOWEPO", ko: "한국서부발전", file: "kowepo" },
  { en: "KOSPO", ko: "한국남부발전", file: "kospo" },
  { en: "KOEN", ko: "한국남동발전", file: "koen" },
  { en: "EWP", ko: "한국동서발전", file: "ewp" },
  { en: "KEPCO KPS", ko: "한전KPS", file: "kepco-kps" },
];

export const makerLogos: Logo[] = [
  { en: "ORACLE", ko: "오라클", file: "oracle" },
  { en: "TmaxSoft", ko: "티맥스소프트", file: "tmaxsoft" },
  { en: "TmaxTibero", ko: "티맥스티베로", file: "tmaxtibero" },
  { en: "FORCS", ko: "포시에스", file: "forcs", shiftUp: 15 },
  { en: "NETAND", ko: "넷앤드", file: "netand" },
  { en: "KSIGN", ko: "케이사인", file: "ksign" },
  { en: "WISEnut", ko: "와이즈넛", file: "wisenut" },
  { en: "IBM", ko: "한국IBM", file: "ibm" },
  { en: "HP", ko: "HP", file: "hp" },
];

// 총판·협력사도 로고 파일이 생기면 바로 보이도록 같은 Logo 구조로 관리. 영문 표기가 확정되지 않아 en(대체 텍스트)은 한글명 사용
export const distributorLogos: Logo[] = [
  { en: "에티버스", ko: "에티버스", file: "etevers" },
  { en: "지티플러스", ko: "지티플러스", file: "gtplus" },
  { en: "유클릭", ko: "유클릭", file: "uclick" },
  { en: "펜타시스템", ko: "펜타시스템", file: "pentasystem" },
  { en: "태건에스엔아이", ko: "태건에스엔아이", file: "taegun" },
  { en: "쓰리에이치에스", ko: "쓰리에이치에스", file: "3hs" },
  { en: "아이닛", ko: "아이닛", file: "init" },
  { en: "지니텍", ko: "지니텍", file: "genitec" },
];
