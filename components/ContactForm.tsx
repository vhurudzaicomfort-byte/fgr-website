"use client";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/lib/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    const next: Record<string, string> = {};
    if (!name) next.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!message) next.message = "Please add a short message.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    const subj = encodeURIComponent(subject || `Website enquiry from ${name}`);
    // Compose an email to FGR — works with the visitor's mail client.
    window.location.href = `mailto:${COMPANY.email}?subject=${subj}&body=${body}`;
    setSent(true);
    form.reset();
  }

  if (sent) {
    return (
      <div className="card" style={{ padding: 40, textAlign: "center" }}>
        <span style={{ width: 60, height: 60, borderRadius: 99, background: "var(--gold-light)", display: "grid", placeItems: "center", margin: "0 auto" }}>
          <CheckCircle2 size={30} style={{ color: "var(--gold-text)" }} />
        </span>
        <h3 className="t-h3" style={{ marginTop: 20 }}>Thank you — your message is ready to send.</h3>
        <p className="t-body" style={{ marginTop: 10 }}>
          Your email client should have opened with your enquiry. If it didn&apos;t, email us directly at{" "}
          <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--gold-text)", fontWeight: 600 }}>
            {COMPANY.email}
          </a>.
        </p>
        <button className="btn btn-secondary" style={{ marginTop: 22 }} onClick={() => setSent(false)}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="card" style={{ padding: "32px 30px" }} onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <Field label="Your name" name="name" error={errors.name} required />
        <Field label="Your email" name="email" type="email" error={errors.email} required />
      </div>
      <Field label="Subject" name="subject" />
      <Field label="Your message" name="message" textarea error={errors.message} required />
      <button type="submit" className="btn btn-gold btn-lg" style={{ marginTop: 8, width: "100%" }}>
        Send message <Send size={16} />
      </button>
      <p className="t-small" style={{ marginTop: 14, textAlign: "center" }}>
        We typically respond within one business day, {COMPANY.hours.split("·")[0].trim()}.
      </p>

      <style>{`
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        @media (max-width: 560px) { .form-grid { grid-template-columns: 1fr; } }
        .fld-input, .fld-area {
          width: 100%; padding: 13px 15px; border-radius: var(--radius-sm);
          border: 1px solid var(--border-strong); background: var(--bg);
          color: var(--text-1); font-size: 14.5px; font-family: inherit;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .fld-area { min-height: 140px; resize: vertical; }
        .fld-input:focus, .fld-area:focus {
          border-color: var(--gold); box-shadow: 0 0 0 3px var(--gold-light); outline: none;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = false,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  error?: string;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <label htmlFor={name} style={{ display: "block", fontSize: 13, fontWeight: 600, marginBottom: 7, color: "var(--text-1)" }}>
        {label} {required && <span style={{ color: "var(--gold-text)" }}>*</span>}
      </label>
      {textarea ? (
        <textarea id={name} name={name} className="fld-area" aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} />
      ) : (
        <input id={name} name={name} type={type} className="fld-input" aria-invalid={!!error} aria-describedby={error ? `${name}-err` : undefined} />
      )}
      {error && (
        <span id={`${name}-err`} role="alert" style={{ display: "block", marginTop: 6, fontSize: 12.5, color: "#C0392B" }}>
          {error}
        </span>
      )}
    </div>
  );
}
