import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/components/auth-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pejuang PTN - Platform Tryout UTBK Terdepan",
  description: "Platform tryout UTBK terdepan dengan sistem penilaian IRT yang akurat. Persiapkan diri Anda untuk meraih PTN impian dengan analisis mendalam dan fitur premium.",
  keywords: "tryout utbk, simulasi utbk, tes masuk ptn, pejuang ptn, latihan soal utbk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
