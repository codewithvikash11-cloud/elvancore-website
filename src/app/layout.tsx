import type { Metadata } from "next";
import { Inter, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SchemaMarkup } from "../components/SchemaMarkup";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Elvancore Software Solutions | AI & Enterprise Development",
  description: "We build enterprise applications, SaaS platforms, AI systems, mobile apps, cloud infrastructure, and digital transformation solutions for businesses worldwide.",
  keywords: "AI Development Company USA, Software Development Company USA, Custom Software Development, Enterprise Software Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${inter.variable} ${manrope.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>
          <Header />
          <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
