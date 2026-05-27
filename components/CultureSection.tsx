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

const CULTURE_BREAKDOWN = [
  {
    label: "Toxic Culture",
    value: 35,
    color: "#d2ff28",
  },
  {
    label: "Burnout",
    value: 25,
    color: "#ffffff",
  },
  {
    label: "Career Anxiety",
    value: 22,
    color: "#b388ff",
  },
  {
    label: "Poor Leadership",
    value: 18,
    color: "#ff7ad9",
  },
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
];

function DonutChart() {
  const radius = 72;
  const strokeWidth = 24;
  const circumference = 2 * Math.PI * radius;

  let accumulated = 0;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        viewBox="0 0 220 220"
        className="h-[220px] w-[220px] rotate-[-90deg] md:h-[250px] md:w-[250px]"
      >
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="transparent"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth={strokeWidth}
        />

        {CULTURE_BREAKDOWN.map((item) => {
          const dash = (item.value / 100) * circumference;
          const gap = circumference - dash;
          const offset = -(accumulated / 100) * circumference;

          accumulated += item.value;

          return (
            <motion.circle
              key={item.label}
              cx="110"
              cy="110"
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${dash} ${gap}`}
              strokeDashoffset={offset}
              strokeLinecap="round"
              initial={{ strokeDasharray: `0 ${circumference}` }}
              whileInView={{ strokeDasharray: `${dash} ${gap}` }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>

      <div className="absolute text-center">
        <span
          className="block text-[3rem] leading-none"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--lime)",
          }}
        >
          67%
        </span>
        <span
          className="mt-2 block text-[0.65rem] uppercase tracking-[0.18em]"
          style={{
            fontFamily: "var(--font-mono)",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Culture Exit
        </span>
      </div>
    </div>
  );
}

export default function CultureSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="culture"
      ref={ref}
      className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-16 lg:py-36"
      style={{ background: "var(--purple)" }}
    >
      {/* Background word */}
      <div
        className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 22vw, 26rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          CULTURE
        </span>
      </div>

      {/* Glow accents */}
      <div
        className="absolute right-[-120px] top-[-120px] h-[520px] w-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(210,255,40,0.14) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute left-[-220px] bottom-[-220px] h-[460px] w-[460px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-[1180px]"
      >
        {/* Top intro */}
        <motion.div variants={fadeUpVariants} className="mb-12 max-w-[920px]">
          <div
            className="mb-7 flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.2em]"
            style={{
              color: "var(--lime)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              className="inline-block h-[1px] w-8"
              style={{ background: "var(--lime)" }}
            />
            Modern Work Realities
          </div>

          <blockquote
            className="font-display max-w-[980px]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.6rem, 6vw, 6.7rem)",
              lineHeight: "0.92",
              letterSpacing: "0.01em",
              color: "var(--white)",
            }}
          >
            &ldquo;You&apos;re not{" "}
            <span style={{ color: "var(--lime)" }}>lazy.</span>
            <br />
            You&apos;re not{" "}
            <span style={{ color: "var(--lime)" }}>difficult.</span>
            <br />
            You&apos;re just asking
            <br />
            for <span style={{ color: "var(--lime)" }}>more.&rdquo;</span>
          </blockquote>

          <p
            className="mt-8 text-[0.75rem] uppercase tracking-[0.16em]"
            style={{
              fontFamily: "var(--font-mono)",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            — The Gen Z HR Manifesto
          </p>
        </motion.div>

        {/* Pills */}
        <motion.div
          variants={pillContainerVariants}
          className="mb-16 flex max-w-[920px] flex-wrap gap-3"
        >
          {PILLS.map((pill) => (
            <motion.span
              key={pill}
              variants={pillVariants}
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.12)",
                borderColor: "rgba(255,255,255,0.5)",
              }}
              className="cursor-default rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] transition-colors"
              style={{
                border: "1px solid rgba(255,255,255,0.22)",
                color: "rgba(255,255,255,0.78)",
              }}
            >
              {pill}
            </motion.span>
          ))}
        </motion.div>

        {/* Dashboard block */}
        <motion.div
          variants={fadeUpVariants}
          className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Chart card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-6 backdrop-blur-md md:p-8">
            <div className="absolute right-[-90px] top-[-90px] h-[200px] w-[200px] rounded-full bg-lime-300/20 blur-[80px]" />

            <div className="relative z-10">
              <p
                className="mb-3 text-[0.68rem] uppercase tracking-[0.18em]"
                style={{
                  color: "var(--lime)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Reality Check
              </p>

              <h3
                className="mb-8 max-w-[420px] text-3xl leading-[0.98] md:text-4xl"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--white)",
                }}
              >
                Why young professionals are done with outdated work culture.
              </h3>

              <div className="flex justify-center">
                <DonutChart />
              </div>
            </div>
          </div>

          {/* Right details */}
          <div className="grid gap-6">
            {/* Breakdown card */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur-md md:p-8">
              <p
                className="mb-6 text-[0.68rem] uppercase tracking-[0.18em]"
                style={{
                  color: "var(--lime)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Workplace Breakdown
              </p>

              <div className="space-y-4">
                {CULTURE_BREAKDOWN.map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="h-3 w-3 rounded-full"
                          style={{ background: item.color }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                          {item.label}
                        </span>
                      </div>

                      <span
                        className="text-sm font-semibold"
                        style={{ color: "var(--white)" }}
                      >
                        {item.value}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="grid gap-4 sm:grid-cols-2">
              {STATS.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-6"
                >
                  <span
                    className="mb-3 block font-display leading-none"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.6rem, 4vw, 4rem)",
                      color: "var(--lime)",
                    }}
                  >
                    {stat.value}
                  </span>

                  <span
                    className="block text-[0.78rem] leading-relaxed tracking-[0.04em]"
                    style={{ color: "rgba(255,255,255,0.62)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing line */}
        <motion.p
          variants={fadeUpVariants}
          className="mt-10 max-w-[760px] text-sm leading-7 md:text-base"
          style={{ color: "rgba(255,255,255,0.62)" }}
        >
          The goal is not to complain about work. It is to name what is broken,
          start better conversations, and push for healthier workplace systems.
        </motion.p>
      </motion.div>
    </section>
  );
}