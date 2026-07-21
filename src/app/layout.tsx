import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/app/providers";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlanVisitModal } from "@/components/modals/PlanVisitModal";
import { PrayerRequestModal } from "@/components/modals/PrayerRequestModal";
import { SearchModal } from "@/components/modals/SearchModal";
import { FloatingChurchBot } from "@/components/chat/FloatingChurchBot";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Offinso, Kumasi, Ghana`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `Welcome to ${siteConfig.name} located at ${siteConfig.address} under the leadership of ${siteConfig.seniorPastor}. Join our church family for vibrant worship, biblical teaching, and warm community.`,
  openGraph: {
    title: `${siteConfig.name} | Offinso, Kumasi, Ghana`,
    description: `A welcoming church family located at ${siteConfig.address} led by ${siteConfig.seniorPastor}. Established April 9, 2019.`,
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": siteConfig.name,
              "alternateName": siteConfig.shortName,
              "description": `${siteConfig.name} is a vibrant Assemblies of God Church located at ${siteConfig.address} led by ${siteConfig.seniorPastor}. Established April 9, 2019.`,
              "founder": {
                "@type": "Person",
                "name": siteConfig.seniorPastor
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Offinso Toll Booth, Main Cathedral Highway",
                "addressLocality": "Offinso",
                "addressRegion": "Kumasi, Ashanti Region",
                "addressCountry": "Ghana"
              },
              "telephone": siteConfig.phone,
              "email": siteConfig.email,
              "openingHours": "Su 09:00-12:30",
              "url": "https://church-website.com"
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-canvas text-body flex flex-col antialiased">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <PlanVisitModal />
          <PrayerRequestModal />
          <SearchModal />
          <FloatingChurchBot />
        </Providers>
      </body>
    </html>
  );
}
