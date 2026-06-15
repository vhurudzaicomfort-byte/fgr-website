import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="hero-mesh" style={{ minHeight: "70vh", display: "grid", placeItems: "center", paddingTop: 100 }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: "clamp(70px,14vw,140px)", color: "var(--navy-2)", lineHeight: 1 }}>
          404
        </div>
        <h1 className="t-h2" style={{ marginTop: 12 }}>This page has gone off-network</h1>
        <p className="t-large" style={{ marginTop: 14, maxWidth: 480, marginInline: "auto" }}>
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn btn-gold btn-lg" style={{ marginTop: 28 }}>
          <ArrowLeft size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
