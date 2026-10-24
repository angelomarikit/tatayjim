import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { products } from "../data/site";
import { Eyebrow, PillButton } from "./ui";

const featured = products[0];

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

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [silent, setSilent] = useState(true);
  const [level, setLevel] = useState(0.8);
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

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
    <section id="home" className="bg-cream lg:grid lg:min-h-[100svh] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
      <div className="flex items-center px-5 pt-32 pb-12 md:px-10 lg:py-0 lg:pr-8 lg:pl-[max(2rem,calc((100vw-1440px)/2+4rem))]">
        <div className="max-w-[560px]">
          <motion.div {...rise(0.05)}>
            <Eyebrow>Naturally inspired wellness</Eyebrow>
          </motion.div>
          <motion.h1
            className="mt-4 text-[44px] leading-[0.98] font-medium tracking-[-0.035em] text-ink sm:text-[56px] xl:text-[66px]"
            {...rise(0.12)}
          >
            Rooted in Nature.
            <br />
            Made for Everyday Living.
          </motion.h1>
          <motion.p className="mt-5 max-w-[460px] text-[18px] leading-[1.5] text-ink/78" {...rise(0.2)}>
            Explore Tatay Jim's Herbal Natural — a collection of herbal and personal-care products from
            Greenwealth Naturals.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap items-center gap-3" {...rise(0.28)}>
            <PillButton href="#story">Explore Our Products</PillButton>
            <a href="#membership" className="px-3 text-[16px] font-medium text-ink underline-offset-4 hover:underline">
              Become a Reseller
            </a>
          </motion.div>
          <motion.aside
            className="mt-8 flex max-w-[320px] items-center gap-3 rounded-[22px] bg-paper p-3 shadow-[0_10px_40px_rgba(34,49,28,0.08)]"
            {...rise(0.4)}
          >
            <img src={featured.image} alt="" className="size-16 rounded-xl object-contain" />
            <div className="min-w-0">
              <p className="text-[11px] font-semibold tracking-[0.12em] text-moss uppercase">Herbal liniment</p>
              <p className="truncate text-[16px] font-medium">₱150</p>
              <p className="text-[13px] text-ink/70">Topical herbal product</p>
            </div>
          </motion.aside>
        </div>
      </div>

      <div className="flex items-center justify-center bg-cream lg:min-h-[100svh] lg:px-8 lg:pt-[96px] lg:pb-8">
        <div className="relative w-full lg:w-auto">
          <video
            ref={videoRef}
            className="pointer-events-none aspect-[9/16] h-auto w-full bg-cream object-contain lg:h-[min(880px,calc(100svh-7.5rem))] lg:w-auto lg:max-w-full"
            autoPlay={!reduce}
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            poster="/assets/tatay-jim/hero-poster.jpg"
            aria-label="Greenwealth Naturals film. Build. Share. Grow."
          >
            <source src="/assets/tatay-jim/hero-banner.mp4" type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0">
            <div className="pointer-events-auto sticky top-[92px] z-10 flex justify-center px-4 pt-3">
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
                <label className="sr-only" htmlFor="hero-volume">
                  Volume
                </label>
                <input
                  id="hero-volume"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={silent ? 0 : level}
                  aria-valuetext={silent ? "Muted" : `${Math.round(level * 100)} percent`}
                  className="h-1 w-28 cursor-pointer accent-gold"
                  onChange={(event) => {
                    const next = Number(event.target.value);
                    changeSound(next === 0, next === 0 ? level : next);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
