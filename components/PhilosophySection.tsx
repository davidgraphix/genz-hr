"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { containerVariants, fadeUpVariants, scaleUpVariants } from "@/lib/motion";

const PHILOSOPHY_WORDS = [
  { text: "MODERN HR", stroke: true },
  { text: "FOR THE NEXT", stroke: false },
  { text: "GENERATION.", accent: true },
];

const PRINCIPLES = [
  { num: "I", text: "Credible in substance" },
  { num: "II", text: "Fresh in delivery" },
  { num: "III", text: "Future-ready in vision" },
  { num: "IV", text: "Human in every action" },
];

export default function PhilosophySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Parallax for glow blob
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blobY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 lg:py-48 px-6 md:px-10 lg:px-16 text-center"
      style={{ background: "var(--bg)" }}
    >
      {/* ── Animated glow blob ── */}
      <motion.div
        style={{ y: blobY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,47,190,0.13) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Horizontal rule top ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] origin-left"
        style={{ background: "var(--border)" }}
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
            className="eyebrow teal centered mb-10 justify-center"
          >
            Brand Philosophy
          </motion.div>

          {/* Main headline — mixed stroke/fill */}
          <motion.div
            variants={fadeUpVariants}
            className="font-display mb-8"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 7.5rem)",
              lineHeight: "0.9",
              letterSpacing: "0.02em",
            }}
          >
            <div
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(245,245,240,0.55)",
              }}
            >
              MODERN HR
            </div>
            <div style={{ color: "var(--white)" }}>FOR THE NEXT</div>
            <div style={{ color: "var(--lime)" }}>GENERATION.</div>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={fadeUpVariants}
            className="text-[1.1rem] leading-[1.8] max-w-[520px] mx-auto mb-16"
            style={{ color: "var(--muted)" }}
          >
            We&apos;re not here to fit into the system. We&apos;re here to make
            the system{" "}
            <span className="text-off-white font-semibold">
              work better for everyone inside it.
            </span>
          </motion.p>

          {/* Principles row */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-[1px]"
            style={{ background: "var(--border)" }}
          >
            {PRINCIPLES.map((p) => (
              <motion.div
                key={p.num}
                whileHover={{ backgroundColor: "rgba(200,244,0,0.04)" }}
                className="py-6 px-4 flex flex-col items-center gap-2 transition-colors duration-300 cursor-default"
                style={{ background: "var(--surface)" }}
              >
                <span
                  className="font-display text-[2rem] leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--lime)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.num}
                </span>
                <span
                  className="text-[0.78rem] font-semibold tracking-[0.06em] text-center"
                  style={{ color: "var(--muted)" }}
                >
                  {p.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Horizontal rule bottom ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1], delay: 0.1 }}
        className="absolute bottom-0 left-0 right-0 h-[1px] origin-right"
        style={{ background: "var(--border)" }}
      />
    </section>
  );
}
