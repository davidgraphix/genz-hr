"use client";

import Link from "next/link";
import Image from "next/image";

const NAV_COL = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Culture", href: "#culture" },
  { label: "Conversations", href: "#conversations" },
  { label: "Community", href: "#community" },
];

const TOPICS_COL = [
  { label: "Career Clarity", href: "#" },
  { label: "Workplace Culture", href: "#" },
  { label: "HR Education", href: "#" },
  { label: "Professional Growth", href: "#" },
  { label: "Community", href: "#" },
];

const CONNECT_COL = [
  { label: "Join the Movement", href: "#contact" },
  { label: "Work With Us", href: "#" },
  { label: "Press & Media", href: "#" },
  { label: "Contact Us", href: "#contact" },
];

const SOCIAL = [
  { label: "IG", href: "#", full: "Instagram" },
  { label: "TK", href: "#", full: "TikTok" },
  { label: "LI", href: "#", full: "LinkedIn" },
  { label: "X", href: "#", full: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer
      className="border-t px-6 md:px-10 lg:px-16 pt-16 pb-8"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      {/* ── Top grid ── */}
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-16">

        {/* Brand col */}
        <div>
          {/* Logo */}
           <Link href="#home" >
                    <Image src="/logo2.png" alt="Gen Z HR logo" width={90} height={80} priority />
                    
                  </Link>

          {/* Tagline */}
          <p
            className="text-[0.9rem] leading-[1.7] max-w-[280px] mb-6"
            style={{ color: "var(--muted)" }}
          >
            A culture-forward HR brand for the next generation of work. Bold
            conversations. Real culture. Human-centered careers.
          </p>

          {/* Social icons */}
          <div className="flex gap-2 mb-6">
            {SOCIAL.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.full}
                className="w-9 h-9 flex items-center justify-center rounded-[1px] text-[0.78rem] font-semibold transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--lime)";
                  (e.currentTarget as HTMLElement).style.color = "var(--lime)";
                  (e.currentTarget as HTMLElement).style.background = "rgba(200,244,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--muted)";
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                }}
              >
                {s.label}
              </Link>
            ))}
          </div>

          {/* Mono tag */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[0.65rem] tracking-[0.1em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--border)",
              color: "var(--muted-2)",
            }}
          >
            <span
              className="w-[6px] h-[6px] rounded-full animate-pulse"
              style={{ background: "var(--lime)" }}
            />
            Active & Growing
          </div>
        </div>

        {/* Nav col */}
        <div>
          <div
            className="text-[0.68rem] tracking-[0.14em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}
          >
            Navigate
          </div>
          <ul className="flex flex-col gap-3">
            {NAV_COL.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[0.9rem] transition-colors duration-200 hover:text-off-white"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Topics col */}
        <div>
          <div
            className="text-[0.68rem] tracking-[0.14em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}
          >
            Topics
          </div>
          <ul className="flex flex-col gap-3">
            {TOPICS_COL.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[0.9rem] transition-colors duration-200 hover:text-off-white"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect col */}
        <div>
          <div
            className="text-[0.68rem] tracking-[0.14em] uppercase mb-5"
            style={{ fontFamily: "var(--font-mono)", color: "var(--white)" }}
          >
            Connect
          </div>
          <ul className="flex flex-col gap-3">
            {CONNECT_COL.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[0.9rem] transition-colors duration-200 hover:text-off-white"
                  style={{ color: "var(--muted)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="max-w-[1300px] mx-auto h-[1px] mb-6"
        style={{ background: "var(--border)" }}
      />

      {/* ── Bottom row ── */}
      <div className="max-w-[1300px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span
          className="text-[0.75rem] tracking-[0.04em]"
          style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} Gen Z HR · All rights reserved
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-[0.75rem] transition-colors hover:text-off-white"
            style={{ color: "var(--muted-2)" }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-[0.75rem] transition-colors hover:text-off-white"
            style={{ color: "var(--muted-2)" }}
          >
            Terms
          </Link>
          <span
            className="text-[0.68rem] tracking-[0.1em] uppercase px-3 py-1 rounded-full"
            style={{
              fontFamily: "var(--font-mono)",
              border: "1px solid var(--border)",
              color: "var(--muted-2)",
            }}
          >
            Built for the next generation
          </span>
        </div>
      </div>
    </footer>
  );
}
