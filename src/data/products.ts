export type Product = {
  maker: string;
  kind: string;
  name: string;
  // 메인 칩처럼 좁은 자리에 쓰는 짧은 표기 (없으면 name 사용)
  short?: string;
  points: string[];
};

export type ProductGroup = {
  id: string;
  title: string;
  desc: string;
  items: Product[];
};

// 제품소개 3그룹 — 회사소개서 2-1p 기준
export const productGroups: ProductGroup[] = [
  {
    id: "dbms",
    title: "DBMS",
    desc: "공공기관 핵심 업무 데이터를 저장하고 관리하는 데이터베이스입니다.",
    items: [
      {
        maker: "ORACLE",
        kind: "관계형 DBMS",
        name: "Oracle RDBMS",
        points: ["글로벌 표준 관계형 데이터베이스", "Linux·Unix 환경에서 가장 널리 쓰이는 RDBMS"],
      },
      {
        maker: "ORACLE",
        kind: "DB 전용 플랫폼",
        name: "Oracle Exadata",
        points: ["Oracle 데이터베이스 전용 통합 플랫폼", "스핀토테크놀러지 Exadata 공급업체 등록"],
      },
      {
        maker: "Tmax Tibero",
        kind: "관계형 DBMS",
        name: "Tibero",
        points: [
          "국산 데이터베이스 관리 시스템",
          "SQL을 포함해 Oracle과 높은 호환성",
          "다양한 플랫폼 지원으로 국내 사용 빈도 높음",
        ],
      },
    ],
  },
  {
    id: "mw",
    title: "미들웨어",
    desc: "웹 요청을 받아 애플리케이션을 실행하는 웹서버와 애플리케이션 서버(WAS)입니다.",
    items: [
      {
        maker: "ORACLE",
        kind: "WAS",
        name: "Oracle WebLogic",
        short: "WebLogic",
        points: ["엔터프라이즈 애플리케이션 개발·운영용 애플리케이션 서버", "GUI 도구와 자동 스크립트로 운영 관리"],
      },
      {
        maker: "ORACLE",
        kind: "웹서버",
        name: "Oracle Web Tier",
        short: "Web Tier",
        points: ["Apache 기반 웹서버", "동적·정적 콘텐츠 지원, 별도 관리 프로세스 제공"],
      },
      
      {
        maker: "TmaxSoft",
        kind: "WAS",
        name: "JEUS",
        points: ["Java EE 기반 애플리케이션 개발·실행·관리 플랫폼", "장애 자동 감지와 대처, 서비스 백업·복구"],
      },
      {
        maker: "TmaxSoft",
        kind: "웹서버",
        name: "WebtoB",
        points: ["대량 요청을 적은 자원으로 안정적으로 처리", "JEUS와 최적 연계"],
      },
    ],
  },
  // {
  //   id: "ops",
  //   title: "모니터링·백업·리포팅",
  //   desc: "운영 중인 시스템의 상태를 살피고 데이터를 지키는 솔루션입니다.",
  //   items: [
  //     {
  //       maker: "JENNIFER",
  //       kind: "모니터링",
  //       name: "JENNIFER",
  //       points: ["애플리케이션 성능 모니터링(APM)", "[제품 설명 확인 필요]"],
  //     },
  //     {
  //       maker: "Acronis",
  //       kind: "백업·복구",
  //       name: "Acronis",
  //       points: ["백업·복구 솔루션", "스핀토테크놀러지 공급업체 계약"],
  //     },
  //     {
  //       maker: "FORCS",
  //       kind: "리포트",
  //       name: "FORCS 리포트 솔루션",
  //       short: "FORCS",
  //       points: ["포시에스 리포트 솔루션", "스핀토테크놀러지 공급업체 계약"],
  //     },
  //   ],
  // },
];
