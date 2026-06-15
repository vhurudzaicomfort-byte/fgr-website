"use client";
import { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";
const ThemeCtx = createContext<{ theme: Theme; toggle: () => void }>({
  theme: "light",
  toggle: () => {},
});

export const useTheme = () => useContext(ThemeCtx);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = (localStorage.getItem("fgr-theme") as Theme | null) ?? null;
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initial = stored ?? prefers;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only init from localStorage/matchMedia
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("fgr-theme", next);
      return next;
    });
  }, []);

  return <ThemeCtx.Provider value={{ theme, toggle }}>{children}</ThemeCtx.Provider>;
}
