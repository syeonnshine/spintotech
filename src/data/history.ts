export type HistoryItem = {
  year: string;
  text: string;
  confirmed: boolean;
};

// 연혁 13개 항목 — 회사소개서 2p 순서 그대로. 연도는 설립연도(2009)만 확인됨, 나머지는 자료 확정 전 20XX (기획안.pdf 3p)
const rawHistory: [string, string][] = [
  ["2009", "스핀토테크놀러지 법인 설립"],
  ["", "포시에스 리포트 솔루션 공급업체 계약"],
  ["", "펜타시스템 모니터링 솔루션 공급업체 계약"],
  ["", "효성인포메이션 Business Partner 계약"],
  ["", "Oracle OPN 골드 파트너십 체결"],
  ["", "TmaxSoft 솔루션 공급업체 등록"],
  ["", "넷컴솔루션 Business Partner 계약"],
  ["", "태건에스엔아이 Business Partner 계약"],
  ["", "한전KDN 협력업체 등록"],
  ["", "한국전력공사 협력업체 등록"],
  ["", "한국수력원자력 협력업체 등록"],
  ["", "Oracle Exadata 공급업체 등록"],
  ["", "아크로니스 백업솔루션 공급업체 계약"],
];

export const historyItems: HistoryItem[] = rawHistory.map(([year, text]) => ({
  year: year || "20XX",
  text,
  confirmed: Boolean(year),
}));
