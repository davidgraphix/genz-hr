"use client";

import { useRef, type ReactNode, type ElementType } from "react";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { fadeUpVariants } from "@/lib/motion";

interface RevealWrapperProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
  as?: ElementType;
}

export default function RevealWrapper({
  children,
  variants = fadeUpVariants,
  className,
  delay = 0,
  threshold = 0.15,
  once = true,
  as: Tag = "div",
}: RevealWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: threshold });

  const MotionTag = motion[Tag as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </MotionTag>
  );
}
