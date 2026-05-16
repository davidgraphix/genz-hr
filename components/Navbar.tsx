"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Culture", href: "#culture" },
  { label: "Conversations", href: "#conversations" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        className={`
           top-0 left-0 right-0 z-[900]
          flex items-center justify-between
          px-6 md:px-10 py-70
          transition-all duration-500
          ${scrolled
            ? "bg-bg/90 backdrop-blur-xl border-b border-white/[0.07]"
            : "bg-transparent"
          }
        `}
      >
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Gen Z HR logo" width={90} height={80} priority />
          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[0.78rem] font-semibold tracking-[0.1em] uppercase text-muted hover:text-off-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden lg:inline-flex btn-primary text-[0.75rem]"
        >
          Join the Movement
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden flex flex-col gap-[5px] p-1 z-[1001]"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[2px] bg-off-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-[2px] bg-off-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-[2px] bg-off-white"
          />
        </button>
      </motion.nav>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
            className="fixed inset-0 z-[800] bg-bg flex flex-col items-center justify-center gap-6"
          >
            {/* Lime accent line top */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{ background: "var(--lime)" }}
            />

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  delay: i * 0.07 + 0.1,
                  duration: 0.5,
                  ease: [0.19, 1, 0.22, 1],
                }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-[3.5rem] font-display tracking-wider text-muted hover:text-lime transition-colors duration-200"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {link.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-4"
            >
              <Link href="#contact" onClick={closeMenu} className="btn-primary">
                Join the Movement →
              </Link>
            </motion.div>

            {/* Ghost text */}
            <div
              className="absolute bottom-8 font-mono-brand text-[0.65rem] tracking-[0.2em] uppercase"
              style={{ color: "var(--muted-2)" }}
            >
              Gen Z HR · The Future of Work
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
