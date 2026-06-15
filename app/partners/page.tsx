import type { Metadata } from "next";
import { Network, Cloud, Globe2, Workflow, ShieldCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { PARTNER_NOTE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Partners & Ecosystem",
  description:
    "Formal Grand Resources collaborates with trusted strategic-alliance and technology partners — including AWS and Microsoft Azure — and integrates across mobile networks in multiple African markets.",
};

const TECH = [
  { name: "AWS", note: "Premium cloud reseller", sub: "Amazon Web Services" },
  { name: "Microsoft Azure", note: "Premium cloud reseller", sub: "Microsoft" },
];

const PILLARS = [
  { icon: Network, title: "Mobile Network Operators", text: "Our portals are engineered to integrate into any MNO, with comprehensive reporting and analytics — already live across South African and Kenyan networks via WAP and USSD." },
  { icon: Cloud, title: "Cloud & Infrastructure", text: "As an AWS and Microsoft Azure premium reseller, we deliver scalable PaaS, IaaS and SaaS on the world's leading cloud platforms." },
  { icon: Workflow, title: "Content & Technology", text: "We work with local content providers in each market and trusted technology partners to keep our catalogue fresh and our stack current." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        crumb="Partners"
        eyebrow="Ecosystem"
        title="Built on trusted alliances and carrier-ready integration."
        intro={PARTNER_NOTE}
      />

      {/* Pillars */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="How we partner" title="An ecosystem across networks, cloud and content" />
          <div className="pillar-grid" style={{ marginTop: 52 }}>
            {PILLARS.map((p, i) => (
              <div key={p.title} className={`card reveal reveal-d${i + 1}`} style={{ padding: 30 }}>
                <span style={{ width: 52, height: 52, borderRadius: 14, background: "var(--navy)", display: "grid", placeItems: "center", color: "var(--gold)" }}>
                  <p.icon size={23} strokeWidth={1.7} />
                </span>
                <h3 className="t-h3" style={{ marginTop: 20 }}>{p.title}</h3>
                <p className="t-body" style={{ marginTop: 10 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader
            eyebrow="Technology partners"
            title="Powered by the world's leading cloud platforms"
            intro="Formal Grand Resources is a premium reseller of the two leading public clouds, delivering enterprise-grade infrastructure to clients of every size."
            align="center"
          />
          <div className="tech-grid" style={{ marginTop: 48 }}>
            {TECH.map((t, i) => (
              <div key={t.name} className={`card reveal reveal-d${i + 1}`} style={{ padding: "36px 32px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: 26, color: "var(--navy-2)", letterSpacing: "-0.02em" }}>
                  {t.name}
                </div>
                <div className="gold-rule" style={{ margin: "16px auto" }} />
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--gold-text)" }}>{t.note}</div>
                <div className="t-small" style={{ marginTop: 4 }}>{t.sub}</div>
              </div>
            ))}
          </div>
          <p className="t-small reveal" style={{ textAlign: "center", marginTop: 28, maxWidth: 560, marginInline: "auto" }}>
            Trademarks and brand names are the property of their respective owners and are shown to
            indicate the platforms FGR resells and builds upon.
          </p>
        </div>
      </section>

      {/* Markets */}
      <section className="section">
        <div className="container">
          <div className="markets" >
            <div>
              <div className="t-label reveal" style={{ marginBottom: 18 }}>Where we operate</div>
              <h2 className="t-h2 reveal reveal-d1">Live across African markets</h2>
              <p className="t-large reveal reveal-d2" style={{ marginTop: 16 }}>
                Our content services are accessible today through carrier short-codes, with a delivery
                model designed to scale into new operators and territories quickly.
              </p>
              <div className="reveal reveal-d3" style={{ marginTop: 26, display: "flex", gap: 28, flexWrap: "wrap" }}>
                {[
                  { icon: Globe2, k: "Markets", v: "South Africa · Kenya" },
                  { icon: ShieldCheck, k: "Access", v: "WAP · USSD short-codes" },
                ].map((m) => (
                  <div key={m.k} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ width: 44, height: 44, borderRadius: 12, background: "var(--gold-light)", border: "1px solid var(--gold-border)", display: "grid", placeItems: "center", color: "var(--gold-text)" }}>
                      <m.icon size={20} />
                    </span>
                    <div>
                      <div className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>{m.k}</div>
                      <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 15.5 }}>{m.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-d2">
              <div className="card" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(135deg, var(--navy-deep), var(--navy))", padding: 36, color: "#fff" }}>
                  <h3 style={{ color: "#fff", fontFamily: "'Sora',sans-serif", fontWeight: 700, fontSize: 20 }}>
                    Become a partner
                  </h3>
                  <p style={{ marginTop: 12, color: "rgba(255,255,255,0.78)", fontSize: 14.5, lineHeight: 1.7 }}>
                    Operators, content owners and technology providers — let&apos;s explore how a Formal Grand
                    Resources integration can grow engagement and revenue on your network.
                  </p>
                  <Link href="/contact" className="btn btn-gold" style={{ marginTop: 22 }}>
                    Talk to our team <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .tech-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; max-width: 720px; margin-inline: auto; }
        .markets { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: center; }
        @media (max-width: 980px) {
          .pillar-grid { grid-template-columns: 1fr; }
          .markets { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 520px) { .tech-grid { grid-template-columns: 1fr; } }
      `}</style>
    </>
  );
}
