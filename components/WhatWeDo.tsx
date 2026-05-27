"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, fadeUpVariants, cardGridVariants, cardVariants } from "@/lib/motion";

const CARDS = [
  {
    num: "01 / 06",
    icon: "💬",
    title: "CAREER CONVERSATIONS",
    desc: "Raw, honest discussions about job hunting, salary negotiation, burnout, and the chaos of figuring out what you actually want from your career.",
  },
  {
    num: "02 / 06",
    icon: "🏛️",
    title: "WORKPLACE CULTURE",
    desc: "Deconstructing toxic norms, celebrating what works, and imagining workplaces worth showing up for — remote, hybrid, or in-person.",
  },
  // {
  //   num: "03 / 06",
  //   icon: "📚",
  //   title: "HR EDUCATION",
  //   desc: "Demystifying how HR actually works — from hiring decisions to workplace rights — in language real humans understand.",
  // },
  // {
  //   num: "04 / 06",
  //   icon: "🚀",
  //   title: "PROFESSIONAL GROWTH",
  //   desc: "Tools, frameworks, and real stories for leveling up your career without losing yourself or your values in the process.",
  // },
  {
    num: "03 / 06",
    icon: "🤝",
    title: "COMMUNITY BUILDING",
    desc: "Creating spaces where Gen Z professionals connect, collaborate, and co-create the future of work together — with intention.",
  },
  // {
  //   num: "06 / 06",
  //   icon: "🧭",
  //   title: "CAREER CLARITY",
  //   desc: "Helping young professionals cut through the noise and make decisions deeply aligned with who they actually are — not who they're told to be.",
  // },
];

export default function WhatWeDo() {
  const ref = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <section
      id="conversations"
      ref={ref}
      className="py-24 lg:py-36 px-6 md:px-10 lg:px-16"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Header ── */}
      <motion.div
        ref={headerRef}
        variants={containerVariants}
        initial="hidden"
        animate={headerInView ? "visible" : "hidden"}
        className="max-w-[1300px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14"
      >
        <motion.h2
          variants={fadeUpVariants}
          className="font-display leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 6vw, 7rem)",
            lineHeight: "0.88",
            letterSpacing: "0.02em",
          }}
        >
          WHAT
          <br />
          WE
          <br />
          <span style={{ color: "var(--lime)" }}>DO.</span>
        </motion.h2>

        <motion.div variants={fadeUpVariants} className="max-w-[360px]">
          <div className="eyebrow mb-4">Our Six Pillars</div>
          <p className="text-[0.95rem] leading-[1.75]" style={{ color: "var(--muted)" }}>
            Six pillars driving the culture and career conversations that
            actually matter to the next generation of professionals.
          </p>
        </motion.div>
      </motion.div>

      {/* ── Cards Grid ── */}
      <motion.div
        variants={cardGridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-[1300px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-[1px]"
        style={{ background: "var(--border)" }}
      >
        {CARDS.map((card) => (
          <motion.div
            key={card.num}
            variants={cardVariants}
            className="card-hover relative p-8 lg:p-10 overflow-hidden"
            style={{ background: "var(--bg)" }}
          >
            {/* Number */}
            <div
              className="text-[0.68rem] tracking-[0.14em] mb-7"
              style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
            >
              {card.num}
            </div>

            {/* Icon */}
            <div className="text-[1.8rem] mb-4 leading-none">{card.icon}</div>

            {/* Title */}
            <h3
              className="font-display mb-3 leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.85rem",
                letterSpacing: "0.04em",
                color: "var(--white)",
              }}
            >
              {card.title}
            </h3>

            {/* Description */}
            <p
              className="text-[0.87rem] leading-[1.75]"
              style={{ color: "var(--muted)" }}
            >
              {card.desc}
            </p>

            {/* Hover ghost num */}
            <div
              className="absolute -bottom-4 -right-2 font-display pointer-events-none select-none opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "5rem",
                color: "transparent",
                WebkitTextStroke: "1px rgba(200,244,0,0.08)",
                lineHeight: 1,
              }}
            >
              {card.num.split(" ")[0]}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
