export type OrgTeam = {
  name: string;
  roles: string[];
};

// 조직도 — 회사소개서 3p 기준, 경영지원팀 업무는 자료 확정 전까지 확인 필요
export const orgTeams: OrgTeam[] = [
  {
    name: "솔루션사업팀",
    roles: ["Oracle 솔루션 영업", "TmaxSoft 솔루션 영업", "모니터링·백업 솔루션 영업"],
  },
  {
    name: "기술지원팀",
    roles: ["Oracle 기술지원", "TmaxSoft 기술지원", "유지보수 기술지원"],
  },
  {
    name: "SI 영업팀",
    roles: ["DBMS 설계", "IT 인프라 컨설팅", "기술컨설팅 및 교육", "SI 영업"],
  },
  {
    name: "AI/빅데이터 컨설팅",
    roles: ["AI 컨설팅 및 구축", "빅데이터 컨설팅 및 구축", "AI/빅데이터 영업"],
  },
  {
    name: "경영지원팀",
    roles: ["[담당 업무 확인 필요]"],
  },
];

export type Partnership = {
  group: string;
  title: string;
  desc: string;
};

// 파트너십·협력업체 등록 — 회사개요 페이지용
export const partnerships: Partnership[] = [
  { group: "제조사 파트너", title: "Oracle OPN 골드 파트너", desc: "Oracle Exadata 공급업체 등록" },
  { group: "제조사 파트너", title: "TmaxSoft 솔루션 공급업체", desc: "Tibero · JEUS · WebtoB" },
  { group: "공공기관 협력업체", title: "한국전력공사 · 한전KDN", desc: "한국수력원자력 협력업체 등록" },
];
