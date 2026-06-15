import Image from "next/image";

// Uses the actual Formal Grand Resources logo artwork.
// tone="auto"  → shows the real navy+gold logo; auto-reverses to white in dark mode (CSS).
// tone="light" → forces the reversed white logo (for dark surfaces like the footer).

const RATIO = 5661 / 1328; // intrinsic aspect of the supplied artwork

export default function FgrLogo({
  height = 36,
  tone = "auto",
  priority = false,
  className = "",
}: {
  height?: number;
  tone?: "auto" | "light";
  priority?: boolean;
  className?: string;
}) {
  const width = Math.round(height * RATIO);
  return (
    <Image
      src="/images/fgr-logo.png"
      alt="Formal Grand Resources"
      width={width}
      height={height}
      priority={priority}
      sizes={`${width}px`}
      className={`fgr-logo ${tone === "light" ? "fgr-logo--onDark" : "fgr-logo--auto"} ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}
