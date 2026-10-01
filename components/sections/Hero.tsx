"use client";

import { motion } from "framer-motion";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-6" dir="rtl">
      <BackgroundPattern opacity={0.1} />
      <OpeningPetals />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(60% 42% at 50% 50%, rgba(217,138,128,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-3 rounded-[26px] border border-gold/50 pointer-events-none" aria-hidden />
      <div className="absolute inset-[22px] rounded-[18px] border border-gold/25 pointer-events-none" aria-hidden />

      <CornerFlourish className="top-5 right-5" rotate={0} />
      <CornerFlourish className="top-5 left-5" rotate={90} />
      <CornerFlourish className="bottom-5 left-5" rotate={180} />
      <CornerFlourish className="bottom-5 right-5" rotate={270} />

      <Reveal>
        <div className="mb-4 flex items-center justify-center gap-2 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden>
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <div className="grid max-w-[390px] grid-cols-1 gap-1 text-[0.84rem] font-semibold leading-loose text-gold-dark">
          <p>{WEDDING.invitationLine}</p>
          <p>{WEDDING.invitationVerse}</p>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <p className="mt-8 font-arabic text-3xl leading-relaxed text-ink">
          {WEDDING.familiesLine}
        </p>
      </Reveal>

      <Reveal delay={0.28}>
        <div className="my-4 flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-gradient-to-l from-gold/70 to-transparent" />
          <motion.svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="#C9A227"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
          <span className="h-px w-14 bg-gradient-to-r from-gold/70 to-transparent" />
        </div>
      </Reveal>

      <Reveal delay={0.42}>
        <div className="grid w-full max-w-[390px] grid-cols-[1fr_34px_1fr] items-start gap-3">
          <PersonBlock title="السيد" name="أمجد إبراهيم عرار" note={`(${WEDDING.groomKunya})`} />
          <NameKnot />
          <PersonBlock title="السيد" name="مازن ديب سلامة" note={`(${WEDDING.brideFamily})`} />
        </div>
      </Reveal>

      <Reveal delay={0.62}>
        <p className="mt-7 max-w-[330px] font-arabic text-2xl leading-loose text-ink">
          {WEDDING.hostLine}
        </p>
        <div className="mx-auto mt-1 grid w-full max-w-[260px] grid-cols-2 text-sm font-semibold text-ink/75">
          <span>نجله</span>
          <span>كريمتهم</span>
        </div>
        <CoupleSignature />
        <div className="mt-4 flex items-end justify-center gap-1 opacity-70">
          <FloralBranch className="w-20" flip />
          <FloralBranch className="w-20" />
        </div>
      </Reveal>

      <ScrollHint />
    </section>
  );
}

function PersonBlock({ title, name, note }: { title: string; name: string; note?: string }) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <p className="mb-2 min-h-[32px] text-sm font-bold leading-snug text-gold-dark">{title}</p>
      <h1 className="text-[1.05rem] font-bold leading-[1.65] text-ink drop-shadow-sm">{name}</h1>
      {note ? <p className="mt-0.5 text-sm font-medium text-ink/70">{note}</p> : null}
    </div>
  );
}

function NameKnot() {
  return (
    <div className="flex h-24 items-center justify-center pt-8 text-gold-dark" aria-hidden>
      <span className="font-arabic text-2xl font-bold leading-none">و</span>
    </div>
  );
}

function CoupleSignature() {
  return (
    <div className="relative mx-auto mt-4 w-full max-w-[360px] px-2 py-2">
      <svg
        viewBox="0 0 360 84"
        className="absolute inset-x-0 top-1 h-[86px] w-full overflow-visible text-gold"
        fill="none"
        aria-hidden
      >
        <path
          d="M55 44 C104 24 136 24 169 41 C173 43 176 44 180 44 C184 44 187 43 191 41 C224 24 256 24 305 44"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M134 58 C153 72 170 70 180 50 C190 70 207 72 226 58"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M180 37 C185 31 194 35 194 43 C194 52 184 58 180 63 C176 58 166 52 166 43 C166 35 175 31 180 37 Z"
          fill="currentColor"
          opacity="0.72"
        />
      </svg>

      <div className="relative grid grid-cols-[1fr_44px_1fr] items-center">
        <p className="font-arabic text-[3.55rem] font-bold leading-none text-ink drop-shadow-sm">
          {WEDDING.groomName}
        </p>
        <div className="flex items-center justify-center" aria-hidden>
          <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold/75 to-transparent" />
        </div>
        <p className="font-arabic text-[3.55rem] font-bold leading-none text-ink drop-shadow-sm">
          {WEDDING.brideName}
        </p>
      </div>
    </div>
  );
}

