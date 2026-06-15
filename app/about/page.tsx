import type { Metadata } from "next";
import Image from "next/image";
import { Check, Target, Eye, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import StatCounter from "@/components/StatCounter";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { STATS, SERVICES, FAQ, COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Formal Grand Resources is a premium Technology, Media & Telecom provider delivering innovative digital solutions to African businesses and consumers.",
};

const VALUES = [
  {
    icon: Target,
    title: "Purpose-built for operators",
    text: "Every service is engineered to drop into a mobile network — carrier-ready, analytics-rich and reskinnable to any brand or CI.",
  },
  {
    icon: Eye,
    title: "Inclusive by design",
    text: "We build for smart and feature phones alike, so services reach the widest possible audience across African markets.",
  },
  {
    icon: ShieldCheck,
    title: "Delivered with rigour",
    text: "PMP-certified project management and clear, measurable objectives turn ambitious launches into dependable outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="Who we are"
        title="A premium Technology, Media & Telecom partner for Africa."
        intro={COMPANY.positioning}
      />

      {/* Intro split */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <div className="reveal frame" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/images/office-professional.webp"
                alt="A professional at work in a modern African office environment"
                fill
                sizes="(max-width: 980px) 100vw, 520px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <div className="t-label reveal" style={{ marginBottom: 18 }}>
                Our story
              </div>
              <h2 className="t-h2 reveal reveal-d1">
                Innovative digital solutions, delivered end to end
              </h2>
              <p className="t-large reveal reveal-d2" style={{ marginTop: 18 }}>
                Founded in {COMPANY.established}, Formal Grand Resources operates across the full
                technology, media and telecom value chain — from subscriber-facing mobile content to
                the programmatic media, cloud and project delivery that powers it.
              </p>
              <p className="t-body reveal reveal-d2" style={{ marginTop: 16 }}>
                Our expertise spans Digital Content Services, Digital Media, Cloud Computing and
                Project Management. We bring these together with trusted strategic-alliance partners to
                give clients access to the latest technologies — and to give consumers entertainment,
                information and rewards on the devices they already carry.
              </p>
              <div className="reveal reveal-d3" style={{ marginTop: 26, display: "grid", gap: 12 }}>
                {[
                  "Digital Content Services",
                  "Digital Media — DSP · SSP · DMP",
                  "Cloud Computing — PaaS · IaaS · SaaS",
                  "Project Management & CSI",
                ].map((t) => (
                  <div key={t} style={{ display: "flex", gap: 11, alignItems: "center" }}>
                    <span style={{ width: 22, height: 22, borderRadius: 99, background: "var(--gold-light)", display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Check size={13} style={{ color: "var(--gold-text)" }} />
                    </span>
                    <span className="t-body" style={{ color: "var(--text-1)", fontWeight: 500 }}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-tight bg-navy" style={{ position: "relative", overflow: "hidden" }}>
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "radial-gradient(40% 70% at 85% 0%, rgba(198,163,87,0.18), transparent 60%)" }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="stat-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`reveal reveal-d${(i % 4) + 1}`} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Sora',sans-serif", fontWeight: 800, fontSize: "clamp(36px,5.5vw,56px)", lineHeight: 1, color: "var(--gold)" }}>
                  <StatCounter value={s.value} suffix={s.suffix} />
                </div>
                <div style={{ marginTop: 12, fontSize: 14, color: "rgba(255,255,255,0.72)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Why operators & partners choose us"
            title="Standards that make launches dependable"
            align="center"
          />
          <div className="val-grid" style={{ marginTop: 52 }}>
            {VALUES.map((v, i) => (
              <div key={v.title} className={`card reveal reveal-d${i + 1}`} style={{ padding: 30 }}>
                <span style={{ width: 50, height: 50, borderRadius: 14, background: "var(--navy)", display: "grid", placeItems: "center", color: "var(--gold)" }}>
                  <v.icon size={23} strokeWidth={1.7} />
                </span>
                <h3 className="t-h3" style={{ marginTop: 20 }}>
                  {v.title}
                </h3>
                <p className="t-body" style={{ marginTop: 10 }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise quick grid */}
      <section className="section bg-soft">
        <div className="container">
          <SectionHeader eyebrow="Our expertise" title="Four disciplines, one accountable partner" />
          <div className="exp-grid" style={{ marginTop: 48 }}>
            {SERVICES.slice(0, 4).map((s, i) => (
              <div key={s.id} className={`reveal reveal-d${(i % 4) + 1}`} style={{ display: "flex", gap: 16, padding: "22px 0", borderTop: "1px solid var(--border)" }}>
                <span style={{ width: 46, height: 46, borderRadius: 12, background: "var(--gold-light)", border: "1px solid var(--gold-border)", display: "grid", placeItems: "center", color: "var(--gold-text)", flexShrink: 0 }}>
                  <Icon name={s.icon} size={21} />
                </span>
                <div>
                  <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 17 }}>{s.name}</h3>
                  <p className="t-body" style={{ marginTop: 6 }}>{s.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <SectionHeader eyebrow="FAQ" title="Questions, answered" align="center" />
          <div style={{ maxWidth: 800, margin: "48px auto 0", display: "grid", gap: 16 }}>
            {FAQ.map((f, i) => (
              <div key={f.q} className={`card reveal reveal-d${(i % 3) + 1}`} style={{ padding: "24px 26px" }}>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16.5, color: "var(--text-1)" }}>
                  {f.q}
                </h3>
                <p className="t-body" style={{ marginTop: 10 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's build something operators and audiences love"
        body="Whether you're an MNO, a brand or a content owner, we'll help you launch fast and measure everything."
      />

      <style>{`
        .about-split { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 56px; align-items: center; }
        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        .val-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .exp-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px 48px; }
        @media (max-width: 980px) {
          .about-split { grid-template-columns: 1fr; gap: 36px; }
          .about-split .frame { max-width: 520px; }
          .val-grid { grid-template-columns: 1fr; }
          .exp-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 620px) { .stat-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>
    </>
  );
}
