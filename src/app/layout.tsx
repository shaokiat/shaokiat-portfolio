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
  title: "Shao Kiat | Data Scientist",
  description: "Portfolio of Shao Kiat, a seasoned Data Scientist with a passion for AI Engineering. Showcasing projects in Generative AI, Data Science, and Sales Engineering.",
  keywords: ["Data Scientist", "AI Engineer", "Sales Engineer", "Portfolio", "Machine Learning", "Generative AI", "Next.js"],
  icons: {
    icon: `${basePath}/icon.svg`,
  },
  openGraph: {
    title: "Shao Kiat | AI & Data Science Portfolio",
    description: "Bridging technical depth with business strategy. Explore my projects in AI, Data Science, and Engineering.",
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
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

