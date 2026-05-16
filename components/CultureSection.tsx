"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  fadeUpVariants,
  pillContainerVariants,
  pillVariants,
} from "@/lib/motion";

const PILLS = [
  "Burnout Is Real",
  "Quiet Quitting Had A Point",
  "Salary Transparency Now",
  "Mental Health ≠ Weakness",
  "Culture Eats Policy",
  "Work-Life Integration",
  "Gen Z Won't Settle",
  "Boundaries Are Professional",
];

const STATS = [
  {
    value: "4 in 5",
    label: "Gen Z professionals report anxiety about their career trajectory",
  },
  {
    value: "67%",
    label: "Left a job due to toxic culture within the first year",
  },
  {
    value: "Now.",
    label: "The moment we change the conversation for good",
  },
];

export default function CultureSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="culture"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-40 px-6 md:px-10 lg:px-16"
      style={{ background: "var(--purple)" }}
    >
      {/* ── Giant ghost background text ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 22vw, 28rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          CULTURE
        </span>
      </div>

      {/* ── Glow blob ── */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,244,0,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            className="eyebrow mb-8"
            style={{ color: "var(--lime)" }}
          >
            <span
              className="w-5 h-[1px] inline-block"
              style={{ background: "var(--lime)" }}
            />
            Modern Work Realities
          </motion.div>

          {/* Giant quote */}
          <motion.blockquote
            variants={fadeUpVariants}
            className="font-display mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.8rem, 6vw, 6.5rem)",
              lineHeight: "0.93",
              letterSpacing: "0.02em",
              color: "var(--white)",
            }}
          >
            &ldquo;You&apos;re not{" "}
            <span style={{ color: "var(--lime)" }}>lazy.</span>
            <br />
            You&apos;re not{" "}
            <span style={{ color: "var(--lime)" }}>difficult.</span>
            <br />
            You&apos;re just finally
            <br />
            asking for{" "}
            <span style={{ color: "var(--lime)" }}>more.&rdquo;</span>
          </motion.blockquote>

          {/* Attribution */}
          <motion.p
            variants={fadeUpVariants}
            className="text-[0.8rem] tracking-[0.12em] uppercase mb-10"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            — The Gen Z HR Manifesto
          </motion.p>

          {/* Pills */}
          <motion.div
            variants={pillContainerVariants}
            className="flex flex-wrap gap-3 mb-16"
          >
            {PILLS.map((pill) => (
              <motion.span
                key={pill}
                variants={pillVariants}
                whileHover={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.5)",
                }}
                className="text-[0.78rem] font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full cursor-default transition-colors"
                style={{
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {pill}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUpVariants}
            className="grid sm:grid-cols-3 gap-[1px]"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.value}
                className="p-6 lg:p-8 text-center"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <span
                  className="block font-display leading-none mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 4vw, 4rem)",
                    color: "var(--lime)",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  className="block text-[0.78rem] tracking-[0.06em] leading-snug"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
