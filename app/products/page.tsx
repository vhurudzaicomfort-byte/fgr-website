import type { Metadata } from "next";
import Image from "next/image";
import { Check, Sparkles, Smartphone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { PRODUCTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Game-O-Mania, HappyTube Games, HappyTube TV, KidsZone Pro, Games 360, Cash Rider and Cash Battle — FGR's mobile games, video and competition products, with live access channels.",
};

const IMG: Record<string, { src: string; alt: string }> = {
  "game-o-mania": { src: "/images/gamer.webp", alt: "A gamer playing Game-O-Mania on a smartphone" },
  "happytube-games": { src: "/images/youth-trendy.webp", alt: "Young people playing mobile games" },
  "happytube-tv": { src: "/images/lifestyle-cafe.webp", alt: "A person watching short-format video on a phone in a cafe" },
  "kidszone-pro": { src: "/images/kids-vr.webp", alt: "Children enjoying kid-safe video content" },
  "games-360": { src: "/images/family-tablet.webp", alt: "A family using a connected device together" },
  competitions: { src: "/images/man-mobile-outdoors.webp", alt: "A man playing a competition game on his phone outdoors" },
};

function ChannelTable({ channels }: { channels: NonNullable<(typeof PRODUCTS)[number]["channels"]> }) {
  return (
    <div style={{ marginTop: 24, overflowX: "auto", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, minWidth: 360 }}>
        <caption className="t-small" style={{ textAlign: "left", padding: "12px 16px", background: "var(--bg-2)", color: "var(--text-2)", fontWeight: 600 }}>
          How to access
        </caption>
        <thead>
          <tr style={{ background: "var(--bg-2)", textAlign: "left" }}>
            <th style={th}>Service</th>
            <th style={th}>Country</th>
            <th style={th}>USSD</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((c, i) => (
            <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={td}>{c.provider}</td>
              <td style={td}>{c.country}</td>
              <td style={{ ...td, fontFamily: "monospace", fontWeight: 600, color: "var(--gold-text)" }}>{c.ussd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const th: React.CSSProperties = { padding: "11px 16px", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-3)" };
const td: React.CSSProperties = { padding: "12px 16px", color: "var(--text-1)" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        crumb="Products"
        eyebrow="Our products"
        title="Mobile games, video and competitions — live across markets."
        intro="A portfolio of subscriber-facing content products, each delivered through carrier-ready, reskinnable portals with comprehensive analytics. Working on smart and feature phones."
      />

      {/* Product chips */}
      <section style={{ paddingBottom: 8 }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {PRODUCTS.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="chip" style={{ textDecoration: "none" }}>
                <Icon name={p.icon} size={14} />
                {p.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {PRODUCTS.map((p, i) => {
        const img = IMG[p.id];
        const flip = i % 2 === 1;
        return (
          <section
            key={p.id}
            id={p.id}
            className="section"
            style={{ scrollMarginTop: 90, background: p.flagship ? "var(--navy-deep)" : flip ? "var(--bg-2)" : "var(--bg)" }}
          >
            <div className="container">
              <div className="prod-detail" style={{ direction: flip && !p.flagship ? "rtl" : "ltr" }}>
                <div style={{ direction: "ltr" }}>
                  <div className="frame reveal" style={{ aspectRatio: "4/3" }}>
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 980px) 100vw, 520px" style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <div style={{ direction: "ltr" }}>
                  <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 50, height: 50, borderRadius: 13, background: p.flagship ? "var(--gold)" : "var(--gold-light)", border: p.flagship ? "none" : "1px solid var(--gold-border)", display: "grid", placeItems: "center", color: p.flagship ? "var(--navy-deep)" : "var(--gold-text)" }}>
                      <Icon name={p.icon} size={23} />
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: p.flagship ? "var(--gold)" : "var(--gold-text)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                      {p.flagship && <Sparkles size={13} />} {p.category}
                    </span>
                  </div>
                  <h2 className="t-h2 reveal reveal-d1" style={{ marginTop: 18, color: p.flagship ? "#fff" : "var(--text-1)" }}>
                    {p.name}
                  </h2>
                  <p className="t-large reveal reveal-d2" style={{ marginTop: 16, color: p.flagship ? "rgba(255,255,255,0.8)" : "var(--text-2)" }}>
                    {p.blurb}
                  </p>
                  {p.features && (
                    <ul className="reveal reveal-d3" style={{ listStyle: "none", marginTop: 22, display: "grid", gap: 12 }}>
                      {p.features.map((f) => (
                        <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ width: 22, height: 22, borderRadius: 99, background: p.flagship ? "rgba(198,163,87,0.2)" : "var(--gold-light)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                            <Check size={13} style={{ color: "var(--gold)" }} />
                          </span>
                          <span className="t-body" style={{ color: p.flagship ? "rgba(255,255,255,0.88)" : "var(--text-1)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {p.channels && (
                    <div className="reveal reveal-d4" style={{ filter: p.flagship ? "none" : "none" }}>
                      {p.flagship ? (
                        <div style={{ marginTop: 24, display: "inline-flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.7)", fontSize: 13.5 }}>
                          <Smartphone size={16} style={{ color: "var(--gold)" }} />
                          Live in South Africa via USSD&nbsp;
                          <code style={{ color: "var(--gold)", fontWeight: 700 }}>*686*6308#</code>
                        </div>
                      ) : (
                        <ChannelTable channels={p.channels} />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection
        title="Want any of these — reskinned to your brand?"
        body="Every product is MNO-integratable and fully reskinnable to your operator brand or corporate identity. Let's talk integration."
      />

      <style>{`
        .prod-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        @media (max-width: 980px) {
          .prod-detail { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px; }
          .prod-detail .frame { max-width: 560px; }
        }
      `}</style>
    </>
  );
}
