// 회사 기본 정보. 전화·이메일·사업자등록번호는 디자인시안 플레이스홀더 그대로 — 자료 확정되면 교체
export type CompanyInfo = {
  nameKo: string;
  nameEn: string;
  ceo: string;
  businessNumber: string;
  foundedAt: string;
  field: string;
  address: string;
  phone: string;
  fax:string;
  email: string;
  // 오시는 길 지도 좌표. 주소→좌표 변환(Geocoding)은 Client Secret이 필요해 정적 사이트에선 못 쓰므로 고정값으로 둠
  location: { lat: number; lng: number };
};

export const company: CompanyInfo = {
  nameKo: "㈜스핀토테크놀러지",
  nameEn: "SPINTOTECHNOLOGY",
  ceo: "이현석",
  businessNumber: "[000-00-00000]",
  foundedAt: "2009년 12월 23일",
  field: "소프트웨어 자문 및 개발공급, 시스템통합 자문 및 구축, 정보제공 및 유지보수",
  address: "서울특별시 강남구 삼성로96길 6, 1804호 (삼성동, 엘지트윈텔 1차)",
  phone: "02-3471-5790",
  fax:"02-3471-5792",
  email: "[대표 이메일]",
  // [확인 필요] 근사값 — 네이버 지도에서 건물 우클릭 → 좌표 복사로 교체
  location: { lat: 37.5094, lng: 127.0567 },
} as const;

// 메인 Hero·숫자 카드에 쓰는 핵심 지표 (회사소개서 출처 — 확정된 실제 수치)
export type StatCard = {
  value: string;
  unit: string;
  label: string;
};

// 업력·연혁 범위가 해마다 자동으로 바뀌도록 설립연도와 올해를 기준값으로 둠 (빌드 시점이 아니라 방문 시점 기준)
export const FOUNDED_YEAR = 2009;
export const CURRENT_YEAR = new Date().getFullYear();

export const stats: StatCard[] = [
  { value: String(CURRENT_YEAR - FOUNDED_YEAR), unit: "년", label: `${FOUNDED_YEAR}년 설립, 공공 IT 인프라 한 길` },
  { value: "197", unit: "억 원", label: "최근 5년 공공 용역·구매 실적" },
  { value: "75", unit: "%", label: "전체 인력 중 전문 기술인력 비율" },
];

// 대표 인사말 — [확인 필요] 대표님 문체·내용 검수 전. "현장에서 직접 지원해 온"은 원격 위주라면 "지원해 온"으로 수정
// 모바일은 전체 본문이 너무 길어 2문단 축약본(bodyShort)으로 대체
export const greeting = {
  title: ["데이터가 멈추지 않는 내일을 위해,", "기술로 신뢰를 지키겠습니다"],
  body: [
    "안녕하십니까. ㈜스핀토테크놀러지 대표이사 이현석입니다.",
    "스핀토테크놀러지는 2009년 설립 이후 데이터베이스 관리 시스템(DBMS)과 시스템 통합(SI) 분야에 집중해 왔습니다. 제품 공급부터 기술지원, 유지보수, 인프라 컨설팅까지 고객의 IT 환경 전반을 함께 책임지고 있습니다.",
    "데이터베이스와 미들웨어는 겉으로 드러나지 않지만, 조직의 모든 업무가 그 위에서 움직입니다. 그래서 저희는 화려한 약속보다 묵묵한 안정성을 가장 중요하게 여깁니다. 전체 인력의 75%를 전문 기술인력으로 구성하고, 고객의 시스템을 현장에서 직접 지원해 온 것도 그 때문입니다.",
    "이제 저희는 축적된 데이터 운영 경험을 바탕으로 AI·빅데이터 분야로 영역을 넓혀 가고 있습니다. 변화하는 기술 환경 속에서도 고객이 가장 먼저 찾는 기술 파트너가 되도록 끊임없이 배우고 준비하겠습니다.",
    "스핀토테크놀러지에 보내주시는 관심과 신뢰에 깊이 감사드립니다.",
  ],
  bodyShort: [
    "스핀토테크놀러지는 2009년 설립 이후 DBMS와 시스템 통합(SI) 분야에 집중해 온 DB·미들웨어 전문 파트너입니다. 제품 공급부터 유지보수까지 고객의 IT 환경을 함께 책임지고 있습니다.",
    "전문 기술인력 중심의 조직으로 고객의 시스템을 지원해 왔으며, 이제 AI·빅데이터로 영역을 넓혀 가고 있습니다. 고객이 가장 먼저 찾는 기술 파트너가 되겠습니다.",
  ],
} as const;

// 메인 Hero 문구 — 배지(데스크톱/모바일 길이 다름)와 신뢰 포인트 체크 항목
export const heroContent = {
  badge: "DBMS·미들웨어 솔루션 공급 전문기업",
  badgeShort: "DBMS·미들웨어 솔루션 전문기업",
  description: "2009년 설립 이후 데이터베이스 관리 시스템과 시스템 통합(SI) 한 분야에 집중해 왔습니다. 고객의 데이터 환경을 설계부터 운영까지 책임집니다.",
  checks: ["DB·미들웨어 기술지원·유지보수", "DB 전용 어플라이언스 공급", "전문 기술인력 75%"],
} as const;
