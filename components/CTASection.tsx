"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, fadeUpVariants } from "@/lib/motion";

const INPUT_FIELDS = [
  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
  {
    id: "role",
    label: "Current Role",
    type: "text",
    placeholder: "e.g. HR Manager, Student, Career Changer",
  },
];

export default function CTASection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-40 px-6 md:px-10 lg:px-16"
      style={{ background: "var(--lime)" }}
    >
      {/* ── Ghost "WORK" background text ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span
          className="font-display whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(8rem, 25vw, 32rem)",
            color: "rgba(6,6,14,0.05)",
            lineHeight: 1,
            letterSpacing: "0.04em",
          }}
        >
          WORK
        </span>
      </div>

      <motion.div
        className="max-w-[960px] mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 mb-8"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(6,6,14,0.5)",
          }}
        >
          <span
            className="w-5 h-[1px] inline-block"
            style={{ background: "rgba(6,6,14,0.35)" }}
          />
          Join The Movement
          <span
            className="w-5 h-[1px] inline-block"
            style={{ background: "rgba(6,6,14,0.35)" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUpVariants}
          className="font-display mb-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3.5rem, 8.5vw, 9.5rem)",
            lineHeight: "0.87",
            letterSpacing: "0.02em",
            color: "#06060E",
          }}
        >
          WORK SHOULD
          <br />
          FEEL BETTER
          <br />
          THAN THIS.
        </motion.h2>

        {/* Sub */}
        <motion.p
          variants={fadeUpVariants}
          className="text-[1.08rem] leading-[1.75] max-w-[480px] mx-auto mb-14"
          style={{ color: "rgba(6,6,14,0.6)" }}
        >
          Join a new generation shaping healthier workplaces and smarter
          careers. The movement is already in motion — are you in?
        </motion.p>

        {/* ── Signup Form ── */}
        <motion.div
          variants={fadeUpVariants}
          className="max-w-[540px] mx-auto"
        >
          <div
            className="p-1 rounded-[2px]"
            style={{ background: "rgba(6,6,14,0.08)" }}
          >
            <div
              className="rounded-[1px] p-8"
              style={{ background: "rgba(6,6,14,0.04)" }}
            >
              <div className="flex flex-col gap-4 mb-6">
                {INPUT_FIELDS.map((field) => (
                  <div key={field.id} className="text-left">
                    <label
                      htmlFor={field.id}
                      className="block text-[0.72rem] font-semibold tracking-[0.1em] uppercase mb-1"
                      style={{ color: "rgba(6,6,14,0.55)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 text-[0.95rem] rounded-[1px] outline-none transition-all duration-200"
                      style={{
                        background: "rgba(6,6,14,0.06)",
                        border: "1px solid rgba(6,6,14,0.12)",
                        color: "#06060E",
                        fontFamily: "var(--font-body)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(6,6,14,0.4)";
                        e.target.style.background = "rgba(6,6,14,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(6,6,14,0.12)";
                        e.target.style.background = "rgba(6,6,14,0.06)";
                      }}
                    />
                  </div>
                ))}
              </div>

              <button className="btn-dark w-full justify-center py-4 text-[0.85rem]">
                Join the Movement →
              </button>

              <p
                className="text-[0.72rem] mt-4 text-center"
                style={{ color: "rgba(6,6,14,0.4)" }}
              >
                No spam. No corporate BS. Just real conversations about work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social proof row */}
        <motion.div
          variants={fadeUpVariants}
          className="flex items-center justify-center gap-6 mt-10 flex-wrap"
        >
          {["People-First", "Culture-Forward", "Future-Ready"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center text-[0.55rem]"
                style={{ background: "#06060E", color: "var(--lime)" }}
              >
                ✓
              </div>
              <span
                className="text-[0.78rem] font-semibold"
                style={{ color: "rgba(6,6,14,0.6)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