const OPENING_PETALS = [
  { left: "4%", size: 9, delay: 0.1, duration: 10.5, sway: 36, color: "#EFC3BA", start: "-14vh" },
  { left: "11%", size: 14, delay: 1.8, duration: 12.2, sway: -26, color: "#D98A80", start: "-22vh" },
  { left: "19%", size: 8, delay: 4.2, duration: 11.4, sway: 22, color: "#F4D3CB", start: "-10vh" },
  { left: "27%", size: 13, delay: 0.7, duration: 13.1, sway: -34, color: "#E5A99E", start: "-18vh" },
  { left: "35%", size: 10, delay: 3.1, duration: 9.8, sway: 30, color: "#C9A227", start: "-12vh" },
  { left: "43%", size: 15, delay: 1.2, duration: 12.8, sway: -24, color: "#F4D3CB", start: "-24vh" },
  { left: "51%", size: 9, delay: 5.2, duration: 10.9, sway: 32, color: "#E5A99E", start: "-16vh" },
  { left: "59%", size: 12, delay: 2.4, duration: 13.5, sway: -38, color: "#D98A80", start: "-20vh" },
  { left: "67%", size: 8, delay: 0.4, duration: 11.8, sway: 26, color: "#EFC3BA", start: "-13vh" },
  { left: "75%", size: 14, delay: 3.8, duration: 12.6, sway: -30, color: "#F4D3CB", start: "-25vh" },
  { left: "84%", size: 10, delay: 1.5, duration: 10.7, sway: 34, color: "#E5A99E", start: "-15vh" },
  { left: "93%", size: 13, delay: 5.9, duration: 13.8, sway: -28, color: "#D98A80", start: "-21vh" },
] as const;

function OpeningPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {OPENING_PETALS.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute -top-8"
          style={{ left: petal.left }}
          initial={{ y: petal.start, x: 0, rotate: index * 18, opacity: 0 }}
          animate={{
            y: [petal.start, "112vh"],
            x: [0, petal.sway * 0.35, petal.sway, -petal.sway * 0.35, petal.sway * 0.15],
            rotate: [index * 18, 90 + index * 10, 190 + index * 8, 300 + index * 12],
            opacity: [0, 0.72, 0.62, 0.34, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: 0.3,
          }}
        >
          <svg className="drop-shadow-sm" width={petal.size} height={petal.size * 1.45} viewBox="0 0 14 20">
            <path d="M7 0 C12 4 13 12 7 20 C1 12 2 4 7 0 Z" fill={petal.color} opacity="0.78" />
            <path d="M7 3 C7 8 7 13 7 18" stroke="#fff" strokeWidth="0.7" opacity="0.45" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

function CornerFlourish({ className, rotate }: { className: string; rotate: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`absolute h-14 w-14 pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      aria-hidden
    >
      <g stroke="#C9A227" strokeWidth="1.3" strokeLinecap="round" opacity="0.8">
        <path d="M60 4 Q34 6 20 20 Q6 34 4 60" />
        <path d="M44 10 q-6 -6 -14 -4 q4 8 14 4z" fill="#C9A227" fillOpacity="0.3" />
        <path d="M10 44 q-6 -6 -4 -14 q8 4 4 14z" fill="#C9A227" fillOpacity="0.3" />
        <circle cx="24" cy="24" r="3" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" strokeWidth="0.7" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}
