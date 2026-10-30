import { Link } from "react-router-dom";
import PageHero from "./PageHero";

type Props = {
  title: string;
};

// 콘텐츠 검토 전까지 임시로 노출하는 준비중 화면 — 원래 페이지 컴포넌트는 지우지 않고 App.tsx 라우트만 교체
export default function ComingSoon({ title }: Props) {
  return (
    <div>
      <PageHero
        crumbs={[{ label: "홈", path: "/" }, { label: title }]}
        title={title}
        desc="페이지 내용을 준비하고 있습니다."
      />

      <section className="mx-auto max-w-container px-6 py-section-mobile sm:py-section">
        <div className="rounded border border-line bg-white px-6 py-20 text-center">
          <h2 className="text-[28px] font-bold text-navy sm:text-[32px]">준비중입니다</h2>
          <p className="mt-3 text-muted">
            보다 정확한 정보를 제공하기 위해 페이지를 준비하고 있습니다.
            <br className="hidden sm:block" /> 빠른 시일 내에 찾아뵙겠습니다.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block rounded bg-navy px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            홈으로 이동
          </Link>
        </div>
      </section>
    </div>
  );
}
