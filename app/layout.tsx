import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { clinic, contact, doctor } from "@/lib/data";

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

const fullAddress = `${contact.address.line1}, ${contact.address.line2}, ${contact.address.city}, ${contact.address.state} ${contact.address.pincode}`;

export const metadata: Metadata = {
  title: {
    default: `${clinic.name} \u2013 ${clinic.tagline}`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  keywords: clinic.keywords,
  authors: [{ name: clinic.name }],
  applicationName: clinic.name,
  category: "Health & Medical",
  openGraph: {
    title: `${clinic.name} \u2013 ${clinic.tagline}`,
    description: clinic.description,
    type: "website",
    locale: "en_IN",
    siteName: clinic.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinic.name} \u2013 ${clinic.tagline}`,
    description: clinic.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-AS",
    "geo.placename": `${contact.address.city}, ${contact.address.state}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Local business structured data — boosts Google local search visibility
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  description: clinic.description,
  image: undefined,
  telephone: contact.phone,
  email: contact.email,
  priceRange: "\u20B9\u20B9",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${contact.address.line1}, ${contact.address.line2}`,
    addressLocality: contact.address.city,
    addressRegion: contact.address.state,
    postalCode: contact.address.pincode,
    addressCountry: "IN",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "10:00",
    closes: "19:00",
  },
  founder: {
    "@type": "Person",
    name: doctor.name,
    jobTitle: doctor.specialization,
    description: `${doctor.qualification} \u2013 ${doctor.pastRole}`,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "150",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
