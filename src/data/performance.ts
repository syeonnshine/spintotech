export type PerformanceRecord = {
  name: string;
  type: string;
  period: string;
  client: string;
  amount: number; // 억 원
  year: string;
};

// 연도 필터 버튼 목록. 실적 데이터에서 뽑지 않고 따로 둔 이유: 실적이 아직 없는 연도(2026)도 미리 노출하기 위함
export const performanceYears = ["2026", "2025", "2024", "2023", "2022"] as const;

// 사업실적 10건 — 회사소개서 6p 그대로. 금액 공개 여부는 [확인 필요] (기획안.pdf 4p)
export const performanceRecords: PerformanceRecord[] = [
  { name: "상용S/W RDBMS(Oracle) 유지보수", type: "유지보수", period: "2025.01 – 2025.12", client: "한전 (한전KDN)", amount: 13, year: "2025" },
  { name: "2025년 RDBMS(Oracle) 상용S/W 유지보수", type: "유지보수", period: "2025.01 – 2025.12", client: "한전 (한전KDN)", amount: 9, year: "2025" },
  { name: "중부발전 상용SW Web/WAS(JEUS, WebtoB)·Tibero 유지관리", type: "유지보수", period: "2024.06 – 2026.07", client: "중부발전 (한전KDN)", amount: 5, year: "2024" },
  { name: "중부발전 상용SW 오라클 유지관리 용역", type: "유지보수", period: "2024.06 – 2026.07", client: "중부발전 (한전KDN)", amount: 16, year: "2024" },
  { name: "상용S/W RDBMS(Oracle) 유지보수", type: "유지보수", period: "2024.04 – 2024.12", client: "한전 (한전KDN)", amount: 10, year: "2024" },
  { name: "RDBMS(Oracle) 상용S/W 유지보수", type: "유지보수", period: "2024.04 – 2024.12", client: "한전 (한전KDN)", amount: 7, year: "2024" },
  { name: "상용S/W RDBMS(Oracle) 유지보수", type: "유지보수", period: "2023.01 – 2024.03", client: "한전 (한전KDN)", amount: 7, year: "2023" },
  { name: "RDBMS(Oracle) 상용S/W 유지보수", type: "유지보수", period: "2023.01 – 2024.03", client: "한전 (한전KDN)", amount: 20, year: "2023" },
  { name: "DRS 구축용 시스템 S/W 구매 (Oracle 외)", type: "자재구매", period: "2022.08", client: "한전 (한전KDN)", amount: 30, year: "2022" },
  { name: "MaxGauge 외 2종 구매 (Oracle 외)", type: "자재구매", period: "2022.02", client: "한전 (한전KDN)", amount: 80, year: "2022" },
];
