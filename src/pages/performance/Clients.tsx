import PageHero from "../../components/PageHero";
import LogoGrid from "../../components/LogoGrid";
import { clientLogos, makerLogos, distributorLogos } from "../../data/clients";

const tabs = [
  { label: "사업실적", path: "/performance" },
  { label: "고객사·파트너", path: "/performance/clients" },
];

export default function Clients() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "실적·고객사" }, { label: "고객사·파트너" }]}
        title="고객사·파트너"
        desc="한국전력과 발전사를 고객으로, 글로벌·국내 제조사와 파트너 계약을 맺고 있습니다."
        tabs={tabs}
      />

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">고객사</h2>
        <p className="mt-2 text-muted">한국전력과 한국수력원자력을 비롯한 공공기관·발전사</p>
        <div className="mt-8">
          <LogoGrid logos={clientLogos} />
        </div>
      </section>

      <section className="bg-section">
        <div className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
          <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">제조사</h2>
          <p className="mt-2 text-muted">제품 공급 파트너 계약을 맺은 국내외 소프트웨어 제조사</p>
          <div className="mt-8">
            <LogoGrid logos={makerLogos} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">총판·협력사</h2>
        <p className="mt-2 text-muted">
          대형 총판과의 파트너 계약, 지역 협력업체와의 협업으로 제품 공급과 SI 사업을 수행합니다.
        </p>
        <div className="mt-8">
          <LogoGrid logos={distributorLogos} />
        </div>
        <p className="mt-4 text-xs text-muted">
          로고에 마우스를 올리거나 누르면 한글 회사명이 표시됩니다.
        </p>
      </section>
    </div>
  );
}
