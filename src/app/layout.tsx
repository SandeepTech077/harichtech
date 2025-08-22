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
  title: "Harichtech | Digital Product Development Company",
  description:
    "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, // default favicon
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  openGraph: {
    title: "Harichtech | Digital Product Development Company",
    description:
      "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
    url: "https://yourdomain.com",
    siteName: "Harichtech",
    images: [
      {
        url: "/og-image.png", // put an image in /public for social media preview
        width: 1200,
        height: 630,
        alt: "Harichtech Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harichtech | Digital Product Development Company",
    description:
      "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
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
