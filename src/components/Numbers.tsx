import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { stats } from "../data/site";
import { Container, Eyebrow } from "./ui";

function Count({ value }: { value: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const [current, setCurrent] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setCurrent(value);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / 900);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return <span ref={ref}>{current}</span>;
}

export function Numbers() {
  return (
    <section className="bg-sage py-24 md:py-28">
      <Container>
        <Eyebrow>By the numbers</Eyebrow>
        <h2 className="mt-4 max-w-[720px] text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
          A small range, clearly priced.
        </h2>
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ink/15 pt-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-[56px] leading-none font-medium tracking-[-0.04em] text-moss md:text-[84px]">
                {stat.prefix}
                <Count value={stat.value} />
                {stat.suffix}
              </p>
              <p className="mt-3 max-w-[18ch] text-[15px] leading-snug text-ink/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
