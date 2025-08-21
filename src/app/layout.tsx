import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import Header from "@/Layouts/Header/Header";
import Footer from "@/Layouts/Footer/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'], // Extended weight range
  variable: '--font-nunito',
  display: 'swap', // Improves font loading performance
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
  icons: {
    icon: [
      { url: "/Logo/small-logo.svg" },
      { url: "/Logo/small-logo.svg", sizes: "32x32", type: "image/png" },
      { url: "/Logo/small-logo.svg", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Logo/small-logo.svg",
  },
  manifest: "/site.webmanifest",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Viewport meta tag for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/Logo/small-logo.svg" as="image" type="image/svg+xml" />
      </head>
      <body 
        suppressHydrationWarning={true}
        className="font-nunito antialiased bg-white text-gray-900 min-h-screen"
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        
        {/* Skip to main content for accessibility */}
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