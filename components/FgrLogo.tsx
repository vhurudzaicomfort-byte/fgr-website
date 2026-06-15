// Faithful, theme-able recreation of the Formal Grand Resources lockup.
// Monogram ring + "FGR" inherit currentColor (navy on light, white on dark);
// the divider and "RESOURCES" carry the brand gold. Crisp at any size.

export default function FgrLogo({
  variant = "full",
  className = "",
}: {
  variant?: "full" | "mark";
  className?: string;
}) {
  const mark = (
    <svg
      viewBox="0 0 100 100"
      width="100%"
      height="100%"
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {/* broken ring */}
      <path
        d="M 78 22 A 38 38 0 1 0 86 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'Sora', sans-serif"
        fontWeight="700"
        fontSize="33"
        letterSpacing="0.5"
        fill="currentColor"
      >
        FGR
      </text>
    </svg>
  );

  if (variant === "mark") {
    return (
      <span className={className} style={{ display: "inline-block", width: 40, height: 40 }}>
        {mark}
      </span>
    );
  }

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: 12, lineHeight: 1 }}
    >
      <span style={{ width: 42, height: 42, flexShrink: 0 }}>{mark}</span>
      <span
        aria-hidden="true"
        style={{ width: 1.5, height: 34, background: "var(--gold)", flexShrink: 0 }}
      />
      <span style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: 3 }}>
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 700,
            fontSize: 16,
            letterSpacing: "0.16em",
            color: "currentColor",
          }}
        >
          FORMAL&nbsp;GRAND
        </span>
        <span
          style={{
            fontFamily: "'Sora', sans-serif",
            fontWeight: 600,
            fontSize: 9.5,
            letterSpacing: "0.42em",
            color: "var(--gold-text)",
          }}
        >
          RESOURCES
        </span>
      </span>
    </span>
  );
}
