import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const fliegeMono = localFont({
  src: "./fonts/FliegeMonoVF.woff2",
  variable: "--font-fliege-mono",
});
const pencerio = localFont({
  src: "./fonts/Pencerio-Hairline.woff2",
  variable: "--font-pencerio",
});

export const metadata: Metadata = {
  title: "Anna Seheda Portfolio",
  description: "Explore Anna Seheda's Motion/3D Designer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${fliegeMono.variable} ${pencerio.variable} antialiased relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
