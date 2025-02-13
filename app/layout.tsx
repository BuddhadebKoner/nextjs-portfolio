import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/shared/Header";
import { QueryProvider } from "@/lib/react-query/QueryProvider";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: "/favicon.ico",
  title: "Buddhadeb Koner | Portfolio",
  description: "Buddhadeb Koner's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="tIuTbVILH-G_9w4nWpFt1f6Ic9oaKmSLhbReePTbMCA" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-darkprimaryBg bg-lightprimaryBg`}
      >
        <QueryProvider>
          <Header />
          {children}
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  );
}
