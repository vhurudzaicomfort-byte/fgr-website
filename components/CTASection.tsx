import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { COMPANY } from "@/lib/site";

export default function CTASection({
  title = "Ready to integrate world-class content into your network?",
  body = "Partner with Formal Grand Resources to launch carrier-ready games, video and competitions — fully reskinned to your brand, live across smart and feature phones.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div
          className="reveal frame"
          style={{
            background:
              "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 55%, #1B4A78 100%)",
            padding: "clamp(40px,6vw,72px)",
            textAlign: "center",
            border: "1px solid var(--navy-border)",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(50% 60% at 80% 10%, rgba(198,163,87,0.22), transparent 60%), radial-gradient(45% 55% at 10% 100%, rgba(46,107,230,0.20), transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
            <div className="gold-rule" style={{ margin: "0 auto 22px" }} />
            <h2 className="t-h2" style={{ color: "#fff" }}>
              {title}
            </h2>
            <p
              className="t-large"
              style={{ marginTop: 18, color: "rgba(255,255,255,0.8)", marginInline: "auto" }}
            >
              {body}
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                gap: 14,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn btn-gold btn-lg">
                Partner with us <ArrowRight size={16} />
              </Link>
              <a href={`tel:${COMPANY.phoneHref}`} className="btn btn-outline-light btn-lg">
                <Phone size={16} /> {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
