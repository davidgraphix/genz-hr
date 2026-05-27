"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  fadeUpVariants,
  cardGridVariants,
  cardVariants,
} from "@/lib/motion";

const FEATURED = {
  tag: "Career Reality",
  title: "The Real Reason You Keep Leaving Jobs After 18 Months",
  excerpt:
    "Sometimes it is not laziness or lack of ambition. It is the gap between what the workplace promised and what it actually became.",
};

const CONVERSATIONS = [
  {
    tag: "Workplace Culture",
    title: "Hustle Culture Needs To Retire",
    excerpt:
      "Productivity should not mean burnout. We are talking about ambition without self-destruction.",
    tone: "green",
  },
  {
    tag: "HR Education",
    title: "What HR Actually Does",
    excerpt:
      "A clearer look at your rights, HR boundaries, and the workplace grey areas nobody explains properly.",
    tone: "black",
  },
  {
    tag: "Community",
    title: "Finding Your People at Work",
    excerpt:
      "Because work feels different when you have people who understand the pressure, politics, and growth journey.",
    tone: "green",
  },
  {
    tag: "Career Clarity",
    title: "How to Say No and Still Grow",
    excerpt:
      "Boundaries are not rebellion. They are part of building a healthier professional life.",
    tone: "black",
  },
];

const QUICK_TALKS = [
  "Burnout is real",
  "Salary transparency",
  "Work-life balance",
  "Toxic bosses",
  "Office politics",
  "Career confusion",
];

export default function ContentSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="community"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-36"
      style={{ background: "#d2ff28" }}
    >
      {/* Background oversized text */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
        aria-hidden="true"
      >
        <span
          className="whitespace-nowrap uppercase"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 20vw, 24rem)",
            lineHeight: 1,
            letterSpacing: "0.02em",
            color: "rgba(11,11,12,0.055)",
          }}
        >
          REAL TALK
        </span>
      </div>

      {/* Soft accents */}
      <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-white/30 blur-[90px]" />
      <div className="absolute bottom-[-200px] right-[-180px] h-[460px] w-[460px] rounded-full bg-[#00a86b]/25 blur-[100px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-[1250px]"
      >
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <motion.div
              variants={fadeUpVariants}
              className="mb-5 flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.22em]"
              style={{
                color: "#0b0b0c",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span className="inline-block h-[1px] w-8 bg-[#0b0b0c]" />
              Community & Culture
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3.4rem, 7vw, 7.5rem)",
                lineHeight: "0.86",
                letterSpacing: "0.01em",
                color: "#0b0b0c",
              }}
            >
              The
              <br />
              Conversation
              <br />
              <span style={{ color: "#00a86b" }}>Starts</span> Here.
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUpVariants}
            className="max-w-[520px] text-base font-medium leading-8 md:text-lg"
            style={{ color: "rgba(11,11,12,0.72)" }}
          >
            Real workplace talks for young professionals navigating culture,
            career pressure, burnout, growth, boundaries, and everything in
            between.
          </motion.p>
        </div>

        {/* Featured statement */}
        <motion.div
          variants={fadeUpVariants}
          className="mb-6 overflow-hidden rounded-[2.4rem] border border-black/10 bg-[#0b0b0c] p-7 md:p-10 lg:p-12"
        >
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <div
                className="mb-5 inline-flex rounded-full border border-[#d2ff28]/30 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.18em]"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "#d2ff28",
                }}
              >
                {FEATURED.tag}
              </div>

              <p
                className="max-w-[360px] text-sm leading-7"
                style={{ color: "rgba(248,248,242,0.62)" }}
              >
                Not every workplace issue needs corporate grammar. Some things
                just need honest conversation.
              </p>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 5.8rem)",
                  lineHeight: "0.9",
                  letterSpacing: "0.01em",
                  color: "#f8f8f2",
                }}
              >
                {FEATURED.title}
              </h3>

              <p
                className="mt-7 max-w-[720px] text-base leading-8 md:text-lg"
                style={{ color: "rgba(248,248,242,0.72)" }}
              >
                {FEATURED.excerpt}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Conversation cards */}
        <motion.div
          variants={cardGridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2"
        >
          {CONVERSATIONS.map((item, index) => {
            const isGreen = item.tone === "green";

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-black/10 p-7 md:p-8"
                style={{
                  background: isGreen ? "#00a86b" : "#0b0b0c",
                  color: isGreen ? "#0b0b0c" : "#f8f8f2",
                }}
              >
                {/* Decorative number */}
                <span
                  className="absolute right-6 top-4 text-[5rem] font-black leading-none opacity-10"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  0{index + 1}
                </span>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div
                      className="mb-5 text-[0.68rem] font-black uppercase tracking-[0.18em]"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: isGreen ? "rgba(11,11,12,0.7)" : "#d2ff28",
                      }}
                    >
                      {item.tag}
                    </div>

                    <h3
                      className="max-w-[520px]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.2rem, 4vw, 4.1rem)",
                        lineHeight: "0.92",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <p
                    className="mt-10 max-w-[520px] text-sm font-medium leading-7 md:text-base"
                    style={{
                      color: isGreen
                        ? "rgba(11,11,12,0.72)"
                        : "rgba(248,248,242,0.68)",
                    }}
                  >
                    {item.excerpt}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quick talk tags */}
        <motion.div
          variants={fadeUpVariants}
          className="mt-8 rounded-[2rem] border border-black/10 bg-white/35 p-6 backdrop-blur-md"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="mr-2 text-[0.68rem] font-black uppercase tracking-[0.18em]"
              style={{
                color: "#0b0b0c",
                fontFamily: "var(--font-mono)",
              }}
            >
              Also talking about:
            </span>

            {QUICK_TALKS.map((talk) => (
              <span
                key={talk}
                className="rounded-full border border-black/15 bg-[#0b0b0c] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.08em]"
                style={{ color: "#d2ff28" }}
              >
                {talk}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}