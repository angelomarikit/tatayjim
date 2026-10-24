import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { products } from "../data/site";
import { useSite } from "../context/SiteContext";
import { PillButton } from "./ui";

function useMinWidth(width: number) {
  const [matches, setMatches] = useState(() => window.matchMedia(`(min-width: ${width}px)`).matches);
  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${width}px)`);
    const update = () => setMatches(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [width]);
  return matches;
}

export function ProductStory() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMinWidth(1024);
  const pinned = desktop && !reduce;
  const [stage, setStage] = useState(0);
  const { openProduct } = useSite();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!pinned) return;
    const next = value < 0.34 ? 0 : value < 0.67 ? 1 : 2;
    setStage((current) => (current === next ? current : next));
  });

  const product = products[stage];
  const dark = stage === 2;
  const backgrounds = ["bg-sage", "bg-sand", "bg-forest"];

  const jumpTo = (index: number) => {
    setStage(index);
    if (!pinned || !ref.current) return;
    const start = ref.current.offsetTop;
    const distance = ref.current.offsetHeight - window.innerHeight;
    window.scrollTo({ top: start + distance * (index / 3 + 0.08), behavior: "smooth" });
  };

  return (
    <section
      id="story"
      ref={ref}
      className={pinned ? "relative h-[320vh]" : "relative"}
      aria-label="Product showcase"
    >
      <div
        className={`${backgrounds[stage]} ${pinned ? "sticky top-0 h-[100svh]" : "relative"} overflow-hidden text-ink transition-colors duration-700 ${
          dark ? "text-paper" : ""
        }`}
      >
        <div className="mx-auto grid h-full max-w-[1440px] items-center gap-8 px-5 py-28 md:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,1fr)_240px] lg:py-20">
          <div>
            <p className={`text-[12px] font-semibold tracking-[0.14em] uppercase ${dark ? "text-paper/70" : "text-ink/70"}`}>
              The collection · {stage + 1} of 3
            </p>
            <p className="mt-4 text-[72px] leading-none font-medium tracking-[-0.05em] sm:text-[104px]">{product.index}</p>
            <h2 className="mt-2 text-[32px] leading-none font-medium tracking-[-0.03em] sm:text-[40px]">{product.short}</h2>
            <p className={`mt-4 max-w-sm text-[18px] leading-relaxed ${dark ? "text-paper/75" : "text-ink/75"}`}>
              {product.summary}
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {product.chips.map((chip) => (
                <li
                  key={chip}
                  className={`rounded-full border px-3 py-1.5 text-[14px] ${
                    dark ? "border-paper/25 text-paper" : "border-ink/15 text-ink"
                  }`}
                >
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <PillButton tone={dark ? "cream" : "moss"} onClick={() => openProduct(product.id)}>
                View Details
              </PillButton>
            </div>
            <div className="mt-8 flex gap-2 lg:hidden" role="tablist" aria-label="Products">
              {products.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === stage}
                  className={`h-10 rounded-full px-4 text-[14px] ${
                    index === stage ? "bg-ink text-paper" : "bg-paper/70 text-ink"
                  }`}
                  onClick={() => setStage(index)}
                >
                  {item.index}
                </button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[min(100%,calc(100svh-12rem))]">
            <div className="relative aspect-square overflow-hidden rounded-[28px]">
              {products.map((item, index) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={index === stage ? `${item.short}, shown in full` : ""}
                  className={`absolute inset-0 size-full object-contain transition-opacity duration-700 ${
                    index === stage ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden flex-col items-end gap-3 lg:flex">
            {products.map((item, index) => {
              const active = index === stage;
              const upcoming = index > stage;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => jumpTo(index)}
                  className={`w-full text-left ${active ? "" : "opacity-80"}`}
                >
                  {upcoming ? (
                    <span
                      className={`flex h-24 items-end rounded-2xl border border-dashed px-3 pb-3 text-[14px] ${
                        dark ? "border-paper/40" : "border-ink/30"
                      }`}
                    >
                      {item.short}
                    </span>
                  ) : (
                    <span className="block">
                      <img
                        src={item.image}
                        alt=""
                        className={`ml-auto aspect-square rounded-2xl object-contain ${active ? "w-full" : "w-24"}`}
                      />
                      <span className="mt-1 block text-right text-[13px]">
                        <span className="block font-medium">{item.short}</span>
                        <span className={dark ? "text-paper/70" : "text-ink/60"}>{item.priceLabel}</span>
                      </span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-current/15">
          <motion.div
            className="h-px origin-left bg-current"
            style={{ scaleX: pinned ? scrollYProgress : (stage + 1) / 3 }}
          />
        </div>
      </div>
    </section>
  );
}
