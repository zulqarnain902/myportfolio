import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./Providers";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afzaal dev",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning defaultValue="dark">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} bg-white dark:bg-black`}
      >
        <Providers>
          <div className="mb-20">
            <Navbar />
          </div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
