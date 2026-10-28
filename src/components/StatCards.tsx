import { useEffect, useState } from "react";
import { stats } from "../data/company";
import { prefersReducedMotion, useInView } from "../hooks/useInView";
import Reveal from "./Reveal";

const DURATION = 1800;
// 첫 화면에서 Hero 문구가 다 올라온 뒤 숫자 카드가 이어서 등장하도록 지연 (ms)
const ENTER_DELAY = 500;
// 빠르게 올라가다 끝에서 천천히 멈추는 easeOutExpo — 마지막 숫자가 또렷하게 읽히도록
const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - 2 ** (-10 * t));

function CountUp({ value, start }: { value: string; start: boolean }) {
  const target = Number(value);
  const [current, setCurrent] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (!start || prefersReducedMotion()) return;
    let frame = 0;
    const begin = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - begin - ENTER_DELAY) / DURATION, 0), 1);
      setCurrent(Math.round(target * easeOutExpo(progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    // 자릿수가 0 → 197로 늘며 단위가 좌우로 밀리지 않도록, 최종값을 투명하게 깔아 폭을 미리 확보
    <span className="inline-grid">
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {value}
      </span>
      <span className="col-start-1 row-start-1">{current}</span>
    </span>
  );
}

// 카드 3개를 테두리 하나로 묶고 칸 사이만 구분선으로 나눔 (모바일은 가로선, sm 이상은 세로선)
export default function StatCards() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Reveal delay={ENTER_DELAY}>
      <div
        ref={ref}
        className="grid grid-cols-1 divide-y divide-line rounded-xl border border-line bg-white shadow-[0_20px_50px_-24px_rgba(11,37,69,0.35)] sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="p-6 sm:p-8">
            <div className="text-[32px] font-bold text-brand sm:text-[40px]">
              {/* 스크린리더는 애니메이션 중간값 대신 최종값만 읽도록 */}
              <span className="sr-only">
                {stat.value}
                {stat.unit}
              </span>
              <span aria-hidden="true">
                <CountUp value={stat.value} start={inView} />
                <span className="text-xl">{stat.unit}</span>
              </span>
            </div>
            <p className="mt-1 text-[15px] text-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
