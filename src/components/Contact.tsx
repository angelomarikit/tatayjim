import { useState, type FormEvent, type ReactNode } from "react";
import { brand, inquiryTypes, type InquiryType } from "../data/site";
import { useSite } from "../context/SiteContext";
import { Container, Eyebrow, PillButton } from "./ui";

type Errors = Partial<Record<"name" | "mobile" | "email" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { inquiryType, productNote, setInquiryType } = useSite();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Enter your full name.";
    const digits = mobile.replace(/\D/g, "");
    if (digits.length < 10 || digits.length > 15) next.mobile = "Enter a mobile number with 10 to 15 digits.";
    if (!emailPattern.test(email.trim())) next.email = "Enter a valid email address.";
    if (message.trim().length < 10) next.message = "Enter a message of at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("");
      return;
    }
    const subject = encodeURIComponent(`${inquiryType} from ${name.trim()}`);
    const body = encodeURIComponent(
      [
        `Name: ${name.trim()}`,
        `Mobile: ${mobile.trim()}`,
        `Email: ${email.trim()}`,
        `Inquiry: ${inquiryType}`,
        productNote ? `Product: ${productNote}` : "",
        "",
        message.trim(),
      ]
        .filter((line) => line !== "")
        .join("\n"),
    );
    window.location.href = `mailto:${brand.email}?subject=${subject}&body=${body}`;
    setStatus(`Your email app should open with this inquiry addressed to ${brand.email}. This page does not store the message.`);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              Let's Connect Naturally.
            </h2>
            <dl className="mt-8 space-y-5 text-[16px]">
              <div>
                <dt className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/55">Contact person</dt>
                <dd className="mt-1 text-[20px] font-medium">{brand.contactPerson}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/55">Mobile</dt>
                <dd className="mt-1 text-[20px] font-medium">
                  <a href={`tel:+63${brand.phone.slice(1)}`} className="underline-offset-4 hover:underline">
                    {brand.phoneLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/55">Email</dt>
                <dd className="mt-1 text-[20px] font-medium break-all">
                  <a href={`mailto:${brand.email}`} className="underline-offset-4 hover:underline">
                    {brand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-semibold tracking-[0.12em] uppercase text-ink/55">Address supplied</dt>
                <dd className="mt-1 leading-relaxed">
                  {brand.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-ink/65">
              Business hours and a map location have not been provided. The address is incomplete and is shown as
              supplied.
            </p>
          </div>

          <form onSubmit={onSubmit} noValidate className="rounded-[28px] bg-paper p-6 md:p-8">
            <p className="text-[14px] leading-relaxed text-ink/70">
              A valid inquiry opens your email app, addressed to {brand.email}. This page does not store the message.
            </p>
            <div className="mt-6 grid gap-5">
              <Field label="Full name" error={errors.name}>
                <input
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Mobile number" error={errors.mobile}>
                <input
                  name="mobile"
                  inputMode="tel"
                  autoComplete="tel"
                  value={mobile}
                  onChange={(event) => setMobile(event.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Email address" error={errors.email}>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={inputClass}
                />
              </Field>
              <Field label="Inquiry type">
                <select
                  name="inquiry"
                  value={inquiryType}
                  onChange={(event) => setInquiryType(event.target.value as InquiryType)}
                  className={inputClass}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message" error={errors.message}>
                <textarea
                  name="message"
                  rows={5}
                  value={message}
                  placeholder={productNote ? `I would like to ask about ${productNote}.` : ""}
                  onChange={(event) => setMessage(event.target.value)}
                  className={`${inputClass} resize-y`}
                />
              </Field>
            </div>
            {productNote ? <p className="mt-3 text-[14px] text-ink/60">About: {productNote}</p> : null}
            <div className="mt-6">
              <PillButton type="submit">Submit inquiry</PillButton>
            </div>
            <p className="mt-4 min-h-6 text-[14px] leading-relaxed text-ink" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

const inputClass =
  "w-full border-b border-ink/20 bg-transparent py-3 text-[16px] outline-none focus:border-moss";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[12px] font-semibold tracking-[0.12em] text-ink/55 uppercase">{label}</span>
      {children}
      {error ? <span className="mt-1 block text-[13px] text-[#8a3b2a]">{error}</span> : null}
    </label>
  );
}
