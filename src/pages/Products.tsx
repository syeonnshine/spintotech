import PageHero from "../components/PageHero";
import { productGroups } from "../data/products";

export default function Products() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "제품소개" }]}
        title="제품소개"
        desc="Oracle·TmaxSoft를 중심으로 공공기관 시스템에 필요한 DBMS와 미들웨어를 공급합니다."
      />

      {/* 그룹마다 섹션을 나누고 배경을 번갈아 깔아 DBMS/미들웨어/모니터링 경계를 구분 */}
      {productGroups.map((group, i) => (
        <section key={group.id} className={i % 2 === 1 ? "bg-section" : undefined}>
          <div className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
            <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">{group.title}</h2>
            <p className="mt-2 text-muted">{group.desc}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <div key={item.name} className="rounded border border-line bg-white p-6">
                  <p className="text-xs font-medium text-brand">
                    {item.maker} · {item.kind}
                  </p>
                  <h3 className="mt-2 font-bold text-navy">{item.name}</h3>
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {item.points.map((pt) => (
                      <li key={pt}>· {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
