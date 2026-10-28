import { Link, useLocation } from "react-router-dom";
import heroCompany from "../assets/page-hero-company.svg";
import heroBusiness from "../assets/page-hero-business.svg";
import heroProducts from "../assets/page-hero-products.svg";
import heroResults from "../assets/page-hero-results.svg";

type Crumb = { label: string; path?: string };

type Props = {
  crumbs: Crumb[];
  title: string;
  desc: string;
  tabs?: { label: string; path: string }[];
};

// 하위 탭(회사개요/연혁 등)끼리 같은 이미지를 쓰도록 경로 첫 segment 기준으로 매핑
const heroImages: Record<string, string> = {
  company: heroCompany,
  business: heroBusiness,
  products: heroProducts,
  performance: heroResults,
};

// 서브페이지 공통 상단 영역: 배경 이미지 + breadcrumb + 타이틀 + (있으면) 하위 탭
export default function PageHero({ crumbs, title, desc, tabs }: Props) {
  const { pathname } = useLocation();
  const image = heroImages[pathname.split("/")[1]];

  return (
    <div
      className="bg-navy bg-cover bg-center text-white"
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      {/* 이미지 좌측이 어두운 페이드라 텍스트는 좌측 정렬 그대로 두고 흰색으로 */}
      <div className="mx-auto max-w-container px-6 py-14 sm:py-20">
        <p className="text-xs text-white/70">
          {crumbs.map((c, i) => (
            <span key={c.label}>
              {i > 0 && " › "}
              {c.path ? (
                <Link to={c.path} className="hover:text-white">
                  {c.label}
                </Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </p>
        <h1 className="mt-3 text-[32px] font-bold sm:text-[40px]">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-white/80 sm:text-base">{desc}</p>
        {tabs && (
          <div className="mt-6 flex gap-2">
            {tabs.map((tab) => {
              const active = tab.path === pathname;
              return (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border-white bg-white text-navy"
                      : "border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/20"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
