"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import FgrLogo from "./FgrLogo";
import { useTheme } from "./ThemeProvider";
import { NAV } from "@/lib/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close menus on route change
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: scrolled ? "color-mix(in srgb, var(--bg) 86%, transparent)" : "transparent",
        backdropFilter: scrolled ? "saturate(180%) blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <a
        href="#main"
        style={{
          position: "absolute",
          left: -9999,
          top: 8,
          background: "var(--navy)",
          color: "#fff",
          padding: "8px 14px",
          borderRadius: 8,
          zIndex: 200,
        }}
        onFocus={(e) => (e.currentTarget.style.left = "12px")}
        onBlur={(e) => (e.currentTarget.style.left = "-9999px")}
      >
        Skip to content
      </a>

      <nav
        className="container"
        aria-label="Primary"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 74 }}
      >
        <Link href="/" aria-label="Formal Grand Resources — home" style={{ color: "var(--text-1)" }}>
          <FgrLogo />
        </Link>

        {/* Desktop nav */}
        <ul
          className="nav-desktop"
          style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none" }}
        >
          {NAV.map((item) => (
            <li
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item.children && setOpenGroup(item.label)}
              onMouseLeave={() => setOpenGroup(null)}
            >
              <Link
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "9px 14px",
                  borderRadius: 99,
                  fontSize: 14,
                  fontWeight: 500,
                  color: isActive(item.href) ? "var(--text-1)" : "var(--text-2)",
                  background: isActive(item.href) ? "var(--navy-light)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    size={14}
                    style={{
                      transition: "transform 0.2s",
                      transform: openGroup === item.label ? "rotate(180deg)" : "none",
                    }}
                  />
                )}
              </Link>

              {item.children && openGroup === item.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    paddingTop: 10,
                    minWidth: 280,
                  }}
                >
                  <ul
                    style={{
                      listStyle: "none",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      boxShadow: "var(--shadow-lg)",
                      padding: 8,
                    }}
                  >
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          style={{
                            display: "block",
                            padding: "10px 14px",
                            borderRadius: 10,
                            fontSize: 13.5,
                            color: "var(--text-2)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "var(--navy-light)";
                            e.currentTarget.style.color = "var(--text-1)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "var(--text-2)";
                          }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button
            onClick={toggle}
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            style={{
              width: 38,
              height: 38,
              borderRadius: 99,
              display: "grid",
              placeItems: "center",
              color: "var(--text-2)",
              border: "1px solid var(--border-strong)",
            }}
          >
            {theme === "light" ? <Moon size={17} /> : <Sun size={17} />}
          </button>

          <Link href="/contact" className="btn btn-gold btn-sm nav-cta">
            Partner with us <ArrowRight size={15} />
          </Link>

          <button
            className="nav-burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              display: "none",
              placeItems: "center",
              color: "var(--text-1)",
              border: "1px solid var(--border-strong)",
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="mobile-drawer"
          style={{
            position: "fixed",
            inset: "74px 0 0 0",
            background: "var(--bg)",
            borderTop: "1px solid var(--border)",
            overflowY: "auto",
            padding: "20px",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map((item) => (
              <li key={item.label}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link
                    href={item.href}
                    style={{
                      flex: 1,
                      padding: "14px 8px",
                      fontSize: 17,
                      fontWeight: 600,
                      fontFamily: "'Sora', sans-serif",
                      color: isActive(item.href) ? "var(--gold-text)" : "var(--text-1)",
                    }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label={`Toggle ${item.label} submenu`}
                      onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      style={{ padding: 12, color: "var(--text-2)" }}
                    >
                      <ChevronDown
                        size={18}
                        style={{
                          transition: "transform 0.2s",
                          transform: openGroup === item.label ? "rotate(180deg)" : "none",
                        }}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.label && (
                  <ul
                    style={{
                      listStyle: "none",
                      paddingLeft: 12,
                      marginBottom: 8,
                      borderLeft: "2px solid var(--gold-border)",
                    }}
                  >
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <Link
                          href={c.href}
                          style={{ display: "block", padding: "11px 12px", fontSize: 15, color: "var(--text-2)" }}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="btn btn-gold btn-lg"
            style={{ width: "100%", marginTop: 18 }}
          >
            Partner with us <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: grid !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </header>
  );
}
