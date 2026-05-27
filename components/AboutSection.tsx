"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/lib/motion";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden min-h-screen px-6 md:px-10 lg:px-16 py-24 lg:py-0 flex items-center"
      style={{
        background: "#0b0b0c",
      }}
    >
      {/* Editorial Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/about-bg.png"
          alt="Gen Z HR editorial background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Center focus overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18),rgba(0,0,0,0.68))]" />

        {/* Color mood overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(123,47,190,0.22),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(210,255,40,0.12),transparent_35%)]" />
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] bg-[url('/noise.png')] bg-repeat pointer-events-none" />

      {/* Huge background text */}
      <div
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1
          className="font-black uppercase tracking-tight"
          style={{
            fontSize: "clamp(7rem, 20vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.06)",
            lineHeight: 1,
          }}
        >
          GEN Z
        </h1>
      </div>

      {/* Floating blur accents */}
      <div className="absolute top-24 left-20 z-[3] w-[300px] h-[300px] rounded-full bg-purple-700/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 z-[3] w-[300px] h-[300px] rounded-full bg-lime-400/15 blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-[1450px] mx-auto w-full min-h-[760px] flex items-center justify-center"
      >
        {/* CENTER CONTENT */}
        <motion.div
          variants={fadeUpVariants}
          className="relative z-20 text-center max-w-[760px]"
        >
          {/* Soft glass backing */}
          <div className="absolute inset-[-42px] -z-10 rounded-[3rem] bg-black/20 backdrop-blur-[2px] border border-white/5" />

          {/* Top dots */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <span className="w-3 h-3 rounded-full bg-[#d2ff28]" />
            <span className="w-3 h-3 rounded-full bg-[#d2ff28]/70" />
            <span className="w-3 h-3 rounded-full bg-[#d2ff28]/40" />
          </div>

          {/* Eyebrow */}
          <div
            className="uppercase tracking-[0.35em] text-[0.7rem] mb-6"
            style={{
              color: "#d2ff28",
              fontFamily: "var(--font-mono)",
            }}
          >
            About Gen Z HR
          </div>

          {/* Heading */}
          <h2
            className="uppercase leading-[0.85] tracking-[-0.08em]"
            style={{
              fontSize: "clamp(3.4rem, 7vw, 7.8rem)",
              color: "#f5f5f0",
              fontFamily: "var(--font-bricolage)",
              fontWeight: 900,
            }}
          >
            HR FOR THE
            <br />
            <span
              className="inline-block rotate-[-2deg]"
              style={{
                color: "#d2ff28",
                textShadow: "0 0 35px rgba(210,255,40,0.35)",
              }}
            >
              NEW
            </span>{" "}
            WORKFORCE
          </h2>

          {/* Description */}
          <p
            className="mt-8 text-[1rem] md:text-[1.08rem] leading-[1.85] px-4 md:px-0 max-w-[680px] mx-auto"
            style={{
              color: "rgba(245,245,240,0.82)",
            }}
          >
            Gen Z HR is redefining workplace culture for a generation that
            values authenticity, flexibility, transparency, and real human
            connection over outdated corporate structures.
          </p>

          <p
            className="mt-5 text-[1rem] md:text-[1.08rem] leading-[1.85] px-4 md:px-0 max-w-[680px] mx-auto"
            style={{
              color: "rgba(245,245,240,0.82)",
            }}
          >
            We create conversations around modern work, toxic environments,
            leadership, career growth, AI, burnout, and the future of work
            without the corporate filter.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="mt-10"
          >
            <button
              className="
                px-8 py-4 rounded-full
                text-sm font-semibold
                transition-all duration-300
                border border-white/10
                text-white
                bg-gradient-to-r from-[#7b2fbe] to-[#5221a0]
                hover:shadow-[0_0_40px_rgba(123,47,190,0.5)]
              "
            >
              Explore The Culture
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}