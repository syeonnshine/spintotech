export type NavItem = {
  label: string;
  path: string;
};

// 사이트맵 기준 4개 메뉴만 — 문의 폼·게시판·채용은 두지 않음 (기획안.pdf 2p)
export const navItems: NavItem[] = [
  { label: "회사소개", path: "/company/overview" },
  { label: "사업분야", path: "/business" },
  { label: "제품소개", path: "/products" },
  // 실적·고객사는 고객사명 비공개 방침으로 메뉴에서 제외하고 고객지원으로 대체 (페이지 파일은 보존)
  { label: "고객지원", path: "/support" },
];
