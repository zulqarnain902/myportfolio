"use client";
import Head from "next/head";
import { ReactNode } from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
interface LayoutProps {
  children: ReactNode; // This is the crucial addition
  className?: string;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  className = "",
  title = "Web Developer Portfolio",
  description = "Professional portfolio showcasing MERN, MEAN, and Next.js projects",
}: LayoutProps) {
  const router = useRouter();

  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`https://yourdomain.com${router}`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
