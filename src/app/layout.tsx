import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Header from "@/Layouts/Header/Header";
import Footer from "@/Layouts/Footer/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://harichtech.com"),
  title: {
    default: "Harich Tech",
    template: "%s | Harich Tech"
  },
  description:
    "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
  keywords: [
    "digital product development",
    "web development",
    "mobile development", 
    "custom software",
    "startup solutions",
    "UI/UX design",
    "scalable architecture",
  ],
  authors: [{ name: "Harich Tech" }],
  creator: "Harich Tech",
  publisher: "Harich Tech",
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
  // Using your converted logo files
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harichtech.com", 
    siteName: "Harich Tech",
    title: "Harich Tech - Digital Product Development",
    description:
      "Custom web and mobile solutions for startups and businesses. Cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Harich Tech - Digital Product Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harich Tech - Digital Product Development",
    description: "Custom web and mobile solutions for startups and businesses.",
    images: ["/og-image.jpg"],
    creator: "@harichtech",
  },
  alternates: {
    canonical: "https://harichtech.com",
  },
  category: "technology",
};

// Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Harich Tech",
  "url": "https://harichtech.com",
  "logo": "/favicon-32x32.png", // Update this path to your actual logo
  "description": "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shilp 3, 3rd Floor, Sindhu bhavan road, above bajarang grocery, PRL Colony, Bodakdev",
    "addressLocality": "Ahmedabad",
    "addressRegion": "Gujarat",
    "postalCode": "380059",
    "addressCountry": "IN"
  },
  "telephone": "082008 65684",
  "sameAs": [
    "https://www.linkedin.com/company/harich-tech",
    "https://www.facebook.com/harichtechnologies",
    "https://www.instagram.com/harichtech"
  ],
  "serviceArea": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "areaServed": [
    {
      "@type": "Country",
      "name": "India"
    },
    {
      "@type": "Country", 
      "name": "United States"
    }
  ],
  "knowsAbout": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Product Development",
    "Custom Software Solutions"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Explicit favicon links using your converted logo */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Keep your original SVG for other uses */}
        <link rel="preload" href="/Logo/small-logo.svg" as="image" type="image/svg+xml" />
        
        {/* Organization Structured Data */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body 
        suppressHydrationWarning={true}
        className="font-nunito antialiased bg-white text-gray-900 min-h-screen"
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
        
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}