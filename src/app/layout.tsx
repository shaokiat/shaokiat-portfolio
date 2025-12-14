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

export const metadata: Metadata = {
  title: "Shao Kiat | Data Scientist",
  description: "Portfolio of Shao Kiat, a seasoned Data Scientist with a passion for AI Engineering.",
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

