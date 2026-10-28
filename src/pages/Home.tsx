import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import StatCards from "../components/StatCards";
import LogoGrid from "../components/LogoGrid";
import PerformanceTable from "../components/PerformanceTable";
import { businessAreas } from "../data/businessAreas";
import { productGroups } from "../data/products";
import { performanceRecords } from "../data/performance";
import { clientLogos } from "../data/clients";
import { heroContent } from "../data/company";
import heroImage from "../assets/Hero.svg";
import Reveal from "../components/Reveal";

// 사업분야 카드 아이콘 — 데이터가 아닌 UI 요소라 id로 매핑해 컴포넌트 쪽에 둠
const areaIcons: Record<string, ReactNode> = {
  supply: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  support: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z" />,
  si: (
    <>
      <rect x="9" y="2" width="6" height="5" rx="1" />
      <rect x="2" y="17" width="6" height="5" rx="1" />
      <rect x="16" y="17" width="6" height="5" rx="1" />
      <path d="M12 7v5M5 17v-3h14v3" />
    </>
  ),
  ai: (
    <>
      <path d="M3 20h18" />
      <path d="M6 16V10M11 16V6M16 16v-4M20 16V8" />
    </>
  ),
};

type SectionHeadProps = {
  eyebrow?: string;
  title: string;
  linkTo: string;
  linkLabel: string;
};

// 섹션 공통 헤더: 작은 라벨 + h2, 오른쪽 "전체 보기" 링크 (좁은 화면에서는 아래로 줄바꿈)
function SectionHead({ eyebrow, title, linkTo, linkLabel }: SectionHeadProps) {
  return (
    <Reveal className="flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="text-sm font-semibold text-brand sm:text-[15px]">{eyebrow}</p>}
        <h2 className={`text-2xl font-bold leading-snug text-body sm:text-[32px] ${eyebrow ? "mt-2 sm:mt-3" : ""}`}>{title}</h2>
      </div>
      <Link to={linkTo} className="text-[15px] font-semibold text-brand sm:text-base">
        {linkLabel} →
      </Link>
    </Reveal>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5FC3F5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  );
}

// Hero 요소별 등장 지연값 (ms) — 배지 → 타이틀 → 설명 → 버튼 → 체크리스트 순으로 120ms씩
const introDelay = (step: number) => ({ "--intro-delay": `${step * 120}ms` }) as CSSProperties;

