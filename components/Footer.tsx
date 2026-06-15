import Link from "next/link";
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";
import FgrLogo from "./FgrLogo";
import { COMPANY, NAV } from "@/lib/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="bg-navy" style={{ color: "#fff" }}>
      <div className="container" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="footer-grid">
          {/* Brand */}
          <div style={{ maxWidth: 320 }}>
            <FgrLogo tone="light" height={38} />
            <p
              style={{
                marginTop: 20,
                fontSize: 14.5,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.66)",
              }}
            >
              {COMPANY.tagline} Mobile games, video, programmatic media and cloud — engineered for
              Africa&apos;s operators and consumers.
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 style={footHead}>Explore</h3>
            <ul style={footList}>
              {NAV.map((n) => (
                <li key={n.label} style={{ marginBottom: 11 }}>
                  <Link href={n.href} style={footLink}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 style={footHead}>Products</h3>
            <ul style={footList}>
              {[
                ["Game-O-Mania", "/products#game-o-mania"],
                ["HappyTube Games", "/products#happytube-games"],
                ["HappyTube TV", "/products#happytube-tv"],
                ["Games 360", "/products#games-360"],
                ["Cash Rider & Cash Battle", "/products#competitions"],
              ].map(([label, href]) => (
                <li key={label} style={{ marginBottom: 11 }}>
                  <Link href={href} style={footLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={footHead}>Get in touch</h3>
            <ul style={{ ...footList, display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={contactRow}>
                <MapPin size={17} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>{COMPANY.address}</span>
              </li>
              <li style={contactRow}>
                <Phone size={17} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <a href={`tel:${COMPANY.phoneHref}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                  {COMPANY.phone}
                </a>
              </li>
              <li style={contactRow}>
                <Mail size={17} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <a href={`mailto:${COMPANY.email}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                  {COMPANY.email}
                </a>
              </li>
              <li style={contactRow}>
                <Clock size={17} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.72)" }}>{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            paddingTop: 26,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <Link
            href="/contact"
            style={{ fontSize: 13, color: "var(--gold)", display: "inline-flex", alignItems: "center", gap: 5 }}
          >
            Start a conversation <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1fr 1.2fr;
          gap: 48px;
        }
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px 32px; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}

const footHead: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--gold)",
  marginBottom: 18,
};
const footList: React.CSSProperties = { listStyle: "none" };
const footLink: React.CSSProperties = { fontSize: 14, color: "rgba(255,255,255,0.72)" };
const contactRow: React.CSSProperties = { display: "flex", gap: 11, alignItems: "flex-start" };
