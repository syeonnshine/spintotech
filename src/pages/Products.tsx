import PageHero from "../components/PageHero";
import { publishedProducts } from "../data/products";

export default function Products() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "제품소개" }]}
        title="제품소개"
        desc="핵심 업무 데이터를 지키는 데이터베이스와 전용 플랫폼을 공급합니다."
      />

      {/* 공개 제품이 2개뿐이라 그룹 구분 없이 한 섹션에 카드로 나열 */}
      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {publishedProducts.map((item) => (
            // 카드 전체를 제조사 공식 페이지 링크로 — 외부 사이트라 새 탭으로 열어 이탈을 막음
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded border border-line bg-white p-6 transition-colors hover:border-brand"
            >
              <p className="text-xs font-medium text-brand">
                {item.maker} · {item.kind}
              </p>
              <h3 className="mt-2 text-lg font-bold text-navy">{item.name}</h3>
              <ul className="mt-3 flex-1 space-y-1 text-sm text-muted">
                {item.points.map((pt) => (
                  <li key={pt}>· {pt}</li>
                ))}
              </ul>
              <span className="mt-5 text-sm font-medium text-brand group-hover:underline">
                Oracle 공식 사이트 보기 ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
