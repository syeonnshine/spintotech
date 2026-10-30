import PageHero from "../../components/PageHero";
import NaverMap from "../../components/NaverMap";
import { company, greeting } from "../../data/company";
// import { orgTeams } from "../../data/org";

export default function Overview() {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: "회사소개" }, { label: "회사개요" }]}
        title="회사개요"
        desc="IT 인프라를 공급하고 운영하는 스핀토테크놀러지를 소개합니다."
      />

      {/* 인사말 */}
      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <h2 className="text-2xl font-bold leading-snug text-navy sm:text-[32px]">
          {greeting.title[0]}
          {/* 모바일에서는 자연 줄바꿈에 맡김 — 강제 br이 있으면 첫 줄 끝 단어만 한 줄로 떨어짐 */}
          <br className="hidden sm:block" />{" "}
          {greeting.title[1]}
        </h2>
        {/* 데스크톱은 전체 본문, 모바일은 축약본 */}
        <div className="mt-6 hidden max-w-3xl space-y-4 text-base leading-relaxed sm:text-lg text-muted sm:block">
          {greeting.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:hidden">
          {greeting.bodyShort.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <p className="mt-8 text-lg font-semibold text-body sm:text-xl">
          {company.nameKo} 대표이사{" "}
          <span className="ml-3 text-xl font-bold text-navy sm:text-3xl">{company.ceo}</span>
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

      {/* 조직도 — 자료 확정 전까지 비공개. 다시 열 때 주석과 아래 orgTeams import 주석을 함께 해제
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
      */}

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
