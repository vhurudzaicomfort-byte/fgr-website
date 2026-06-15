export default function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className="reveal"
      style={{
        maxWidth: align === "center" ? 720 : 760,
        margin: align === "center" ? "0 auto" : undefined,
        textAlign: align,
      }}
    >
      {eyebrow && (
        <div
          className="t-label"
          style={{ justifyContent: align === "center" ? "center" : "flex-start", marginBottom: 18 }}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="t-h2" style={{ color: light ? "#fff" : "var(--text-1)" }}>
        {title}
      </h2>
      {intro && (
        <p
          className="t-large"
          style={{ marginTop: 18, color: light ? "rgba(255,255,255,0.78)" : "var(--text-2)" }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
