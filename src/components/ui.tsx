import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1320px] px-5 md:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.13em] ${
        light ? "text-paper/80" : "text-ink"
      }`}
    >
      <span className={`size-2 rounded-full ${light ? "bg-gold" : "bg-moss"}`} />
      {children}
    </p>
  );
}

export function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  tone?: "moss" | "cream" | "outline" | "outline-light";
  type?: "button" | "submit";
};

const tones = {
  moss: "bg-moss text-paper",
  cream: "bg-paper text-ink",
  outline: "border border-ink/20 text-ink",
  "outline-light": "border border-paper/30 text-paper",
};

const circles = {
  moss: "bg-paper text-ink",
  cream: "bg-forest text-paper",
  outline: "bg-ink text-paper",
  "outline-light": "bg-paper text-forest",
};

export function PillButton({
  children,
  href,
  onClick,
  tone = "moss",
  type = "button",
}: ButtonProps) {
  const className = `inline-flex h-14 items-center gap-4 rounded-full pl-6 pr-2 text-[16px] font-medium transition-transform duration-300 hover:-translate-y-0.5 ${tones[tone]}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className={`grid size-10 place-items-center rounded-full ${circles[tone]}`}>
        <ArrowIcon />
      </span>
    </>
  );
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={className} onClick={onClick}>
      {inner}
    </button>
  );
}
