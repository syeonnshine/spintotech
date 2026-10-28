import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  children: ReactNode;
  // 카드 목록에서 순차 등장(stagger)시킬 때 index * 간격으로 넘김 (ms)
  delay?: number;
  className?: string;
};

// 스크롤로 화면에 들어올 때 아래에서 떠오르며 블러가 풀리는 fade-up. 실제 스타일은 index.css의 .reveal
export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
