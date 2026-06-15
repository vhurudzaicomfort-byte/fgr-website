import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  crumb: string;
}) {
  return (
    <section className="hero-mesh" style={{ paddingTop: 132, paddingBottom: 64 }}>
      <div className="container">
        <nav aria-label="Breadcrumb" className="reveal" style={{ marginBottom: 20 }}>
          <ol style={{ listStyle: "none", display: "flex", gap: 8, fontSize: 13, color: "var(--text-3)" }}>
            <li>
              <Link href="/" style={{ color: "var(--text-3)" }}>
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li style={{ color: "var(--text-2)", fontWeight: 500 }}>{crumb}</li>
          </ol>
        </nav>
        <div className="t-label reveal" style={{ marginBottom: 18 }}>
          {eyebrow}
        </div>
        <h1 className="t-h1 reveal reveal-d1" style={{ maxWidth: 880 }}>
          {title}
        </h1>
        {intro && (
          <p className="t-large reveal reveal-d2" style={{ marginTop: 22, maxWidth: 720 }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
