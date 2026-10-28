import { useState } from "react";
import PageHero from "../../components/PageHero";
import PerformanceTable from "../../components/PerformanceTable";
import { performanceRecords, performanceYears } from "../../data/performance";

const tabs = [
  { label: "사업실적", path: "/performance" },
  { label: "고객사·파트너", path: "/performance/clients" },
];

export default function Performance() {
  const years = ["전체", ...performanceYears];
  const [year, setYear] = useState("전체");

  const filtered =
    year === "전체" ? performanceRecords : performanceRecords.filter((r) => r.year === year);

  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "실적·고객사" }, { label: "사업실적" }]}
        title="사업실적"
        desc="한전KDN을 통해 발주된 한국전력·발전사 상용 S/W 유지보수 및 구매 사업입니다."
        tabs={tabs}
      />

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* 연도가 계속 늘어나므로 모바일은 한 줄 스와이프로 둠. 스크롤바는 숨기고 우측 페이드로 더 있다는 걸 암시 */}
          <div className="relative -mx-6 w-[calc(100%+3rem)] sm:mx-0 sm:w-auto">
            <div className="flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {years.map((y) => (
              <button
                key={y}
                type="button"
                aria-pressed={year === y}
                onClick={() => setYear(y)}
                className={`shrink-0 rounded border px-4 py-2 text-sm font-medium ${
                  year === y
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-body hover:border-brand hover:text-brand"
                }`}
              >
                {y}
              </button>
            ))}
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white sm:hidden" />
          </div>
          <p className="text-sm text-muted">
            총 <span className="font-bold text-navy">{filtered.length}</span>건
          </p>
        </div>

        <div className="mt-6">
          {/* 실적 없는 연도를 미리 노출하므로 빈 표 대신 안내 문구 */}
          {filtered.length > 0 ? (
            <PerformanceTable records={filtered} showType showAmount={false} />
          ) : (
            <p className="rounded border border-line bg-section px-4 py-12 text-center text-sm text-muted">
              {year}년 사업실적은 준비 중입니다.
            </p>
          )}
        </div>

        <p className="mt-4 text-xs text-muted">
          연도는 사업 시작 연도 기준입니다.
        </p>
      </section>
    </div>
  );
}
