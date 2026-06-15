import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Digital Content Services, Digital Media (DSP, SSP, DMP), Cloud Computing, Interactive Voice Response, Project Management and CSI — the full FGR capability stack.",
};

const IMG: Record<string, { src: string; alt: string }> = {
  content: { src: "/images/youth-trendy.webp", alt: "Young people enjoying mobile entertainment on their phones" },
  media: { src: "/images/vr-presentation.webp", alt: "A team reviewing digital media analytics on screen" },
  cloud: { src: "/images/woman-in-tech.webp", alt: "A technologist working with cloud infrastructure" },
  ivr: { src: "/images/man-mobile-outdoors.webp", alt: "A man making a call on his mobile phone outdoors" },
  project: { src: "/images/office-professional.webp", alt: "Professionals collaborating on project delivery" },
  csi: { src: "/images/siblings.webp", alt: "Children in a community the company invests in" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="Capabilities"
        title="Services that span content, media, cloud and delivery."
        intro="A capability-based stack built for operators, brands and content owners — from subscriber-facing mobile content to the programmatic media, cloud and project management behind it."
      />

      {/* Quick nav */}
      <section style={{ paddingBottom: 8 }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="chip"
                style={{ textDecoration: "none" }}
              >
                <Icon name={s.icon} size={14} />
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const img = IMG[s.id];
        const flip = i % 2 === 1;
        return (
          <section key={s.id} id={s.id} className="section" style={{ scrollMarginTop: 90, background: flip ? "var(--bg-2)" : "var(--bg)" }}>
            <div className="container">
              <div className="svc-detail" style={{ direction: flip ? "rtl" : "ltr" }}>
                <div style={{ direction: "ltr" }}>
                  <div className="frame reveal" style={{ aspectRatio: "4/3" }}>
                    <Image src={img.src} alt={img.alt} fill sizes="(max-width: 980px) 100vw, 520px" style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <div style={{ direction: "ltr" }}>
                  <span style={{ width: 52, height: 52, borderRadius: 14, background: "var(--navy)", display: "grid", placeItems: "center", color: "var(--gold)" }} className="reveal">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <h2 className="t-h2 reveal reveal-d1" style={{ marginTop: 20 }}>
                    {s.name}
                  </h2>
                  <p className="t-large reveal reveal-d2" style={{ marginTop: 16 }}>
                    {s.body}
                  </p>
                  {s.points && (
                    <ul className="reveal reveal-d3" style={{ listStyle: "none", marginTop: 24, display: "grid", gap: 14 }}>
                      {s.points.map((p) => (
                        <li key={p} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ width: 24, height: 24, borderRadius: 99, background: "var(--gold-light)", display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                            <Check size={14} style={{ color: "var(--gold-text)" }} />
                          </span>
                          <span className="t-body" style={{ color: "var(--text-1)" }}>{p}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Products link */}
      <section className="section-tight">
        <div className="container">
          <div className="reveal card" style={{ padding: "32px 30px", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h3 className="t-h3">See the content services in action</h3>
              <p className="t-body" style={{ marginTop: 8 }}>
                Explore Game-O-Mania, HappyTube and our competition platforms.
              </p>
            </div>
            <Link href="/products" className="btn btn-primary">
              View products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .svc-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        @media (max-width: 980px) {
          .svc-detail { grid-template-columns: 1fr !important; direction: ltr !important; gap: 32px; }
          .svc-detail .frame { max-width: 560px; }
        }
      `}</style>
    </>
  );
}
