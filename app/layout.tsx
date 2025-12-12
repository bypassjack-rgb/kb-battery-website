import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react'; // ต้อง Import React เพื่อใช้ React.ReactNode

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // ** Keyword หลัก: แบตเตอรี่รถยนต์, เปลี่ยนแบตเตอรี่รถยนต์, ราคาแบตเตอรี่รถยนต์ **
  title: 'KB Battery Car | แบตเตอรี่รถยนต์ บริการเปลี่ยนถึงที่ พร้อมราคาที่ดีที่สุด', 
  description: 'KB Battery Car จำหน่ายแบตเตอรี่รถยนต์คุณภาพสูงทุกยี่ห้อ พร้อมบริการเปลี่ยนแบตเตอรี่รถยนต์รวดเร็วถึงที่ (ฟรีค่าติดตั้ง) เช็คราคาแบตเตอรี่รถยนต์รุ่นต่างๆ ได้ที่นี่.',
}

// 1. กำหนด Type สำหรับ Props ของ RootLayout
type RootLayoutProps = {
    children: React.ReactNode; // กำหนดให้ children เป็น Node ที่ถูกต้องของ React
};

// 2. ใช้ Type ที่กำหนดในฟังก์ชัน Component
export default function RootLayout({ children }: RootLayoutProps) {
  // ... ส่วนอื่นๆ ของโค้ด layout
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
