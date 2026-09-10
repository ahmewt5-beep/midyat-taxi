import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const SITE_URL = "https://www.midyattaksi.tr";
const SITE_NAME = "Midyat - Midyat Taksi";
const PHONE = "+905466832317";

export const metadata: Metadata = {
  // ── Temel Meta Etiketleri ──────────────────────────────────────────────────
  title: {
    default: "Midyat Taksi | Midyat - 7/24 Güvenilir Ulaşım | 0546 683 23 17",
    template: "%s | Midyat Midyat Taksi",
  },
  description:
    "Midyat'ta 7/24 güvenilir, konforlu ve uygun fiyatlı taksi hizmeti. Mardin Havalimanı transferi, VIP araç, şehirlerarası seyahat. Hemen ara: 0546 683 23 17. Midyat Taksi - Metin Kaptan.",
  keywords: [
    "Midyat Taksi",
    "GoMidyat",
    "Midyat taksi numarası",
    "Midyat taksi telefon",
    "Midyat 7/24 taksi",
    "Midyat VIP transfer",
    "Mardin Havalimanı Midyat transfer",
    "Midyat şehirlerarası taksi",
    "Midyat özel araç",
    "Midyat Metin Kaptan taksi",
    "Midyat turizm transferi",
    "Mor Gabriel taksi",
    "Dara Antik Kenti taksi",
    "Hasankeyf taksi",
    "Beyazsu taksi",
    "Nusaybin taksi",
    "Mardin taksi",
    "Midyat gece taksi",
    "Midyat taksi ücret",
    "Midyat araç kiralama",
  ],
  authors: [{ name: "Metin Kaptan - Midyat", url: SITE_URL }],
  creator: "GoMidyat",
  publisher: "GoMidyat",

  // ── Canonical & Alternatifler ─────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
    },
  },

  // ── Open Graph (Facebook, WhatsApp önizleme) ───────────────────────────────
  openGraph: {
    title: "Midyat Taksi | Midyat - 7/24 Hizmet | 0546 683 23 17",
    description:
      "Midyat'ın en güvenilir taksi hizmeti. VIP araçlar, Havalimanı transferi, turistik turlar. 7/24 aktif. Hemen ara!",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Midyat - Midyat Taksi 7/24 Hizmet",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  // ── Twitter / X Kartı ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Midyat - Midyat Taksi 7/24",
    description: "Midyat'ın en güvenilir taksi hizmeti. VIP araçlar, havalimanı transferi. Hemen ara: 0546 683 23 17",
    images: ["/og-image.jpg"],
  },

  // ── Robot Direktifleri ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Google Search Console Doğrulama ───────────────────────────────────────
  // Search Console'dan aldığınız verification kodunu buraya yapıştırın:
  // verification: { google: "BURAYA_KODUNUZU_YAPIŞTIRIN" },

  // ── Kategori & İkon ───────────────────────────────────────────────────────
  category: "transportation",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ── JSON-LD: LocalBusiness (yerel işletme kartı) ───────────────────────────
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["TaxiService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: "Midyat - Midyat Taksi",
    alternateName: ["Midyat Taksi", "Metin Kaptan Taksi"],
    description:
      "Midyat ve çevresinde 7/24 güvenilir, konforlu taksi ve VIP transfer hizmeti. Mardin Havalimanı, Mor Gabriel, Dara Antik Kenti ve tüm şehirlerarası rotalar.",
    url: SITE_URL,
    telephone: PHONE,
    email: "midyattaksi@gmail.com",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    image: [`${SITE_URL}/og-image.jpg`],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Yeni Mah, Cumhuriyet Blv. No:10",
      addressLocality: "Midyat",
      addressRegion: "Mardin",
      postalCode: "47500",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.4222",
      longitude: "41.3734",
    },
    hasMap: "https://maps.google.com/?q=Midyat+Taksi+Metin+Kaptan",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "₺₺",
    paymentAccepted: "Cash, Bank Transfer",
    currenciesAccepted: "TRY",
    areaServed: [
      { "@type": "City", name: "Midyat" },
      { "@type": "City", name: "Mardin" },
      { "@type": "City", name: "Nusaybin" },
      { "@type": "City", name: "Cizre" },
      { "@type": "City", name: "Şırnak" },
    ],
    serviceType: ["Taksi", "VIP Transfer", "Havalimanı Transferi", "Şehirlerarası Ulaşım", "Turistik Tur"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "179",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Hira Despina" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Sürekli taksi kullanan biri olarak en rahat ettiğim yer diyebilirim. Ailecek güvenle kullanıyoruz.",
        datePublished: "2024-08-01",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Masal Demir" },
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody: "Burda mahsur kaldım, Metin Abi Allah razı olsun çıkarttı bizi. Tercihimiz sizsiniz.",
        datePublished: "2024-11-01",
      },
    ],
    sameAs: [
      `https://wa.me/905466832317`,
      "https://maps.google.com/?q=Midyat+Taksi",
    ],
  };

  // ── JSON-LD: SearchAction — Google Sitelinks Arama Kutusu ─────────────────
  // Siteyi Google'a kaydettikten sonra bu schema, arama sonuçlarında
  // sitenizin altında bir arama kutusu gösterir.
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: "Midyat Taksi - 7/24 Güvenilir Ulaşım Hizmeti",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/sss?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "tr-TR",
  };

  // ── JSON-LD: FAQPage — SSS snippet'ı ─────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Midyat Taksi'nin telefon numarası nedir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Midyat - Midyat Taksi'ye 0546 683 23 17 numaralı telefondan 7/24 ulaşabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Midyat Taksi çalışma saatleri nelerdir?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "7 gün 24 saat kesintisiz hizmet vermekteyiz. Gece veya gündüz dilediğiniz saatte bizi arayabilirsiniz.",
        },
      },
      {
        "@type": "Question",
        name: "Mardin Havalimanı'na transfer yapıyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, Mardin Havalimanı başta olmak üzere Diyarbakır, Şırnak ve çevre illere güvenilir VIP transfer hizmetimiz bulunmaktadır.",
        },
      },
      {
        "@type": "Question",
        name: "Mor Gabriel Manastırı ve turistik turlara gidiyor musunuz?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Evet, Mor Gabriel, Dara Antik Kenti, Beyazsu ve Hasankeyf gibi tarihi ve turistik bölgelere özel tur ve şoförlük hizmetimiz mevcuttur.",
        },
      },
      {
        "@type": "Question",
        name: "Midyat taksi ücretleri ne kadar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ücretlerimiz güzergaha göre değişmektedir. Kesin fiyat teklifi için 0546 683 23 17 numaralı hattı arayabilirsiniz.",
        },
      },
    ],
  };

  // ── JSON-LD: BreadcrumbList ────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hakkımızda",
        item: `${SITE_URL}/hakkimizda`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sıkça Sorulan Sorular",
        item: `${SITE_URL}/sss`,
      },
    ],
  };

  return (
    <html lang="tr" className="scroll-smooth dark">
      <head>
        {/* ── Geo / Konum Meta Etiketleri (yerel SEO) ── */}
        <meta name="geo.region" content="TR-47" />
        <meta name="geo.placename" content="Midyat, Mardin, Türkiye" />
        <meta name="geo.position" content="37.4222;41.3734" />
        <meta name="ICBM" content="37.4222, 41.3734" />

        {/* ── Dil ve Bölge ── */}
        <link rel="alternate" hrefLang="tr" href={SITE_URL} />
        <link rel="canonical" href={SITE_URL} />

        {/* ── Yapısal Veriler (JSON-LD) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ── Apple & PWA ── */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0A0A0C" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Midyat Taksi" />
      </head>
      <body className={`${inter.className} text-slate-100 antialiased relative pb-20 md:pb-0`}>
        {children}
      </body>
    </html>
  );
}