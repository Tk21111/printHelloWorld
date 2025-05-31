import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate viewport export (required in Next.js 14+)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#667eea" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

export const metadata: Metadata = {
  // Basic Meta Tags
  title: "Print('Hello world')",
  description: "The Web and Game coder group that will bring your dreams into reality. Apply now!!",
  
  // Keywords for SEO
  keywords: [
    "web development", 
    "game development", 
    "coding services", 
    "programming", 
    "web design", 
    "game design", 
    "software development",
    "gamification",
    "hello world",
    "print hello world"
  ],
  
  // Authors
  authors: [{ name: "Gamification World Team" }],
  

  // Open Graph for Social Media Previews
  openGraph: {
    title: "Print( 'Hello world' )",
    description: "The Web and Game coder group that will bring your dreams into reality. Apply now!",
    url: "https://printhelloworld.xyz/", // Replace with your actual domain
    siteName: "Gamification World", 
    images: [
      {
        url: "https://printhelloworld.xyz/og-image.jpg", // Fixed: proper image URL
        width: 1200,
        height: 630,
        alt: "Print Hello World - Gamification World",
        type: "image/jpeg",
      },
    ],
    locale: "th_TH", // Thai locale as you specified
    type: "website",
  },
  

  // Additional Meta Tags
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
  
  // Application info
  applicationName: "Print Hello World",
  
  // Canonical URL - Add your actual domain
  alternates: {
    canonical: "hhttps://printhelloworld.xyz/", // Fixed: added proper URL
  },
  
  // Category
  category: "technology",
  
  // Additional useful metadata
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
};

import OrientationPrompt from "./comp/OrientationPrompt";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th"> {/* Changed to Thai since you're using th_TH locale */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Analytics/>
        <OrientationPrompt />
        {children}
      </body>
    </html>
  );
}