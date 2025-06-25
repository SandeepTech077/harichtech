import type { Metadata } from "next";
import { Nunito } from 'next/font/google'
import "./globals.css";
import  Header  from "@/Layouts/Header/Header";
import Footer from "@/Layouts/Footer/Footer";

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // add more weights if needed
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: "Harichtech",
  description:
    "Harichtech is a digital product development company specializing in custom web and mobile solutions. We help startups and businesses grow with cutting-edge technology, scalable architecture, and beautiful UI/UX design.",
  icons: {
    icon: "/Logo/Logo.svg", 
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en"  className={nunito.className}>
      <body suppressHydrationWarning={true}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>



  );

}
