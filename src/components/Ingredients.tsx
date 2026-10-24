import { products } from "../data/site";
import { Container, Eyebrow } from "./ui";

const callouts = ["Aloe vera extract", "Virgin coconut oil", "Trace minerals"];

export function Ingredients() {
  return (
    <section id="ingredients" className="scroll-mt-24 bg-paper py-24 md:py-32">
      <Container>
        <div className="grid items-end gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Eyebrow>Ingredients</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              What the label names.
            </h2>
          </div>
          <p className="max-w-md text-[18px] leading-relaxed text-ink/70">
            Bio-Cleanser promotional materials list aloe vera extract, virgin coconut oil, and trace minerals.
            Amounts are not shown because they were not supplied.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[28px] bg-tile">
          <img
            src={products[2].image}
            alt="Bio-Cleanser Alkaline Drops poster, including aloe vera extract, virgin coconut oil, and trace minerals"
            className="mx-auto aspect-square w-full max-w-[980px] object-contain"
            loading="lazy"
          />
        </div>
        <ul className="mt-4 flex flex-wrap gap-2">
          {callouts.map((item) => (
            <li key={item} className="rounded-full bg-cream px-3 py-2 text-[14px]">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-ink/60">
          The poster also prints “Trade Minerals (From Salt Lake, Utah, USA).” Herbal Liniment is presented as a
          topical product for comfort and massage. Magnesium Therapy Oil marketing emphasizes magnesium. These notes
          come from promotional materials, not from an independent lab report. Read each bottle before use.
        </p>
      </Container>
    </section>
  );
}
