export type BusinessArea = {
  id: string;
  no: string;
  title: string;
  team: string;
  desc: string;
  // 메인 카드용 한 줄 요약 — 사업분야 페이지는 desc를 그대로 사용
  summary: string;
  duties: string[];
  products: string[];
};

// 사업분야 4개 — 조직도(회사소개서 3p) 기준
export const businessAreas: BusinessArea[] = [
  {
    id: "supply",
    no: "01",
    title: "솔루션 공급",
    team: "솔루션사업팀",
    desc: "Oracle·TmaxSoft 공식 파트너로서 DBMS, 미들웨어, 모니터링·백업 솔루션을 공공기관 입찰과 구매 절차에 맞춰 공급합니다.",
    summary: "Oracle·TmaxSoft DBMS와 미들웨어, 모니터링·백업 솔루션을 공공 입찰·구매 절차에 맞춰 공급합니다.",
    duties: ["Oracle 솔루션 영업", "TmaxSoft 솔루션 영업", "모니터링·백업 솔루션 영업"],
    products: ["Oracle RDBMS", "Exadata", "WebLogic", "Tibero", "JEUS", "WebtoB", "Acronis"],
  },
  {
    id: "support",
    no: "02",
    title: "기술지원·유지보수",
    team: "기술지원팀",
    desc: "한전·발전사의 상용 소프트웨어를 연 단위로 유지보수하며 장애 대응, 정기 점검, 패치와 업그레이드를 수행합니다.",
    summary: "Oracle·TmaxSoft 전담 엔지니어가 장애 대응, 정기 점검, 패치와 업그레이드를 수행합니다.",
    duties: ["Oracle 기술지원", "TmaxSoft 기술지원", "상용 S/W 유지보수 기술지원"],
    products: ["Oracle RDBMS", "Tibero", "JEUS", "WebtoB"],
  },
  {
    id: "si",
    no: "03",
    title: "SI·IT 인프라 컨설팅",
    team: "SI 영업팀",
    desc: "데이터베이스 설계부터 인프라 구성, 기술 교육까지 시스템 도입 전 과정을 컨설팅하고 구축합니다.",
    summary: "DBMS 설계, 인프라 구성 컨설팅, 기술 교육으로 시스템 도입 전 과정을 지원합니다.",
    duties: ["DBMS 설계", "IT 인프라 컨설팅", "기술컨설팅 및 교육", "SI 영업"],
    products: [],
  },
  {
    id: "ai",
    no: "04",
    title: "AI·빅데이터",
    team: "AI/빅데이터 컨설팅",
    desc: "공공기관에 축적된 데이터를 활용할 수 있도록 AI·빅데이터 컨설팅과 구축을 수행합니다.",
    summary: "AI·빅데이터 컨설팅과 구축으로 축적된 데이터를 업무에 활용할 수 있게 합니다.",
    duties: ["AI 컨설팅 및 구축", "빅데이터 컨설팅 및 구축", "AI/빅데이터 영업"],
    products: [],
  },
];
