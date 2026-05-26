"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { heroContainerVariants, heroItemVariants } from "@/lib/motion";

const HERO_STATS = [
  { value: "73%", label: "Gen Z wants purpose at work" },
  { value: "2×", label: "More likely to leave toxic cultures" },
  { value: "89%", label: "Prioritize wellbeing over salary" },
  { value: "∞", label: "Conversations still to be had" },
];

const TAGS = [
  { label: "People First", color: "lime" },
  { label: "Culture Forward", color: "purple" },
] as const;

const tagColors = {
  lime: { border: "var(--lime)", color: "var(--lime)" },
  purple: { border: "var(--purple-light)", color: "#C49EE8" },
  teal: { border: "var(--teal)", color: "var(--teal)" },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ paddingTop: "0px" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at top left, rgba(123,47,190,0.15), transparent 30%),
            radial-gradient(circle at bottom right, rgba(0,212,170,0.10), transparent 30%),
            #06060E
          `,
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] bg-repeat pointer-events-none" />

      {/* Glow blobs */}
      <div
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background: "rgba(123,47,190,0.18)",
          top: "-10%",
          left: "-10%",
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: "rgba(0,212,170,0.12)",
          bottom: "-10%",
          right: "-5%",
        }}
      />

      {/* Ghost Text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <h1
          className="font-black"
          style={{
            fontSize: "clamp(8rem, 20vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
            lineHeight: 1,
          }}
        >
          GEN Z
        </h1>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto grid lg:grid-cols-2 min-h-screen items-start px-20 md:px-10 lg:px-16">
        {/* ───────────────── LEFT CONTENT ───────────────── */}
        <motion.div
          className="relative z-20 pt-2 lg:pt-8"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={heroItemVariants} className="eyebrow mb-3 -mt-1">
            Est. Now · For The Future
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={heroItemVariants}
            className="font-display leading-none tracking-display mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4.1rem, 5.5vw, 7rem)",
              lineHeight: "0.88",
              letterSpacing: "0.02em",
            }}
          >
            WORK SHOULD
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: "1px var(--white)",
              }}
            >
              FEEL BETTER
            </span>
            <br />
            THAN THIS.
            <span style={{ color: "var(--lime)" }}>.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={heroItemVariants}
            className="text-[1.05rem] leading-[1.9] max-w-[500px] mb-4"
            style={{ color: "var(--muted)" }}
          >
            We&apos;re building conversations, culture, and career clarity for
            modern professionals who{" "}
            <span className="text-off-white font-semibold">
              refuse outdated workplace systems
            </span>{" "}
            and want something real.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={heroItemVariants}
            className="flex gap-3 flex-wrap mb-6 rounded-[1rem]"
          >
            {/* <Link
              href="#contact"
              className="btn-primary rounded-[1rem]"
              style={{ borderRadius: "1rem" }}
            >
              Join the Movement →
            </Link> */}

            <Link
              href="#conversations"
              className="btn-outline rounded-[1rem]"
              style={{ borderRadius: "1rem" }}
            >
              Explore Conversations
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            variants={heroItemVariants}
            className="flex flex-wrap gap-2"
          >
            {TAGS.map((tag) => (
              <span
                key={tag.label}
                className="text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-3 py-1 rounded-[1rem] backdrop-blur-md"
                style={{
                  border: `1px solid ${tagColors[tag.color].border}`,
                  color: tagColors[tag.color].color,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {tag.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* ───────────────── RIGHT VISUAL ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.19, 1, 0.22, 1],
            delay: 0.3,
          }}
          className="relative hidden lg:flex items-start justify-center py-8 h-full"
        >
          {/* Floating Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20"
          >
            {/* Glass background */}
            <div
              className="absolute inset-0 rounded-[1rem] blur-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(123,47,190,0.25), rgba(0,212,170,0.12))",
              }}
            />

            <div
              className="
                relative
                w-[460px]
                h-[500px]
                rounded-[1rem]
                overflow-hidden
                border
                backdrop-blur-xl
              "
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              {/* Main Image */}
              <Image 
                src="/images/hero1.jpg"
                alt="Gen Z HR Hero"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(6,6,14,0.9), rgba(6,6,14,0.15), transparent)",
                }}
              />

              {/* Floating quote card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-6
                  bottom-6
                  right-6
                  rounded-[1rem]
                  p-3
                  backdrop-blur-xl
                "
                style={{
                  background: "rgba(10,10,20,0.65)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Label */}
                <div
                  className="text-[0.68rem] tracking-[0.14em] uppercase mb-3"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--teal)",
                  }}
                >
                   Culture Signal 001
                </div>

                {/* Quote */}
                <p className="text-[1rem] leading-[1.8] text-off-white font-medium mb-5">
                  “The future of work belongs to people brave enough to rebuild
                  workplace culture from scratch.”
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {HERO_STATS.slice(0, 2).map((stat) => (
                    <div
                      key={stat.value}
                      className="rounded-[0.5rem] p-2"
                      style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <div
                        className="font-display leading-none"
                        style={{
                          fontSize: "1.5rem",
                          color: "var(--lime)",
                        }}
                      >
                        {stat.value}
                      </div>

                      <div
                        className="text-[0.72rem] mt-2 leading-snug"
                        style={{ color: "var(--muted)" }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  top-6
                  right-6
                  px-4
                  py-2
                  rounded-[1rem]
                  text-[0.6rem]
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                "
                style={{
                  background: "var(--lime)",
                  color: "#06060E",
                }}
              >
                Future Ready
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ───────────────── MOBILE IMAGE ───────────────── */}
      <div className="lg:hidden relative z-20 mt-16 px-6 pb-16">
        <div
          className="relative w-full h-[500px] rounded-[2rem] overflow-hidden border"
          style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.08)",
          }}
        >
          <Image
            src="/images/hero-person.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(6,6,14,0.9), transparent)",
            }}
          />
        </div>
      </div>
    </section>
  );
}