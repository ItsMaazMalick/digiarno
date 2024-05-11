import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import {
  companyDescription,
  companyTitle,
  keywords,
} from "@/constants/company";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: companyTitle,
  description: companyDescription,
  keywords: keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} overflow-x-hidden`}>
        <main className="w-[100dvw] min-h-[100dvh] flex flex-col items-center">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
