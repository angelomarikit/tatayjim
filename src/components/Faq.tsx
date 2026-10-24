import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { faqs } from "../data/site";
import { Container, Eyebrow } from "./ui";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              Good questions.
            </h2>
          </div>
          <a href="#contact" className="text-[16px] font-medium underline-offset-4 hover:underline">
            Ask through the form
          </a>
        </div>
        <div className="mt-10 border-t border-ink/10">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.q} className="border-b border-ink/10">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="text-[20px] font-medium tracking-[-0.02em] md:text-[24px]">{item.q}</span>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/15" aria-hidden="true">
                      <span className={`text-[20px] leading-none transition-transform ${expanded ? "rotate-45" : ""}`}>+</span>
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {expanded ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 text-[16px] leading-relaxed text-ink/75">{item.a}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
