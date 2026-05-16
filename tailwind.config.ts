import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#06060E",
        surface: "#0D0D1A",
        lime: "#C8F400",
        purple: "#7B2FBE",
        "purple-light": "#9B4DCA",
        teal: "#00D4AA",
        electric: "#4361EE",
        "off-white": "#F5F5F0",
        muted: "#8888A0",
        border: "rgba(255,255,255,0.07)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(5rem,9vw,10rem)", { lineHeight: "0.88" }],
        "display-xl": ["clamp(4rem,7vw,8rem)", { lineHeight: "0.9" }],
        "display-lg": ["clamp(3rem,5vw,6.5rem)", { lineHeight: "0.92" }],
        "display-md": ["clamp(2.5rem,4vw,5rem)", { lineHeight: "0.95" }],
        "display-sm": ["clamp(2rem,3vw,3.5rem)", { lineHeight: "1" }],
      },
      letterSpacing: {
        display: "0.02em",
        "display-wide": "0.06em",
        caps: "0.1em",
        "caps-wide": "0.16em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee 22s linear infinite reverse",
        float: "float 8s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite reverse",
        "fade-in-up": "fadeInUp 0.9s ease both",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(1deg)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(32px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19,1,0.22,1)",
        "in-out-quint": "cubic-bezier(0.83,0,0.17,1)",
      },
    },
  },
  plugins: [],
};

export default config;
