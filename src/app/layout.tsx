import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SideNavigation } from "@/components/SideNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeswell Mathew - Portfolio",
  description: "Portfolio of Jeswell Mathew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth selection:bg-orange-100 selection:text-orange-900`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <div className="bg-dot-matrix" aria-hidden="true" />
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>
        <SideNavigation />
      </body>
    </html>
  );
}
