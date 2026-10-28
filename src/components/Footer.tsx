import { Link } from "react-router-dom";
import { navItems } from "../data/nav";
import { company } from "../data/company";
import logoRaw from "../assets/logo.svg?raw";

// <img>로 넣으면 SVG 내부 색을 못 바꾸므로 raw로 받아 어두운 글자색만 흰색으로 치환 (원본 파일은 헤더와 공유)
const footerLogo = logoRaw.replace(/#231F20/gi, "#FFFFFF");

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-container px-6 py-14">
        <Link
          to="/"
          aria-label={company.nameKo}
          className="inline-block h-12 [&>svg]:h-full [&>svg]:w-auto"
          dangerouslySetInnerHTML={{ __html: footerLogo }}
        />
        <address className="mt-4 text-sm not-italic leading-relaxed text-white/70">
          {company.nameKo}
          <br />
          {company.address}
          <br />
          {/* 번호 단위로 묶어 좁은 화면에서 번호 중간이 끊기지 않게 함. 모바일에서 바로 걸 수 있도록 tel 링크 */}
          <a href={`tel:${company.phone}`} className="whitespace-nowrap hover:text-white">
            T. {company.phone}
          </a>
          <span aria-hidden="true" className="mx-2">|</span>
          <span className="whitespace-nowrap">F. {company.fax}</span>
        </address>
        {/* 320px에서는 메뉴 4개가 한 줄을 넘으므로 줄바꿈 허용 */}
        <nav aria-label="푸터 메뉴" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} SpintoTechnology. All rights reserved.</p>
      </div>
    </footer>
  );
}
