import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import IntroScreen from "@/components/common/IntroScreen";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FTW Championships | Premier FC Mobile Tournament",
    template: "%s | FTW Championships",
  },
  description:
    "Compete against the best FC Mobile players in Season VII. ₹20 entry, 64 slots. Earn rewards, climb the rankings, become an FTW Champion.",
  keywords: [
    "FC Mobile",
    "FC Mobile tournament",
    "FTW Championships",
    "FC Mobile esports",
    "FC Mobile competitive",
  ],
  metadataBase: new URL("https://ftw-championships.vercel.app"),
  openGraph: {
    title: "FTW Championships",
    description: "The Premier FC Mobile Tournament Experience",
    url: "https://ftw-championships.vercel.app",
    siteName: "FTW Championships",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FTW Championships",
    description: "The Premier FC Mobile Tournament Experience",
    images: ["/images/hero.png"],
  },
  icons: {
    icon: "/logo/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <IntroScreen>
    <Navbar />
    {children}
  </IntroScreen>
</body>
    </html>
  );
}