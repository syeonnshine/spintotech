import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems } from "../data/nav";
import { company } from "../data/company";
import logo from "../assets/logo.svg";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "text-brand" : "hover:text-brand transition-colors";

export default function Header() { 
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // 메뉴에서 페이지를 이동하면 모바일 메뉴가 열린 채로 남지 않도록 닫음
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      {/* 모바일은 화면 점유를 줄이려 72px, 데스크톱은 로고·메뉴에 여유를 주려 88px */}
      <div className="mx-auto flex h-[72px] max-w-container items-center justify-between px-5 sm:px-6 md:h-[88px]">
        <Link to="/" className="flex shrink-0 items-center">
          <img src={logo} alt={company.nameKo} className="h-11 w-auto md:h-[52px]" />
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav aria-label="주 메뉴" className="hidden gap-10 whitespace-nowrap text-lg font-semibold text-body md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* 모바일 햄버거 버튼 — 4개 메뉴가 한 줄에 들어가지 않는 폭에서만 노출 */}
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
        >
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0B2545" strokeWidth="1.75" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="주 메뉴" className="border-t border-line bg-white md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block border-b border-line px-5 py-4 text-lg font-semibold last:border-0 ${isActive ? "text-brand" : "text-body"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
