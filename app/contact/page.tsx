import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { COMPANY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with Formal Grand Resources — ${COMPANY.address}. Phone ${COMPANY.phone}, email ${COMPANY.email}.`,
};

const DETAILS = [
  { icon: MapPin, label: "Address", value: COMPANY.address, href: "https://maps.google.com/?q=47+Meadow+Avenue+Equestria+Pretoria" },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneHref}` },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: Globe, label: "Website", value: COMPANY.website },
  { icon: Clock, label: "Office hours", value: COMPANY.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let's talk about your next integration."
        intro="Whether you're a mobile operator, a brand or a content owner, our team is ready to help you launch carrier-ready content and engagement services."
      />

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="contact-grid">
            {/* Details */}
            <div>
              <div className="reveal" style={{ display: "grid", gap: 18 }}>
                {DETAILS.map((d) => {
                  const Inner = (
                    <div className="card" style={{ padding: "20px 22px", display: "flex", gap: 16, alignItems: "center" }}>
                      <span style={{ width: 46, height: 46, borderRadius: 12, background: "var(--navy)", display: "grid", placeItems: "center", color: "var(--gold)", flexShrink: 0 }}>
                        <d.icon size={20} strokeWidth={1.8} />
                      </span>
                      <div>
                        <div className="t-small" style={{ textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
                          {d.label}
                        </div>
                        <div style={{ marginTop: 3, fontSize: 15, fontWeight: 500, color: "var(--text-1)" }}>{d.value}</div>
                      </div>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {Inner}
                    </a>
                  ) : (
                    <div key={d.label}>{Inner}</div>
                  );
                })}
              </div>

              {/* Map */}
              <div className="reveal frame" style={{ marginTop: 18, aspectRatio: "16/10" }}>
                <iframe
                  title="Formal Grand Resources office location in Equestria, Pretoria"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=28.30%2C-25.78%2C28.36%2C-25.74&layer=mapnik&marker=-25.76%2C28.33"
                  style={{ width: "100%", height: "100%", border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div className="reveal reveal-d1">
              <h2 className="t-h3" style={{ marginBottom: 18 }}>Send us a message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 48px; align-items: start; }
        @media (max-width: 980px) { .contact-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </>
  );
}
