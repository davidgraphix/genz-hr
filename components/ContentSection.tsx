"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { containerVariants, fadeUpVariants, cardGridVariants, cardVariants } from "@/lib/motion";

const FEATURED = {
  tag: "Featured · Career Intelligence",
  title: "The Real Reason You Keep Leaving Jobs After 18 Months",
  excerpt:
    "It's not you. It's not them. It's the silent mismatch between expectation and reality that nobody talks about during onboarding. We're opening the conversation everyone's too afraid to start.",
  readTime: "8 min read",
};

const SECONDARY = [
  {
    tag: "Workplace Culture",
    title: "HUSTLE CULTURE NEEDS TO RETIRE",
    excerpt:
      "Productivity theater isn't ambition. Here's the distinction every young professional needs to make before burning out for someone else's dream.",
    readTime: "5 min read",
  },
  {
    tag: "HR Education",
    title: "WHAT HR ACTUALLY DOES (AND DOESN'T DO)",
    excerpt:
      "The honest guide nobody gives you at orientation. Your rights, their limits, and the grey area everyone pretends doesn't exist.",
    readTime: "6 min read",
  },
];

const SMALL = [
  { tag: "Community", title: "Finding Your People at Work", readTime: "3 min" },
  { tag: "Career Clarity", title: "How to Say No and Still Get Promoted", readTime: "4 min" },
  { tag: "Conversations", title: "The 'Culture Fit' Excuse Is Discriminatory", readTime: "5 min" },
];

export default function ContentSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section
      id="community"
      ref={ref}
      className="py-24 lg:py-36 px-6 md:px-10 lg:px-16"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-[1300px] mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-14"
        >
          <div>
            <motion.div variants={fadeUpVariants} className="eyebrow mb-4">
              Community &amp; Content
            </motion.div>
            <motion.h2
              variants={fadeUpVariants}
              className="font-display leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(3rem, 5.5vw, 6rem)",
                lineHeight: "0.9",
                letterSpacing: "0.02em",
              }}
            >
              THE
              <br />
              CONVERSATION
              <br />
              <span style={{ color: "var(--purple-light)" }}>STARTS</span> HERE.
            </motion.h2>
          </div>

          <motion.div variants={fadeUpVariants}>
            <Link href="#" className="btn-outline">
              View All Conversations →
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Main Editorial Grid ── */}
        <motion.div
          variants={cardGridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[1.5fr_1fr] gap-[1px]"
          style={{ background: "var(--border)" }}
        >
          {/* Featured — large left */}
          <motion.div
            variants={cardVariants}
            className="relative min-h-[460px] lg:min-h-[520px] flex flex-col justify-end p-8 lg:p-10 overflow-hidden group cursor-pointer"
            style={{ background: "var(--bg)" }}
          >
            {/* Gradient overlay */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(123,47,190,0.55) 0%, rgba(67,97,238,0.35) 100%)",
              }}
            />
            {/* Bottom fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(6,6,14,0.9) 0%, rgba(6,6,14,0.1) 60%)",
              }}
            />

            {/* Grid pattern decoration */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.1) 40px, rgba(255,255,255,0.1) 41px)",
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <div
                className="text-[0.68rem] tracking-[0.14em] uppercase mb-3"
                style={{ fontFamily: "var(--font-mono)", color: "var(--lime)" }}
              >
                // {FEATURED.tag}
              </div>
              <h3
                className="font-display mb-3 leading-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                  letterSpacing: "0.03em",
                  color: "var(--white)",
                }}
              >
                {FEATURED.title}
              </h3>
              <p
                className="text-[0.9rem] leading-[1.65] mb-4 max-w-[520px]"
                style={{ color: "rgba(255,255,255,0.62)" }}
              >
                {FEATURED.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="text-[0.7rem] tracking-[0.1em] uppercase"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                >
                  {FEATURED.readTime}
                </span>
                <span
                  className="text-[0.75rem] font-bold tracking-[0.1em] uppercase flex items-center gap-2 transition-gap duration-200"
                  style={{ color: "var(--lime)" }}
                >
                  Read More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column — two cards stacked */}
          <div className="flex flex-col gap-[1px]">
            {SECONDARY.map((item) => (
              <motion.div
                key={item.tag}
                variants={cardVariants}
                whileHover={{ backgroundColor: "rgba(123,47,190,0.06)" }}
                className="flex-1 p-7 lg:p-8 cursor-pointer transition-colors duration-300"
                style={{ background: "var(--bg)" }}
              >
                <div
                  className="text-[0.68rem] tracking-[0.14em] uppercase mb-3"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--lime)" }}
                >
                  // {item.tag}
                </div>
                <h3
                  className="font-display mb-3 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.9rem",
                    letterSpacing: "0.04em",
                    color: "var(--white)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[0.87rem] leading-[1.65] mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  {item.excerpt}
                </p>
                <span
                  className="text-[0.72rem] font-bold tracking-[0.1em] uppercase"
                  style={{ color: "var(--lime)" }}
                >
                  Read More →
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Small cards row ── */}
        <motion.div
          variants={cardGridVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-[1px] mt-[1px]"
          style={{ background: "var(--border)" }}
        >
          {SMALL.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ backgroundColor: "rgba(200,244,0,0.03)" }}
              className="p-6 flex items-center justify-between gap-4 cursor-pointer transition-colors duration-200 group"
              style={{ background: "var(--bg)" }}
            >
              <div>
                <div
                  className="text-[0.65rem] tracking-[0.12em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
                >
                  {item.tag}
                </div>
                <h4
                  className="font-semibold text-[0.92rem] text-off-white group-hover:text-lime transition-colors"
                  style={{ lineHeight: 1.45 }}
                >
                  {item.title}
                </h4>
              </div>
              <span
                className="text-[0.68rem] shrink-0"
                style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
              >
                {item.readTime}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
