import PageHero from "../../components/PageHero";
import { historyItems } from "../../data/history";
import { CURRENT_YEAR, FOUNDED_YEAR } from "../../data/company";

const tabs = [
  { label: "회사개요", path: "/company/overview" },
  { label: "연혁", path: "/company/history" },
];

export default function History() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "회사소개" }, { label: "연혁" }]}
        title="연혁"
        desc="2009년 설립 이후 제조사와 쌓아온 파트너십의 기록입니다."
        tabs={tabs}
      />

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">
          {FOUNDED_YEAR} – {CURRENT_YEAR}
        </h2>
        <p className="mt-2 text-muted">
          법인 설립부터 제조사 골드 파트너십, DB 어플라이언스 공급업체 등록까지 이어진 {CURRENT_YEAR - FOUNDED_YEAR}년입니다.
        </p>

        <ol className="relative mt-10 border-l border-line pl-8">
          {historyItems.map((item, i) => (
            <li key={item.text} className="mb-8 last:mb-0">
              <span
                className={`absolute -left-[9px] h-4 w-4 rounded-full border-2 ${
                  i === 0 ? "border-brand bg-brand" : "border-[#8EA3BC] bg-white"
                }`}
              />
              <span
                className={`text-sm font-bold ${item.confirmed ? "text-brand" : "text-[#A3AEBC]"}`}
              >
                {item.year}
              </span>
              <p className={`mt-1 ${i === 0 ? "font-bold text-body" : "text-muted"}`}>
                {item.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-xs text-muted">
          연도가 20XX로 표시된 항목은 회사 확인 후 정확한 연도로 교체합니다.
        </p>
      </section>
    </div>
  );
}
