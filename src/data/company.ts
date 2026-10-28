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

export const stats: StatCard[] = [
  { value: "17", unit: "년", label: "2009년 설립, 공공 IT 인프라 한 길" },
  { value: "197", unit: "억 원", label: "최근 5년 공공 용역·구매 실적" },
  { value: "75", unit: "%", label: "전체 인력 중 전문 기술인력 비율" },
];

export const greetingBody =
  "[대표 인사말 본문 — 회사 확인 후 작성. 설립 배경, 공공·발전사 고객과 쌓아온 신뢰, 기술인력 중심 경영 방침 등을 3~4문단으로 담습니다.]";

// 메인 Hero 문구 — 배지(데스크톱/모바일 길이 다름)와 신뢰 포인트 체크 항목
export const heroContent = {
  badge: "Oracle OPN Gold Partner · TmaxSoft 솔루션 공급업체",
  badgeShort: "Oracle OPN Gold Partner · TmaxSoft 공급업체",
  description: "2009년 설립 이후 데이터베이스 관리 시스템과 시스템 통합(SI) 한 분야에 집중해 왔습니다. 한전·발전사를 비롯한 공공·민간 고객의 데이터 환경을 설계부터 운영까지 책임집니다.",
  checks: ["한전·한수원·한전KDN 협력업체", "Oracle Exadata 공급업체", "전문 기술인력 75%"],
} as const;
