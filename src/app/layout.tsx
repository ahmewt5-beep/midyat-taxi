import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Midyat Taksi: Premium Ulaşım Sanatı | Metin Kaptan 7/24 Hizmet",
  description: "Midyat'ın tarihi dokusunda dürüst ve seçkin ulaşım deneyimi. Metin Kaptan ile 7/24 güvenli, konforlu ve özel transferler. Hemen Rezervasyon: 0546 683 23 17",
  keywords: ["Midyat Taksi", "Premium Midyat Ulaşım", "Özel Midyat Transfer", "Dara Antik Kenti Transfer", "Beyazsu Turistik Taksi", "Mardin Havalimanı Midyat Vip", "Midyat Gece Taksi"],
  openGraph: {
    title: "Midyat Taksi: Premium Ulaşım Sanatı | Metin Kaptan",
    description: "Midyat's premium taxi transfer service. 7/24 safe & comfortable.",
    url: "https://midyattaksi.com",
    siteName: "Midyat Taksi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Midyat Taksi Premium Vip Araçlar",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Midyat Taksi: Premium Ulaşım",
    description: "7/24 güvenilir Midyat Taksi hizmeti.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema verileri aynı kalacak, çünkü yerel işletme bilgileridir.
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Midyat Taksi 7/24 - Metin Kaptan",
    "telephone": "+905466832317",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Yeni Mah, Cumhuriyet Blv. No:10",
      "addressLocality": "Midyat",
      "addressRegion": "Mardin",
      "postalCode": "47500",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "37.422",
      "longitude": "41.376"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "179"
    }
  };

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        {/* Apple cihazlar için ikon ve tema ayarları */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0C" />
      </head>
      <body className={`${inter.className} text-slate-100 antialiased relative pb-20 md:pb-0`}>
        {/* pb-20 mobildeki yapışkan butonun içeriği kapatmaması için önemli */}
        {children}
      </body>
    </html>
  );
}