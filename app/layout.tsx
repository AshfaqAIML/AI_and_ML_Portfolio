// app/layout.tsx
import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { ScrollProgressBar } from "@/components/layout/ScrollProgressBar";
import { BackToTop } from "@/components/layout/BackToTop";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { CommandPalette } from "@/components/layout/CommandPalette";
import { site } from "@/data/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.url),
  title: site.seo.title,
  description: site.seo.description,
  keywords: site.seo.keywords,
  authors: [{ name: site.name, url: site.social.github }],
  creator: site.name,
  icons: {
    icon: "/favicon.ico",
    apple: "/images/profile.png",
  },
  openGraph: {
    type: "website",
    url: site.seo.url,
    title: site.seo.title,
    description: site.seo.description,
    siteName: `${site.name} — AI/ML Engineer Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.seo.url },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    url: site.seo.url,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: site.location },
    sameAs: [site.social.github, site.social.linkedin],
    knowsAbout: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Vision Transformers",
      "Explainable AI",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <LoadingScreen />
          <ScrollProgressBar />
          <CustomCursor />
          <CommandPalette />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
