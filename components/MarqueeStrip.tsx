"use client";

const ITEMS = [
  "CAREERS",
  "CULTURE",
  "PEOPLE",
  "WORK",
  "REALITY",
  "COMMUNITY",
  "GROWTH",
  "CLARITY",
  "PURPOSE",
];

function MarqueeContent() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-8 px-6 whitespace-nowrap font-display tracking-[0.08em]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(0.6rem, 1.5vw, 1.2rem)",
            color: "#06060E",
          }}
        >
          {item}
          <span
            className="inline-block w-2 h-2 rounded-full"
            style={{ background: "#06060E", opacity: 0.4 }}
          />
        </span>
      ))}
    </>
  );
}

export default function MarqueeStrip() {
  return (
    <div
      className="relative overflow-hidden py-2"
      style={{
        background: "var(--lime)",
        borderTop: "1px solid rgba(6,6,14,0.12)",
        borderBottom: "1px solid rgba(6,6,14,0.12)",
      }}
    >
      <div
        className="marquee-track"
        style={{ display: "flex", width: "max-content" }}
      >
        {/* Duplicate 3x to ensure seamless loop */}
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  );
}
