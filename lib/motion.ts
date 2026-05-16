import type { Variants } from "framer-motion";

/* ─────────────────────────────────────────
   SHARED EASING CURVES
───────────────────────────────────────── */
export const EASE_OUT_EXPO = [0.19, 1, 0.22, 1] as const;
export const EASE_IN_OUT_QUINT = [0.83, 0, 0.17, 1] as const;
export const EASE_STANDARD = [0.4, 0, 0.2, 1] as const;

/* ─────────────────────────────────────────
   SCROLL REVEAL — default stagger container
───────────────────────────────────────── */
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* ─────────────────────────────────────────
   FADE UP — most common reveal
───────────────────────────────────────── */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: EASE_OUT_EXPO,
    },
  },
};

/* ─────────────────────────────────────────
   FADE IN — no movement
───────────────────────────────────────── */
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_STANDARD },
  },
};

/* ─────────────────────────────────────────
   FADE LEFT
───────────────────────────────────────── */
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   FADE RIGHT
───────────────────────────────────────── */
export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   SCALE UP
───────────────────────────────────────── */
export const scaleUpVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   HERO STAGGER — for hero children
───────────────────────────────────────── */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

export const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_OUT_EXPO,
    },
  },
};

/* ─────────────────────────────────────────
   CARD GRID STAGGER
───────────────────────────────────────── */
export const cardGridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   TEXT REVEAL — character by character
───────────────────────────────────────── */
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.6, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   LINE DRAW — for decorative lines
───────────────────────────────────────── */
export const lineDrawVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/* ─────────────────────────────────────────
   PILL/TAG STAGGER
───────────────────────────────────────── */
export const pillContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.3,
    },
  },
};

export const pillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
};
