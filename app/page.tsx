import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import Icon from "@/components/Icon";
import StatCounter from "@/components/StatCounter";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { CAPABILITIES, SERVICES, STATS, PRODUCTS, COMPANY } from "@/lib/site";

const flagship = PRODUCTS.find((p) => p.flagship)!;

export default function Home() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="hero-mesh" style={{ paddingTop: 130, paddingBottom: 88, overflow: "hidden" }}>
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="chip reveal" style={{ marginBottom: 22 }}>
                <Sparkles size={14} style={{ color: "var(--gold-text)" }} /> Technology · Media · Telecom
              </div>
              <h1 className="t-hero reveal reveal-d1">
                Telco-integrated{" "}
                <span style={{ color: "var(--gold-text)" }}>digital content</span>, built for Africa.
              </h1>
              <p className="t-large reveal reveal-d2" style={{ marginTop: 24, maxWidth: 540 }}>
                {COMPANY.short} builds and operates mobile games, video and competitions delivered through
                carrier-ready portals — reskinnable to any operator brand, working across smart and
                feature phones, with comprehensive analytics built in.
              </p>
              <div
                className="reveal reveal-d3"
                style={{ marginTop: 34, display: "flex", gap: 14, flexWrap: "wrap" }}
              >
                <Link href="/contact" className="btn btn-gold btn-lg">
                  Partner / integrate with us <ArrowRight size={16} />
                </Link>
                <Link href="/products" className="btn btn-ghost btn-lg">
                  Explore products
                </Link>
              </div>
              <div
                className="reveal reveal-d4"
                style={{ marginTop: 40, display: "flex", gap: 28, flexWrap: "wrap" }}
              >
                {[
                  "MNO-integratable",
                  "Smart & feature phones",
                  "Fully reskinnable",
                ].map((t) => (
                  <div key={t} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Check size={16} style={{ color: "var(--gold-text)" }} />
                    <span style={{ fontSize: 13.5, color: "var(--text-2)", fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-d2 hero-art">
              <div className="frame" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/businesswoman-phone.webp"
                  alt="A professional in Africa engaging with mobile content on a smartphone"
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 460px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="hero-float card" aria-hidden="true">
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 12,
                      background: "var(--navy)",
                      display: "grid",
                      placeItems: "center",
                      color: "var(--gold)",
                    }}
                  >
                    <Icon name="Gamepad2" size={20} />
                  </span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, fontFamily: "'Sora',sans-serif" }}>
                      Game-O-Mania
                    </div>
                    <div style={{ fontSize: 11.5, color: "var(--text-3)" }}>3D · Android · HTML5</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Marquee ───────── */}
      <div
        className="marquee"
        style={{
          borderBlock: "1px solid var(--border)",
          background: "var(--bg-2)",
          overflow: "hidden",
          padding: "16px 0",
        }}
      >
        <div className="marquee-track" aria-hidden="true">
          {[...Array(2)].map((_, r) => (
            <div key={r} style={{ display: "flex", gap: 44, paddingRight: 44 }}>
              {[
                "Mobile Games",
                "Mobile Video",
                "Programmatic Media",
                "Cloud Computing",
                "IVR",
                "MNO Integration",
                "Reporting & Analytics",
                "Reskinnable Portals",
              ].map((t) => (
                <span
                  key={t + r}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 12,
                    fontFamily: "'Sora',sans-serif",
                    fontWeight: 600,
                    fontSize: 15,
                    color: "var(--text-2)",
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: 99, background: "var(--gold)" }} />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ───────── Capability snapshot ───────── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="What we do"
            title="A complete content & engagement platform"
            intro="One MNO-integratable stack covering games, video and competitions — with the reporting, reskinning and reach operators need to launch fast."
          />
          <div className="cap-grid" style={{ marginTop: 56 }}>
            {CAPABILITIES.map((c, i) => (
              <div key={c.title} className={`card reveal reveal-d${(i % 3) + 1}`} style={{ padding: 28 }}>
                <span
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 14,
                    background: "var(--navy-light)",
                    border: "1px solid var(--navy-border)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--navy-2)",
                  }}
                >
                  <Icon name={c.icon} size={24} />
                </span>
                <h3 className="t-h3" style={{ marginTop: 20 }}>
                  {c.title}
                </h3>
                <p className="t-body" style={{ marginTop: 10 }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Services preview ───────── */}
      <section className="section bg-soft">
        <div className="container">
          <div className="svc-head">
            <SectionHeader
              eyebrow="Capabilities"
              title="Services that span content, media & infrastructure"
              intro="From subscriber-facing content to the programmatic media and cloud that powers it."
            />
            <Link href="/services" className="btn btn-secondary reveal" style={{ flexShrink: 0 }}>
              All services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="svc-grid" style={{ marginTop: 52 }}>
            {SERVICES.map((s, i) => (
              <Link
                href={`/services#${s.id}`}
                key={s.id}
                className={`card reveal reveal-d${(i % 3) + 1}`}
                style={{ padding: 28, display: "block" }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 13,
                      background: "var(--gold-light)",
                      border: "1px solid var(--gold-border)",
                      display: "grid",
                      placeItems: "center",
                      color: "var(--gold-text)",
                    }}
                  >
                    <Icon name={s.icon} size={22} />
                  </span>
                  <ArrowRight size={18} style={{ color: "var(--text-3)" }} />
                </div>
                <h3 className="t-h3" style={{ marginTop: 20 }}>
                  {s.name}
                </h3>
                <p className="t-body" style={{ marginTop: 10 }}>
                  {s.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Featured product: Game-O-Mania ───────── */}
      <section className="section">
        <div className="container">
          <div className="feat-grid">
            <div className="reveal feat-art">
              <div className="frame" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/gamer.webp"
                  alt="A young gamer playing a mobile game on a smartphone"
                  fill
                  sizes="(max-width: 980px) 100vw, 440px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 55%, rgba(12,33,56,0.78))",
                  }}
                />
                <div style={{ position: "absolute", left: 24, right: 24, bottom: 24, color: "#fff" }}>
                  <div className="chip" style={{ background: "rgba(255,255,255,0.14)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
                    <Sparkles size={13} style={{ color: "var(--gold)" }} /> Flagship product
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="t-label reveal" style={{ marginBottom: 18 }}>
                Featured product
              </div>
              <h2 className="t-h2 reveal reveal-d1">{flagship.name}</h2>
              <p className="t-large reveal reveal-d2" style={{ marginTop: 18 }}>
                {flagship.blurb}
              </p>
              <ul
                className="reveal reveal-d3"
                style={{ listStyle: "none", marginTop: 26, display: "grid", gap: 14 }}
              >
                {flagship.features?.map((f) => (
                  <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: 99,
                        background: "var(--gold-light)",
                        display: "grid",
                        placeItems: "center",
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      <Check size={14} style={{ color: "var(--gold-text)" }} />
                    </span>
                    <span className="t-body" style={{ color: "var(--text-1)" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="reveal reveal-d4" style={{ marginTop: 32 }}>
                <Link href="/products#game-o-mania" className="btn btn-primary btn-lg">
                  See the full product <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Stats band ───────── */}
      <section className="section-tight bg-navy" style={{ position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(40% 70% at 85% 0%, rgba(198,163,87,0.18), transparent 60%), radial-gradient(40% 70% at 5% 100%, rgba(46,107,230,0.16), transparent 60%)",
          }}
        />
        <div className="container" style={{ position: "relative" }}>
          <div className="stat-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`reveal reveal-d${(i % 4) + 1}`} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Sora',sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(38px,6vw,60px)",
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>
                    <StatCounter value={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <div style={{ marginTop: 12, fontSize: 14, color: "rgba(255,255,255,0.72)", fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Ecosystem strip ───────── */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Ecosystem"
            title="Built to integrate — and trusted to deliver"
            intro="We collaborate with the industry's most trusted strategic-alliance and technology partners, and integrate across mobile networks in multiple markets."
            align="center"
          />
          <div className="eco-grid reveal" style={{ marginTop: 48 }}>
            {[
              { k: "Markets live", v: "South Africa · Kenya" },
              { k: "Cloud partners", v: "AWS · Microsoft Azure" },
              { k: "Delivery", v: "MNO-integratable portals" },
              { k: "Access", v: "WAP · USSD short-codes" },
            ].map((e) => (
              <div
                key={e.k}
                className="card"
                style={{ padding: 24, textAlign: "center" }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold-text)" }}>
                  {e.k}
                </div>
                <div style={{ marginTop: 10, fontFamily: "'Sora',sans-serif", fontWeight: 600, fontSize: 16, color: "var(--text-1)" }}>
                  {e.v}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ textAlign: "center", marginTop: 36 }}>
            <Link href="/partners" className="btn btn-ghost">
              Explore the ecosystem <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />

      <style>{`
        .hero-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 64px; align-items: center; }
        .hero-art { position: relative; }
        .hero-float {
          position: absolute; left: -22px; bottom: 36px; padding: 14px 18px;
          background: var(--surface); box-shadow: var(--shadow-lg);
        }
        .cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .svc-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .svc-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 28px; flex-wrap: wrap; }
        .feat-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 60px; align-items: center; }
        .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
        .eco-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 22px; }
        @media (max-width: 980px) {
          .hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-art { max-width: 440px; }
          .feat-grid { grid-template-columns: 1fr; gap: 40px; }
          .feat-art { max-width: 440px; order: -1; }
          .cap-grid, .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .eco-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 620px) {
          .cap-grid, .svc-grid, .stat-grid, .eco-grid { grid-template-columns: 1fr; }
          .stat-grid { grid-template-columns: repeat(2, 1fr); }
          .hero-float { left: 8px; }
        }
      `}</style>
    </>
  );
}
