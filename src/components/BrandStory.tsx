import { brand } from "../data/site";
import { Container, Eyebrow, PillButton } from "./ui";

export function BrandStory() {
  return (
    <section id="about" className="scroll-mt-24 bg-forest py-24 text-paper md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow light>About us</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] text-paper md:text-[64px]">
              Nature, Tradition, and Everyday Care.
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-paper/78">
              {brand.name} is a collection of herbal and personal-care products from {brand.company}. The work on
              this page stays with what the brand materials actually show.
            </p>
            <p className="mt-4 max-w-xl text-[18px] leading-relaxed text-paper/78">
              A founder biography, founding year, and manufacturing history have not been provided. Those details can
              be added when the business supplies them.
            </p>
            <p className="mt-6 text-[22px] font-medium tracking-[-0.02em] text-paper">“Tatay Jimmy at your service!”</p>
            <p className="mt-2 text-[14px] text-paper/60">Line printed on the brand’s membership poster.</p>
            <p className="mt-6 text-[16px] text-gold">{brand.tagline}</p>
            <div className="mt-8">
              <PillButton href="#products" tone="cream">
                Explore Our Products
              </PillButton>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[560px]">
            <img
              src={brand.logo}
              alt="Tatay Jim's Herbal Natural logo, with Tatay Jim in a hat among green fields"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
