import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // เพิ่ม type Metadata เพื่อความปลอดภัย
  title:
    "KB Battery Car | แบตเตอรี่รถยนต์ บริการเปลี่ยนถึงที่ พร้อมราคาที่ดีที่สุด",
  description:
    "KB Battery Car จำหน่ายแบตเตอรี่รถยนต์คุณภาพสูงทุกยี่ห้อ พร้อมบริการเปลี่ยนแบตเตอรี่รถยนต์รวดเร็วถึงที่ (ฟรีค่าติดตั้ง) เช็คราคาแบตเตอรี่รถยนต์รุ่นต่างๆ ได้ที่นี่.",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Default
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="th">
      {/* เพิ่ม className เพื่อให้ฟอนต์ Geist ทำงาน */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
