import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { brand, nav } from "../data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4">
      <nav
        className="relative z-50 mx-auto flex h-[78px] max-w-[1880px] items-center justify-between rounded-full bg-paper/80 px-3 backdrop-blur-md md:px-5"
        aria-label="Primary"
      >
        <a href="#home" className="flex items-center gap-2.5 pl-1" onClick={() => setOpen(false)}>
          <img
            src={brand.logo}
            alt=""
            className="size-16 object-contain"
            width="64"
            height="64"
          />
          <span className="text-[13px] font-semibold tracking-[0.16em] text-ink sm:text-[15px] sm:tracking-[0.18em]">
            TATAY JIM'S
          </span>
          <span className="sr-only">{brand.name}</span>
        </a>

        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 lg:flex xl:gap-7">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-[15px] font-medium text-ink/90 transition-colors hover:text-moss">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#membership"
            className="hidden h-10 items-center rounded-full bg-ink px-4 text-[14px] font-medium text-paper sm:inline-flex"
          >
            Become a Reseller
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full bg-ink text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-paper transition-transform ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span className={`absolute top-1.5 left-0 h-px w-4 bg-paper ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute left-0 h-px w-4 bg-paper transition-transform ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-cream px-6 pt-28 lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 * index, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="block py-2 text-[40px] leading-none font-medium tracking-[-0.04em]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              href="#membership"
              className="mt-8 inline-flex h-14 items-center rounded-full bg-moss px-6 text-paper"
              onClick={() => setOpen(false)}
            >
              Become a Reseller
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