export default function Home() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="hero-bg relative overflow-hidden text-white">
        {/* 데스크톱은 텍스트/이미지 2단, 모바일은 텍스트 아래로 이미지가 내려가도록 grid로 배치 */}
        <div className="mx-auto grid max-w-container items-center gap-10 px-5 pb-[72px] pt-10 sm:px-6 lg:grid-cols-2 lg:pb-32 lg:pt-24">
          <div className="flex flex-col gap-5 lg:gap-7">
            <p style={introDelay(0)} className="intro flex items-center gap-2 self-start rounded-full border border-[#9FC9EC]/45 bg-sky/10 px-3.5 py-1.5 text-[13px] font-semibold text-[#BFE3FA] sm:text-sm">
              <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[#5FC3F5]" />
              <span className="sm:hidden">{heroContent.badgeShort}</span>
              <span className="hidden sm:inline">{heroContent.badge}</span>
            </p>
            <h1 style={introDelay(1)} className="intro text-[30px] font-bold leading-[1.35] tracking-[-0.02em] sm:text-[44px] lg:text-[54px] lg:leading-[1.28]">
              ICT 산업의 선두기업
              <br className="hidden sm:block" /> <span className="text-[#6ac9f8]">스핀토테크놀러지</span>
              
            </h1>
            <p style={introDelay(2)} className="intro max-w-[520px] text-base text-[#D3E0EE] sm:text-[19px]">{heroContent.description}</p>
            <div style={introDelay(3)} className="intro flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/company/overview"
                className="rounded-lg bg-white px-[26px] py-[15px] text-center font-bold text-navy transition-colors hover:bg-[#E6F2FB]"
              >
                회사소개 보기
              </Link>
              <Link
                to="/performance"
                className="rounded-lg border border-white/50 bg-white/[0.06] px-[26px] py-[14px] text-center font-semibold text-white transition-colors hover:border-white"
              >
                사업실적 보기 →
              </Link>
            </div>
            <ul style={introDelay(4)} className="intro mt-2 flex flex-wrap gap-x-7 gap-y-2.5 border-t border-[#9FC9EC]/25 pt-5 text-[15px] text-[#D3E0EE]">
              {heroContent.checks.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* 장식용 일러스트라 alt는 비워 스크린리더가 건너뛰게 함 */}
          <img src={heroImage} alt="" aria-hidden="true" className="intro-image mx-auto w-full max-w-md lg:max-w-none" />
        </div>
      </section>

      {/* 2. 숫자로 보는 스핀토 — Hero 하단에 겹쳐 올려 시선이 자연스럽게 이어지게 함 */}
      <section aria-label="숫자로 보는 스핀토" className="relative mx-auto -mt-10 max-w-container px-5 sm:px-6 lg:-mt-14">
        <StatCards />
      </section>

      {/* 3. 사업 분야 */}
      <section className="mx-auto max-w-container px-5 py-section-mobile sm:px-6 sm:py-section">
        <SectionHead eyebrow="사업분야" title="공급에서 끝나지 않고, 운영까지 책임집니다" linkTo="/business" linkLabel="사업분야 전체 보기" />
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {businessAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 100}>
            <Link
              to="/business"
              className="group flex h-full flex-col gap-3.5 rounded-xl border border-line px-7 py-8 text-body transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-[0_16px_40px_-20px_rgba(31,111,181,0.45)]"
            >
              <svg aria-hidden="true" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1F6FB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                {areaIcons[area.id]}
              </svg>
              <h3 className="text-xl font-bold">{area.title}</h3>
              <p className="text-[15px] text-muted">{area.summary}</p>
            </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4. 주력 솔루션 */}
      <section className="bg-section">
        <div className="mx-auto max-w-container px-5 py-section-mobile sm:px-6 sm:py-section">
          <SectionHead eyebrow="주력 솔루션" title="공공기관이 가장 많이 쓰는 제품을 직접 공급합니다" linkTo="/products" linkLabel="전체 제품 보기" />
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12">
            {productGroups.map((group, i) => (
              // 2열이라 카드 폭이 넓어져 칩만으로는 비어 보임 → 그룹 설명 + 제품별 분류·제조사 타일로 채움
              <Reveal key={group.id} delay={i * 120}>
              <div className="flex h-full flex-col rounded-xl border-t-4 border-brand bg-white p-5 sm:p-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-navy">{group.title}</h3>
                  {/* <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                    {group.items.length}개 제품
                  </span> */}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{group.desc}</p>
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    // 제품 수가 홀수(DBMS 3개)면 마지막 타일을 2칸으로 늘려 빈칸이 생기지 않게 함
                    <li key={item.name} className="rounded-lg border border-line bg-section/50 px-4 py-3 last:odd:col-span-2">
                      <p className="text-xs font-semibold text-brand">{item.kind}</p>
                      <p className="mt-1 font-bold text-body">{item.short ?? item.name}</p>
                      <p className="mt-0.5 text-xs text-muted">{item.maker}</p>
                    </li>
                  ))}
                </ul>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 주요 사업실적 */}
      <section className="mx-auto max-w-container px-5 py-section-mobile sm:px-6 sm:py-section">
        <SectionHead eyebrow="주요 사업실적" title="한전·발전사의 핵심 시스템을 매년 맡고 있습니다" linkTo="/performance" linkLabel="전체 실적 보기" />
        <Reveal delay={100} className="mt-8 lg:mt-10">
          <PerformanceTable records={performanceRecords.slice(0, 5)} showAmount={false} />
        </Reveal>
      </section>

      {/* 6. 고객사 로고 */}
      <section className="bg-section">
        <div className="mx-auto max-w-container px-5 py-section-mobile sm:px-6 sm:py-section">
          <SectionHead title="함께하는 고객사" linkTo="/performance/clients" linkLabel="고객사·파트너 전체 보기" />
          <Reveal delay={100} className="mt-8">
            <LogoGrid logos={clientLogos} />
          </Reveal>
    
        </div>
      </section>
    </div>
  );
}
