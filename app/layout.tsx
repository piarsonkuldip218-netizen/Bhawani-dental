import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} – ${clinic.tagline}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: clinic.keywords,
  authors: [{ name: clinic.name }],
  openGraph: {
    title: `${clinic.name} – ${clinic.tagline}`,
    description: clinic.description,
    type: "website",
    locale: "en_IN",
    siteName: clinic.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} – ${clinic.tagline}`,
    description: clinic.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
