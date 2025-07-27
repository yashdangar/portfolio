import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Dangar",
  description: "Yash Dangar's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sora antialiased">
        {children}
      </body>
    </html>
  );
}
