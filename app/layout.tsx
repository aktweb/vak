import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import { Toaster } from "@/components/ui/toaster";
import { QFormMain } from "./_components/query-form copy";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK Enterprises",
  description: "One stop solution for all your pnuematic needs",
  icons: "/public/vak.jpg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <QFormMain />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
