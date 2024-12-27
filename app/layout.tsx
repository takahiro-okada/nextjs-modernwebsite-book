import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "シンプルなコーポレートサイトのデモです。",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "シンプルなコーポレートサイトのデモです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "http://localhost:3000/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-XXXX" />
    </html>
  );
}
