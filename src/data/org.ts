export type OrgTeam = {
  name: string;
  roles: string[];
};

// 조직도 — 회사소개서 3p 기준, 경영지원팀 업무는 자료 확정 전까지 확인 필요
export const orgTeams: OrgTeam[] = [
  {
    name: "솔루션사업팀",
    roles: ["DBMS 솔루션 영업", "미들웨어 솔루션 영업", "모니터링·백업 솔루션 영업"],
  },
  {
    name: "기술지원팀",
    roles: ["DBMS 기술지원", "미들웨어 기술지원", "유지보수 기술지원"],
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
    roles: ["재무·회계","인사·노무","총무"],
  },
];

export type Partnership = {
  group: string;
  title: string;
  desc: string;
};

// 제조사 파트너십 — 회사개요 페이지용
export const partnerships: Partnership[] = [
  { group: "제조사 파트너", title: "글로벌 DBMS 제조사 골드 파트너", desc: "DB 전용 어플라이언스 공급업체 등록" },
  { group: "제조사 파트너", title: "국산 DBMS·미들웨어 공급업체", desc: "DBMS · WAS · 웹서버 솔루션" },
];
