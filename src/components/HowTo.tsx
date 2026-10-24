import { products, steps } from "../data/site";
import { Container, Eyebrow } from "./ui";

export function HowTo() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="overflow-hidden rounded-[28px] bg-tile">
            <img
              src={products[1].image}
              alt="Magnesium Therapy Oil, including the full benefits label"
              className="aspect-square w-full object-contain"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>How to use our products</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              Choose. Read. Follow.
            </h2>
            <ol className="mt-10">
              {steps.map((step) => (
                <li key={step.index} className="grid grid-cols-[72px_1fr] gap-x-4 border-b border-ink/10 py-6">
                  <p className="text-[28px] leading-none font-medium tracking-[-0.04em] text-moss">{step.index}</p>
                  <div>
                    <h3 className="text-[28px] leading-none font-medium tracking-[-0.03em]">{step.title}</h3>
                    <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
