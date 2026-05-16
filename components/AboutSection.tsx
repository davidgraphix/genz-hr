"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  containerVariants,
  fadeUpVariants,
  fadeLeftVariants,
  fadeRightVariants,
} from "@/lib/motion";

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
      className="relative overflow-hidden py-24 lg:py-36 px-6 md:px-10 lg:px-16"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(123,47,190,0.08), transparent 30%),
          radial-gradient(circle at bottom right, rgba(177,255,0,0.05), transparent 30%),
          #0b0b0c
        `,
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] bg-repeat pointer-events-none" />

      {/* Huge background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1
          className="font-black uppercase tracking-tight"
          style={{
            fontSize: "clamp(7rem, 20vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            lineHeight: 1,
          }}
        >
          GEN Z
        </h1>
      </div>

      {/* Floating blur */}
      <div className="absolute top-24 left-20 w-[300px] h-[300px] rounded-full bg-purple-700/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-lime-400/10 blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 max-w-[1450px] mx-auto min-h-[750px] flex items-center justify-center"
      >
        {/* LEFT IMAGE */}
        <motion.div
          variants={fadeLeftVariants}
          className="absolute left-0 bottom-0 hidden lg:block"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-purple-600/20 blur-[90px] rounded-full" />

            <Image
              src="/images/about-left.png"
              alt="Woman portrait"
              width={500}
              height={760}
              priority
              className="relative z-10 object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeRightVariants}
          className="absolute right-0 bottom-0 hidden lg:block"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-lime-300/10 blur-[90px] rounded-full" />

            <Image
              src="/images/about-right.png"
              alt="Woman portrait"
              width={470}
              height={720}
              priority
              className="relative z-10 object-contain drop-shadow-[0_25px_80px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>

        {/* CENTER CONTENT */}
        <motion.div
          variants={fadeUpVariants}
          className="relative z-20 text-center max-w-[650px]"
        >
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
            className="font-black uppercase leading-[0.9]"
            style={{
              fontSize: "clamp(3rem,6vw,6.8rem)",
              color: "#f5f5f0",
            }}
          >
            HR FOR THE
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.5)",
              }}
            >
              NEW
            </span>{" "}
            WORKFORCE
          </h2>

          {/* Description */}
          <p
            className="mt-8 text-[1.05rem] leading-[1.9] px-4 md:px-0"
            style={{
              color: "rgba(245,245,240,0.72)",
            }}
          >
            Gen Z HR is redefining workplace culture for a generation that
            values authenticity, flexibility, transparency, and real human
            connection over outdated corporate structures.
          </p>

          <p
            className="mt-5 text-[1.05rem] leading-[1.9] px-4 md:px-0"
            style={{
              color: "rgba(245,245,240,0.72)",
            }}
          >
            We create conversations around modern work, toxic environments,
            leadership, career growth, AI, burnout, and the future of work —
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
                bg-gradient-to-r from-[#7b2fbe] to-[#5221a0]
                hover:shadow-[0_0_40px_rgba(123,47,190,0.5)]
              "
            >
              Explore The Culture
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* MOBILE IMAGES */}
      <div className="lg:hidden relative z-20 mt-16 flex items-end justify-center gap-4">
        <motion.div variants={fadeLeftVariants}>
          <Image
            src="/images/about-left.jpg"
            alt="Woman portrait"
            width={180}
            height={260}
            className="object-contain"
          />
        </motion.div>

        <motion.div variants={fadeRightVariants}>
          <Image
            src="/images/about-right.jpg"
            alt="Woman portrait"
            width={180}
            height={260}
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}