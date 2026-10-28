import PageHero from "../components/PageHero";
import { businessAreas } from "../data/businessAreas";

export default function Business() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "사업분야" }]}
        title="사업분야"
        desc="제품 공급, 기술지원, 컨설팅, AI·빅데이터까지 4개 분야를 전담 조직이 수행합니다."
      />

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <div className="space-y-6">
          {businessAreas.map((area) => (
            <div key={area.id} className="rounded border border-line bg-white p-8">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-2xl font-bold text-line">{area.no}</span>
                <h2 className="text-xl font-bold text-navy">{area.title}</h2>
                <span className="text-sm text-muted">담당 조직 · {area.team}</span>
              </div>
              <p className="mt-3 max-w-2xl text-sm text-muted">{area.desc}</p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xs font-semibold text-brand">주요 업무</h3>
                  <ul className="mt-2 space-y-1 text-sm text-body">
                    {area.duties.map((d) => (
                      <li key={d}>· {d}</li>
                    ))}
                  </ul>
                </div>
                {area.products.length > 0 && (
                  <div>
                    <h3 className="text-xs font-semibold text-brand">관련 제품</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {area.products.map((p) => (
                        <span
                          key={p}
                          className="rounded border border-line bg-section px-3 py-1 text-xs text-body"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
