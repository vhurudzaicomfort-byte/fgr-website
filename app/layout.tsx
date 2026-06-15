import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import RevealInit from "@/components/RevealInit";
import ScrollProgress from "@/components/ScrollProgress";
import GrainOverlay from "@/components/GrainOverlay";

export const metadata: Metadata = {
  metadataBase: new URL("https://formalgrandresources.co.za"),
  title: {
    default: "Formal Grand Resources — Telco-Integrated Digital Content for Africa",
    template: "%s | Formal Grand Resources",
  },
  description:
    "Formal Grand Resources is a Technology, Media & Telecom provider delivering mobile games, mobile video, programmatic digital media, cloud and IVR through carrier-ready, reskinnable portals across Africa.",
  keywords: [
    "mobile VAS",
    "Game-O-Mania",
    "mobile games",
    "mobile video",
    "MNO integration",
    "DSP SSP DMP",
    "cloud computing",
    "South Africa",
    "digital content",
  ],
  openGraph: {
    title: "Formal Grand Resources — Telco-Integrated Digital Content for Africa",
    description:
      "Mobile games, mobile video, programmatic media, cloud and IVR — carrier-ready and reskinnable to any operator brand.",
    url: "https://formalgrandresources.co.za",
    siteName: "Formal Grand Resources",
    type: "website",
    locale: "en_ZA",
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
          <GrainOverlay />
          <ScrollProgress />
          <Navigation />
          <main id="main">{children}</main>
          <Footer />
          <RevealInit />
        </ThemeProvider>
      </body>
    </html>
  );
}
