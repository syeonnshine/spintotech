export type NavItem = {
  label: string;
  path: string;
};

// 사이트맵 기준 4개 메뉴만 — 문의 폼·게시판·채용은 두지 않음 (기획안.pdf 2p)
export const navItems: NavItem[] = [
  { label: "회사소개", path: "/company/overview" },
  { label: "사업분야", path: "/business" },
  { label: "제품소개", path: "/products" },
  { label: "실적·고객사", path: "/performance" },
];
