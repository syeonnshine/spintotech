import PageHero from "../../components/PageHero";
import NaverMap from "../../components/NaverMap";
import { company, greetingBody } from "../../data/company";
import { orgTeams, partnerships } from "../../data/org";

const tabs = [
  { label: "회사개요", path: "/company/overview" },
  { label: "연혁", path: "/company/history" },
];

export default function Overview() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "회사소개" }, { label: "회사개요" }]}
        title="회사개요"
        desc="공공·에너지 분야 IT 인프라를 공급하고 운영하는 스핀토테크놀러지를 소개합니다."
        tabs={tabs}
      />

      {/* 인사말 */}
      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-2xl font-bold leading-snug text-navy sm:text-[32px]">
          공공 IT 인프라가 멈추지 않도록,
          {/* 모바일에서는 자연 줄바꿈에 맡김 — 강제 br이 있으면 "않도록,"만 한 줄로 떨어짐 */}
          <br className="hidden sm:block" />{" "}
          가장 가까이에서 지키겠습니다
        </h2>
        <p className="mt-6 max-w-3xl whitespace-pre-line text-sm leading-relaxed text-muted">
          {greetingBody}
        </p>
        <p className="mt-6 text-sm font-semibold text-body">
          {company.nameKo} 대표이사 {company.ceo}
        </p>
      </section>

      {/* 일반현황 */}
      <section className="bg-section">
        <div className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
          <dl className="grid grid-cols-1 gap-6 rounded border border-line bg-white p-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-muted">법인명</dt>
              <dd className="mt-1 font-semibold text-body">{company.nameKo}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">대표자</dt>
              <dd className="mt-1 font-semibold text-body">{company.ceo}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">설립일</dt>
              <dd className="mt-1 font-semibold text-body">{company.foundedAt}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">핵심분야</dt>
              <dd className="mt-1 font-semibold text-body">{company.field}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-muted">소재지</dt>
              <dd className="mt-1 font-semibold text-body">{company.address}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* 조직도 */}
      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">조직도</h2>
        <p className="mt-2 text-muted">
          전문 기술인력 비율 75% — 높은 기술 수준과 서비스 품질을 유지하기 위해 기술 조직에 집중 투자하고 있습니다.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded border border-navy bg-navy p-5 text-center text-sm font-bold text-white lg:col-span-5">
            대표이사
          </div>
          {orgTeams.map((team) => (
            <div key={team.name} className="rounded border border-line bg-white p-5">
              <h3 className="font-bold text-navy">{team.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {team.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 파트너십·협력업체 등록 */}
      <section className="bg-section">
        <div className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
          <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">파트너십·협력업체 등록</h2>
          <p className="mt-2 text-muted">제조사와 공공기관이 인정한 공급 자격</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {partnerships.map((p) => (
              <div key={p.title} className="rounded border border-line bg-white p-6">
                <p className="text-xs font-medium text-brand">{p.group}</p>
                <h3 className="mt-2 font-bold text-navy">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">오시는 길</h2>
        <p className="mt-2 text-muted">{company.address}</p>
        <div className="mt-6">
          <NaverMap lat={company.location.lat} lng={company.location.lng} title={company.nameKo} />
        </div>
      </section>
    </div>
  );
}
