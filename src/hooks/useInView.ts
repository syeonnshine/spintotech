import { useEffect, useRef, useState } from "react";

// OS "동작 줄이기" 설정 사용자는 애니메이션 없이 바로 보여줌
export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 요소가 뷰포트에 처음 들어오는 순간을 한 번만 감지. 스크롤을 올렸다 내려도 다시 숨겨지지 않게 감지 후 바로 해제
export function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      // 화면 하단 10% 위로 올라왔을 때 시작 → 요소가 화면 끝에 걸쳐 있을 때 애니메이션이 지나가버리지 않게
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
}
