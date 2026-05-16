import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline" | "dark" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  dark: "btn-dark",
  ghost:
    "font-mono-brand text-xs tracking-widest uppercase text-muted hover:text-off-white transition-colors inline-flex items-center gap-2",
};

export default function Button({
  variant = "primary",
  href,
  children,
  className,
  external,
  ...props
}: ButtonProps) {
  const classes = clsx(variantClasses[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
