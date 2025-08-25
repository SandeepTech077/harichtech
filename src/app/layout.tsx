import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/Layouts/Header/Header";
import Footer from "@/Layouts/Footer/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harichtech.com"),
  title: {
    default: "Harich Tech",
    template: "%s | Harichtech"
  },
  description:
    "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
  keywords: [
    "digital product development",
    "web development",
    "mobile app development",
    "UI/UX design",
    "startup solutions",
    "custom software",
    "Harichtech"
  ],
  authors: [{ name: "Harichtech" }],
  creator: "Harichtech",
  publisher: "Harichtech",
  
  // Enhanced favicon configuration
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }, 
    ],
  },

  openGraph: {
    title: "Harichtech | Digital Product Development Company",
    description:
      "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
    url: "https://harichtech.com", 
    siteName: "Harichtech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Harichtech - Digital Product Development Company",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Enhanced Twitter configuration
  twitter: {
    card: "summary_large_image",
    title: "Harich Tech ",
    description:
      "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
    images: ["/og-image.png"],
    creator: "@harichtech", // Add your Twitter handle if you have one
  },

  // Additional metadata for better SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },


};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <head>
        {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />

        {/* Preconnect to Google Fonts for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Harich Tech",
              url: "https://harichtech.com",
              logo: "https://harichtech.com/logo.png", // make sure logo.png exists in /public
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourpage",
                "https://twitter.com/harichtech",
              ],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="font-nunito antialiased bg-white text-gray-900 min-h-screen"
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}