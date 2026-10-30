export type HistoryItem = {
  year: string;
  text: string;
  confirmed: boolean;
};

// 연혁 — 회사소개서 2p 순서 기준. 타사·고객사명은 노출하지 않기로 해 분야명으로 일반화하고, 같은 성격의 등록·계약은 한 줄로 합침. 연도는 설립연도(2009)만 확인됨, 나머지는 자료 확정 전 20XX (기획안.pdf 3p)
const rawHistory: [string, string][] = [
  ["2009", "스핀토테크놀러지 법인 설립"],
  ["", "리포트 솔루션 공급업체 계약"],
  ["", "모니터링 솔루션 공급업체 계약"],
  ["", "글로벌 DBMS 제조사 골드 파트너십 체결"],
  ["", "국산 DBMS·미들웨어 솔루션 공급업체 등록"],
  ["", "IT 인프라 기업 Business Partner 계약"],
  ["", "DB 전용 어플라이언스 공급업체 등록"],
  ["", "백업 솔루션 공급업체 계약"],
];

export const historyItems: HistoryItem[] = rawHistory.map(([year, text]) => ({
  year: year || "20XX",
  text,
  confirmed: Boolean(year),
}));
