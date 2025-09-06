import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  metadataBase: new URL("https://yashdangar.me"),
  title: {
    default: "Yash Dangar - Software Engineer & Web Developer",
    template: "%s | Yash Dangar"
  },
  description: "Yash Dangar is a software engineer building elegant interfaces for the modern web. Ex-SDE-1 Intern at BuffIndia. Based in Surat, India.",
  keywords: [
    "Yash Dangar",
    "Software Engineer",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Surat",
    "India",
    "BuffIndia",
    "SCET"
  ],
  authors: [{ name: "Yash Dangar" }],
  creator: "Yash Dangar",
  publisher: "Yash Dangar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yashdangar.me",
    siteName: "Yash Dangar",
    title: "Yash Dangar - Software Engineer & Web Developer",
    description: "Yash Dangar is a software engineer building elegant interfaces for the modern web. Ex-SDE-1 Intern at BuffIndia. Based in Surat, India.",
    images: [
      {
        url: "https://yashdangar.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yash Dangar - Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Dangar - Software Engineer & Web Developer",
    description: "Yash Dangar is a software engineer building elegant interfaces for the modern web. Ex-SDE-1 Intern at BuffIndia.",
    images: ["https://yashdangar.me/og-image.png"],
    creator: "@YashDangar20",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://yashdangar.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sora antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
