import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Scorpio Creative Agency - From Space to Digital Harmony",
  description: "We create extraordinary digital experiences that launch your brand into the digital universe. Full-service creative agency specializing in branding, design, and digital marketing.",
  keywords: "creative agency, digital design, branding, web development, digital marketing, UI/UX design",
  authors: [{ name: "Scorpio Creative Agency" }],
  openGraph: {
    title: "Scorpio Creative Agency",
    description: "From Space to Digital Harmony",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
