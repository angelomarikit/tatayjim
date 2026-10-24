import { earningsDisclosure, packages } from "../data/site";
import { useSite } from "../context/SiteContext";
import { Container, Eyebrow, PillButton } from "./ui";

export function Membership() {
  const { setInquiry } = useSite();

  return (
    <section id="membership" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="overflow-hidden rounded-[28px] bg-tile">
            <img
              src="/assets/tatay-jim/831570263_1098951625880563_1383281222192263783_n.jpg"
              alt="Tatay Jim's membership poster, with both packages, ways to earn, and the printed earnings note"
              className="block h-auto w-full"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Membership</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              Two ways to begin.
            </h2>
            <p className="mt-4 max-w-lg text-[18px] leading-relaxed text-ink/70">
              Package prices are here so you can ask about them. This page does not take payment or orders.
            </p>
            <div className="mt-8 grid gap-4">
              {packages.map((item) => (
                <article
                  key={item.id}
                  className={`rounded-[24px] border p-6 ${
                    item.id === "reseller" ? "border-gold/50 bg-paper" : "border-ink/10 bg-paper/60"
                  }`}
                >
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h3 className="text-[26px] leading-none font-medium tracking-[-0.03em]">{item.name}</h3>
                      <p className="mt-2 text-[15px] text-ink/70">{item.bottles}</p>
                    </div>
                    <p className="text-[32px] leading-none font-medium tracking-[-0.03em]">{item.price}</p>
                  </div>
                  <p className="mt-3 text-[15px] text-ink/75">{item.detail}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.includes.map((include) => (
                      <li key={include} className="rounded-full bg-sage px-3 py-1 text-[13px]">
                        {include}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <PillButton tone={item.id === "reseller" ? "moss" : "outline"} onClick={() => setInquiry(item.inquiry)}>
                      {item.cta}
                    </PillButton>
                  </div>
                </article>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-[14px] leading-relaxed text-ink/65">{earningsDisclosure}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
