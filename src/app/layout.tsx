import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Shao Kiat | Forward Deployed Engineer",
  description:
    "Shao Kiat is a forward deployed / solutions engineer focused on AI. AI engineer at Micron shipping production ML and LLM systems on GCP, from stakeholder discovery to deployed infrastructure.",
  keywords: [
    "Forward Deployed Engineer",
    "Solutions Engineer",
    "AI Engineer",
    "Data Scientist",
    "LLM",
    "Generative AI",
    "GCP",
    "Portfolio",
  ],
  icons: {
    icon: `${basePath}/icon.svg`,
  },
  openGraph: {
    title: "Shao Kiat | Forward Deployed Engineer · AI",
    description:
      "I build AI that makes it to production. Discovery to deployment: ML, LLMs and cloud infrastructure.",
    url: "https://shaokiat.github.io/shaokiat-portfolio",
    siteName: "Shao Kiat Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
