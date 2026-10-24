import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { useSite } from "../context/SiteContext";
import { Container, Eyebrow, PillButton } from "./ui";

function applySound(video: HTMLVideoElement, silent: boolean, level: number) {
  const next = Math.min(1, Math.max(0, level));
  video.volume = next;
  video.muted = silent || next === 0;
  video.defaultMuted = video.muted;
  if (!video.muted && video.paused) {
    const play = video.play();
    if (play) play.catch(() => undefined);
  }
}

export function Products() {
  const reduce = useReducedMotion();
  const { setInquiry } = useSite();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [silent, setSilent] = useState(true);
  const [level, setLevel] = useState(0.8);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0.8;
    if (reduce) {
      video.pause();
      return;
    }
    const play = video.play();
    if (play) play.catch(() => undefined);
  }, [reduce]);

  const changeSound = (nextSilent: boolean, nextLevel: number) => {
    const video = videoRef.current;
    const safeLevel = Math.min(1, Math.max(0, nextLevel));
    setLevel(safeLevel);
    setSilent(nextSilent || safeLevel === 0);
    if (video) applySound(video, nextSilent || safeLevel === 0, safeLevel);
  };

  return (
    <section id="products" className="scroll-mt-24 bg-cream py-24 md:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Eyebrow>The collection</Eyebrow>
            <h2 className="mt-4 max-w-[720px] text-[42px] leading-none font-medium tracking-[-0.04em] md:text-[64px]">
              A closer look.
            </h2>
          </div>
          <PillButton href="#contact" tone="outline" onClick={() => setInquiry("Product Inquiry")}>
            Inquire About Product
          </PillButton>
        </div>

        <figure className="relative mt-12">
          <div className="overflow-hidden rounded-[28px] bg-forest shadow-[0_24px_70px_rgba(34,49,28,0.14)]">
            <video
              ref={videoRef}
              className="aspect-video w-full bg-forest object-contain"
              autoPlay={!reduce}
              muted
              loop
              playsInline
              preload="metadata"
              controls={false}
              disablePictureInPicture
              poster="/assets/tatay-jim/collection-poster.jpg"
              aria-label="Tatay Jim's Herbal Natural film"
            >
              <source src="/assets/tatay-jim/collection-film.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <div className="flex items-center gap-3 rounded-full bg-ink/90 py-2 pr-4 pl-2 text-paper shadow-[0_10px_30px_rgba(34,49,28,0.18)] backdrop-blur-sm">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full bg-paper text-ink"
                aria-pressed={!silent}
                aria-label={silent ? "Turn sound on" : "Mute"}
                onClick={() => changeSound(!silent, silent ? level || 0.8 : level)}
              >
                {silent ? <SpeakerOffIcon /> : <SpeakerOnIcon />}
              </button>
              <label className="sr-only" htmlFor="collection-volume">
                Volume
              </label>
              <input
                id="collection-volume"
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={silent ? 0 : level}
                aria-valuetext={silent ? "Muted" : `${Math.round(level * 100)} percent`}
                className="h-1 w-24 cursor-pointer accent-gold sm:w-28"
                onChange={(event) => {
                  const next = Number(event.target.value);
                  changeSound(next === 0, next === 0 ? level : next);
                }}
              />
            </div>
          </div>
        </figure>
      </Container>
    </section>
  );
}

function SpeakerOnIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10v4h3l4 3V7L7 10H4z" strokeLinejoin="round" />
      <path d="M16 9.5a3.5 3.5 0 0 1 0 5" strokeLinecap="round" />
      <path d="M18.2 7.2a6.5 6.5 0 0 1 0 9.6" strokeLinecap="round" />
    </svg>
  );
}

function SpeakerOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10v4h3l4 3V7L7 10H4z" strokeLinejoin="round" />
      <path d="M16 10l4 4M20 10l-4 4" strokeLinecap="round" />
    </svg>
  );
}
