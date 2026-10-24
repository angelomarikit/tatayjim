import { earningsDisclosure, programPoints } from "../data/site";
import { useSite } from "../context/SiteContext";
import { Container, Eyebrow, PillButton } from "./ui";

export function Opportunity() {
  const { setInquiry } = useSite();

  return (
    <section className="bg-paper py-24 md:py-28">
      <Container>
        <div className="max-w-[760px]">
          <Eyebrow>Business opportunity</Eyebrow>
          <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
            Grow With Greenwealth Naturals.
          </h2>
          <p className="mt-5 text-[18px] leading-relaxed text-ink/72">
            Learn about membership, reseller opportunities, product distribution, and the available business program.
            Product sales come first. The notes below are the program details that were supplied.
          </p>
        </div>
        <ol className="mt-10 max-w-[760px] border-t border-ink/10">
          {programPoints.map((point, index) => (
            <li key={point} className="flex gap-6 border-b border-ink/10 py-5 text-[18px]">
              <span className="w-8 text-moss">0{index + 1}</span>
              <span>{point}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 max-w-[760px] text-[14px] leading-relaxed text-ink/65">
          These are business-provided program details and still need validation. No extra commission levels, referral
          incentives, or income projections are added here. {earningsDisclosure}
        </p>
        <div className="mt-8">
          <PillButton tone="outline" onClick={() => setInquiry("Reseller Inquiry")}>
            Ask About Membership
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
