// components/ProductOverview.tsx
"use client";

import Image from 'next/image';
import styles from '../app/home.module.css'; // ใช้ CSS Modules เดิม
import { FaCarBattery, FaCheckCircle, FaStar } from 'react-icons/fa';

// 1. Data Structure: ข้อมูลสินค้า 3 รายการ
const products = [
  {
    name: "แบตเตอรี่รถยนต์รุ่นมาตรฐาน",
    description: "เหมาะสำหรับรถญี่ปุ่นทั่วไป (Eco Car, Sedan) ใช้งานทนทาน ราคาคุ้มค่า",
    image: "/images/product-standard.jpg", // ต้องมีไฟล์นี้ใน public/images/
    features: ["รับประกัน 1 ปี", "ติดตั้งฟรี", "เช็คระบบไฟฟรี"],
    priceTag: "เริ่มต้น 1,XXX บาท",
  },
  {
    name: "แบตเตอรี่รถยนต์พรีเมียม (Premium)",
    description: "กำลังไฟสูง สตาร์ทติดง่าย เหมาะสำหรับรถยุโรปและรถสมรรถนะสูง",
    image: "/images/product-premium.jpg", // ต้องมีไฟล์นี้ใน public/images/
    features: ["รับประกัน 2 ปี", "อายุการใช้งานยาวนาน", "ทนทานต่ออุณหภูมิสูง"],
    priceTag: "เริ่มต้น 3,XXX บาท",
  },
  {
    name: "แบตเตอรี่ EFB/AGM (สำหรับ Start-Stop)",
    description: "สำหรับรถรุ่นใหม่ที่มีระบบ Start-Stop หรือรถหรู (EFB/AGM) จ่ายไฟเสถียร",
    image: "/images/product-agm.jpg", // ต้องมีไฟล์นี้ใน public/images/
    features: ["สำหรับ Start-Stop", "จ่ายไฟเสถียรสูง", "พร้อมใบรับรองคุณภาพ"],
    priceTag: "เริ่มต้น 5,XXX บาท",
  },
];

export default function ProductOverview() {
  return (
    <section className={styles.sectionPadding}>
      <div className={styles.container}>
        
        {/* หัวข้อส่วนสินค้า */}
        <h2 className={styles.sectionTitle}>
          <FaCarBattery style={{ marginRight: '10px', color: 'var(--brand-accent)' }} /> 
          สินค้าและบริการแบตเตอรี่
        </h2>
        <p className={styles.sectionSubtitle}>
          เรามีแบตเตอรี่คุณภาพสูงหลากหลายรุ่นครอบคลุมรถยนต์ทุกประเภท พร้อมส่งถึงที่
        </p>

        {/* 2. การแสดงผลสินค้าแบบ Grid */}
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <div key={index} className={styles.productCard}>
              
              {/* รูปภาพสินค้า */}
              <div className={styles.productImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300} // กำหนดขนาดภาพ
                  height={200} 
                  className={styles.productImage}
                />
              </div>

              {/* รายละเอียด */}
              <div className={styles.productContent}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                
                {/* คุณสมบัติเด่น */}
                <ul className={styles.featureList}>
                  {product.features.map((feature, i) => (
                    <li key={i}>
                      <FaCheckCircle style={{ marginRight: '5px', color: '#06C755' }} /> {feature}
                    </li>
                  ))}
                </ul>
                
                {/* ป้ายราคาและปุ่ม */}
                <div className={styles.productFooter}>
                  <span className={styles.productPrice}>{product.priceTag}</span>
                  <a href="tel:0623736168" className={styles.productCtaButton}>
                    โทรสอบถาม
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
      }
