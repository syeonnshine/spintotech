import { Link } from "react-router-dom";
import { navItems } from "../data/nav";
import { company } from "../data/company";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    // 흰 배경이라 흰 본문 페이지와 붙을 때 경계가 사라지지 않도록 상단 구분선 유지
    // 데스크톱은 회사정보(좌)·메뉴(우) 한 줄 배치로 높이를 줄여 메인이 한 화면에 들어오게 함
    <footer className="border-t border-line bg-white text-body">
      <div className="mx-auto flex max-w-container flex-col gap-5 px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:py-6 short:py-4">
        <div>
          {/* 헤더와 같은 로고 — 흰 배경이라 원본 색 그대로 사용 */}
          <Link to="/" className="inline-block">
            <img src={logo} alt={company.nameKo} className="h-10 w-auto" />
          </Link>
          <address className="mt-2 text-sm not-italic leading-relaxed text-muted">
            {/* 데스크톱에서는 주소·연락처를 한 줄로 이어 붙임 */}
            {company.address}
            <span aria-hidden="true" className="mx-2 hidden lg:inline">|</span>
            <br className="lg:hidden" />
            {/* 번호 단위로 묶어 좁은 화면에서 번호 중간이 끊기지 않게 함. 모바일에서 바로 걸 수 있도록 tel 링크 */}
            <a href={`tel:${company.phone}`} className="whitespace-nowrap hover:text-navy">
              T. {company.phone}
            </a>
            <span aria-hidden="true" className="mx-2">|</span>
            <span className="whitespace-nowrap">F. {company.fax}</span>
          </address>
        </div>
        {/* 데스크톱은 메뉴 아래에 저작권을 둬서 좌·우 블록 높이를 맞춤 (푸터가 두 줄 높이로 끝남) */}
        <div className="flex flex-col gap-3 lg:items-end">
          {/* 320px에서는 메뉴 4개가 한 줄을 넘으므로 줄바꿈 허용 */}
          <nav aria-label="푸터 메뉴" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="hover:text-brand">
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs text-muted">© {new Date().getFullYear()} SpintoTechnology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
