import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { products } from "../data/site";
import { useSite } from "../context/SiteContext";
import { PillButton } from "./ui";

export function ProductDialog() {
  const { activeProductId, closeProduct, setInquiry } = useSite();
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const product = products.find((item) => item.id === activeProductId) ?? null;

  useEffect(() => {
    if (!product) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProduct();
    };
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [closeProduct, product]);

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center bg-ink/45 p-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          onClick={closeProduct}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-dialog-title"
            className="grid max-h-[min(860px,100%)] w-full max-w-[920px] overflow-auto rounded-[28px] bg-paper md:grid-cols-[0.85fr_1.15fr]"
            initial={reduce ? false : { y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={reduce ? undefined : { y: 12, opacity: 0 }}
            onClick={(event) => event.stopPropagation()}
          >
            <img src={product.image} alt={`${product.name}, shown in full`} className="aspect-square w-full bg-tile object-contain" />
            <div className="p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="text-[12px] font-semibold tracking-[0.14em] text-moss uppercase">{product.priceLabel}</p>
                <button ref={closeRef} type="button" className="text-[14px] font-medium" onClick={closeProduct}>
                  Close
                </button>
              </div>
              <h2 id="product-dialog-title" className="mt-3 text-[32px] leading-none font-medium tracking-[-0.03em]">
                {product.name}
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-ink/75">{product.summary}</p>
              <ul className="mt-5 space-y-2 text-[15px]">
                {product.facts.map((fact) => (
                  <li key={fact} className="border-t border-ink/10 pt-2">
                    {fact}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[14px] leading-relaxed text-ink/65">{product.note}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink/65">
                Use only as directed on the product label. This page is not medical advice.
              </p>
              <div className="mt-6">
                <PillButton onClick={() => setInquiry("Product Inquiry", product.name)}>Inquire About Product</PillButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
