"use client"; // Client Component

import { useState } from "react";
import styles from "../app/home.module.css";
import Image from "next/image";
import Lightbox from "../components/Lightbox"; // ตรวจสอบ path ให้ถูกต้อง
import HeroSlideshow from "../components/HeroSlideshow";
import { FaLine, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import WorkGallery from "../components/WorkGallery"; // เรียกใช้ WorkGallery ที่สร้างไว้

interface HomePageClientProps {
  workImages: string[]; // รับค่ารายชื่อรูปภาพมาจาก Server
}

export default function HomePageClient({ workImages }: HomePageClientProps) {
  // State สำหรับเก็บสถานะการเปิด/ปิด Lightbox ของ Infographic (ถ้ามี)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState("");
  const [currentImageAlt, setCurrentImageAlt] = useState("");

  // ฟังก์ชันเปิด Lightbox (สำหรับ Infographic ในหน้า Services)
  const openModal = (src: string, alt: string) => {
    setCurrentImageSrc(src);
    setCurrentImageAlt(alt);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageSrc("");
    setCurrentImageAlt("");
  };

  return (
    <main className={styles.mainContainer}>
      {/* 1. Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <a href="#" className={styles.logo}>
            <Image
              src="/images/logo-kb.png"
              alt="KB Battery Car Logo"
              width={150}
              height={50}
              className={styles.logoImage}
            />
          </a>
          <nav className={styles.navLinks}>
            <a href="#services">บริการของเรา</a>
            <a href="#brands">ยี่ห้อแบตเตอรี่</a>
            <a href="#reviews">รีวิว</a>
            <a href="#features">จุดเด่น</a>
            <a href="#contact">ติดต่อเรา</a>
          </nav>
          <button className={styles.mobileMenuBtn}>☰</button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className={styles.heroSection} id="home">
        <HeroSlideshow />
      </section>

      {/* 3. Products Section */}
      <section className={styles.productsSection} id="brands">
        <div className={styles.sectionContainer}>
          <div className={styles.productHeaderGroup}>
            <div className={styles.badgeText}>PREMIUM SELECTION</div>
            <h2 className={styles.modernTitle}>
              <span className={styles.iconSpan}>🔋</span>
              สินค้า <span className={styles.emphasize}>แบตเตอรี่คุณภาพ</span>
            </h2>
            <p className={styles.titleDescription}>
              คัดสรรเฉพาะแบรนด์ชั้นนำ การันตีของแท้ 100%
              พร้อมบริการเปลี่ยนถึงที่
            </p>
            <div className={styles.titleDivider}>
              <span className={styles.dividerLine}></span>
              <span className={styles.dividerDot}></span>
              <span className={styles.dividerLine}></span>
            </div>
          </div>
          <div className={styles.productGrid}>
            {/* สินค้าชิ้นที่ 1: แบตเตอรี่มาตรฐาน */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <Image
                  src="/images/battery-standard/battery-GS.png"
                  alt="แบตเตอรี่"
                  width={150}
                  height={100}
                  className={styles.productImage}
                />
              </div>
              <h3 className={styles.productCardTitle}>
                แบตเตอรี่รถเก๋ง / รถกระบะทั่วไป
              </h3>
              <p className={styles.productCardDesc}>
                อายุการใช้งานยาวนาน ด้วยเทคโนโลยีแผ่นธาตุที่ทนทานต่อทุกสภาพอากาศ
              </p>
              <div className={styles.productPrice}>เริ่มต้น ฿1,800</div>
              <a
                href="http://line.me/ti/p/~kbbattry"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productButton}
              >
                สอบถามรายละเอียด
              </a>
            </div>
            {/* สินค้าชิ้นที่ 2: แบตเตอรี่สำหรับรถยุโรป/Start-Stop (AGM) */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <Image
                  src="/images/battery-agm/BOSCH-105D31L-MF.jpg" // <--- ชี้ไปที่ไฟล์ PNG
                  alt="แบตเตอรี่ AGM (รถยนต์ Start-Stop)"
                  width={150} // กำหนดความกว้าง
                  height={100} // กำหนดความสูง
                  className={styles.productImage} // ใช้ Class จัด Style (ใน home.module.css)
                />
              </div>
              <h3 className={styles.productCardTitle}>
                แบตเตอรี่ AGM (รถยนต์ Start-Stop)
              </h3>
              <p className={styles.productCardDesc}>
                ติดต่อเรา Start-Stop และรถยุโรปชั้นนำ
                ทนทานต่อการชาร์จ/คายประจุซ้ำ
              </p>
              <div className={styles.productPrice}>ติดต่อสอบถามเรา</div>
              <a
                href="http://line.me/ti/p/~kbbattry"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productButton}
              >
                ติดต่อ kbbattry
              </a>
            </div>

            {/* สินค้าชิ้นที่ 3: แบตเตอรี่เพื่อการพาณิชย์/รถบรรทุก */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <Image
                  src="/images/battery-truck/BT-YUASA-01.jpg" // <--- ชี้ไปที่ไฟล์ PNG
                  alt="แบตเตอรี่รถบรรทุก / รถเพื่อการพาณิชย์"
                  width={150} // กำหนดความกว้าง
                  height={100} // กำหนดความสูง
                  className={styles.productImage} // ใช้ Class จัด Style (ใน home.module.css)
                />
              </div>
              <h3 className={styles.productCardTitle}>
                แบตเตอรี่รถบรรทุกบรรทุก / รถเพื่อการพาณิชย์
              </h3>
              <p className={styles.productCardDesc}>
                กำลังไฟสูงสำหรับการใช้งานหนักต่อเนื่อง
                ทนทานเป็นพิเศษเพื่อการขนส่งระยะยาว
              </p>
              <div className={styles.productPrice}>ติดต่อสอบถามเรา</div>
              <a
                href="http://line.me/ti/p/~kbbattry"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.productButton}
              >
                ติดต่อ kbbattry
              </a>
            </div>
          </div>

          <div className={styles.allProductsButtonContainer}>
            <a href="#brands" className={styles.ctaButtonSecondary}>
              ดูแคตตาล็อกทั้งหมด
            </a>
          </div>
        </div>
      </section>
      {/* 4. Services Section */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionContainer}>
          <div className={styles.headerGroup}>
            <span className={styles.topSubtitle}>SERVICE EXCELLENCE</span>
            <h2 className={styles.mainTitle}>
              บริการ **เปลี่ยนแบตเตอรี่รถยนต์**{" "}
              <span className={styles.highlightText}>
                ที่รวดเร็วและไว้ใจได้
              </span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={styles.infographicContainer}>
            <h3 className={styles.infographicTitle}>
              บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่
            </h3>
            <div
              className={styles.imageClickable}
              onClick={() =>
                openModal(
                  "/images/infographic_04.jpg",
                  "บริการเปลี่ยนแบตเตอรี่"
                )
              }
            >
              <Image
                src="/images/infographic_04.jpg"
                alt="บริการเปลี่ยนแบต"
                width={1200}
                height={500}
                className={styles.infographicImage}
              />
            </div>
            <h2
              className={styles.infographicTitle}
              style={{ marginTop: "2rem" }}
            >
              บริการจั๊มแบตฉุกเฉิน
            </h2>
            <div
              className={styles.imageClickable}
              onClick={() =>
                openModal(
                  "/images/infographic_03.jpg",
                  "ขั้นตอนบริการจั๊มแบตเตอรี่รถยนต์นอกสถานที่ KB Battery"
                )
              }
            >
              <Image
                src="/images/infographic_03.jpg"
                alt="ขั้นตอนบริการจั๊มแบตเตอรี่รถยนต์นอกสถานที่ KBBatteryCar"
                width={1200}
                height={500}
                className={styles.infographicImage}
              />
            </div>
          </div>
          {/* Grid Layout สำหรับบริการ 3 อย่าง */}
          <div className={styles.serviceGrid}>
            {/* บริการที่ 1: ติดตั้งฟรี (เน้นราคา) */}
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>⚡️</span>
              <h3 className={styles.serviceCardTitle}>
                ฟรี! ค่าติดตั้งทุกรุ่น
              </h3>
              <p className={styles.serviceCardDesc}>
                ไม่ต้องกังวลเรื่องค่าใช้จ่ายแอบแฝง เราบริการ
                **เปลี่ยนแบตเตอรี่รถยนต์** ให้คุณฟรี! ณ จุดติดตั้ง
              </p>
            </div>

            {/* บริการที่ 2: บริการนอกสถานที่ (เน้นความสะดวก) */}
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>📍</span>
              <h3 className={styles.serviceCardTitle}>
                รวดเร็วทันใจ บริการถึงที่
              </h3>
              <p className={styles.serviceCardDesc}>
                ไม่ว่าจะที่บ้าน ที่ทำงาน หรือบนท้องถนน ทีมงานของเราพร้อมไป
                **เปลี่ยนแบตเตอรี่รถยนต์** ให้คุณถึงที่ในเวลาอันรวดเร็ว
              </p>
            </div>

            {/* บริการที่ 3: รับประกันคุณภาพ (เน้นความมั่นใจ) */}
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>🛡️</span>
              <h3 className={styles.serviceCardTitle}>รับประกันคุณภาพ 100%</h3>
              <p className={styles.serviceCardDesc}>
                แบตเตอรี่ทุกลูกของ KB Battery Car มีการรับประกันอย่างเป็นทางการ
                เพื่อให้คุณมั่นใจในผลิตภัณฑ์และบริการของเรา
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ส่วนแสดงจุดเด่น/เหตุผลที่ควรเลือก (Features Section) */}
      <section className={styles.featuresSection} id="features">
        <div className={styles.sectionContainer}>
          <div className={styles.headerGroup}>
            <span className={styles.topSubtitle}>SERVICE EXCELLENCE</span>
            <h2 className={styles.mainTitle}>
              ทำไมเจ้าของรถถึงไว้วางใจ{" "}
              <span className={styles.highlightText}>KBBatteryCar</span>
            </h2>
            <div className={styles.titleUnderline}></div>
          </div>
          {/* ส่วนแสดงผลงาน (เรียกใช้ Component ใหม่ที่นี่) */}
          <section className={styles.worksSection}>
            <h2 className={styles.servicesTitle}>
              พิสูจน์ด้วยผลงาน: รวมภาพการดูแลลูกค้าหน้างานจริง
            </h2>
            {/* ส่งรายชื่อไฟล์รูปไปให้ WorkGallery จัดการแสดงผล */}
            <WorkGallery imageNames={workImages} />
          </section>
          {/* ส่วนนี้ยังว่าง ไว้สำหรับเพิ่มเนื้อหา หรือ features ใหม่  */}
          <div className={styles.featuresContent}>
            {/* Placeholder for Feature Cards */}
          </div>
        </div>
      </section>
      {/* 5. ส่วนแบบฟอร์มติดต่อ (Contact Section) */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.sectionContainer}>
          <h2 className={styles.contactTitle}>
            **ติดต่อเรา** เพื่อสอบถาม **ราคาแบตเตอรี่รถยนต์** และบริการติดตั้ง
          </h2>
          <div className={styles.contactContent}>
            {/* ฝั่งซ้าย: ข้อมูลติดต่อหลัก */}
            <div className={styles.contactInfo}>
              <p className={styles.infoText}>
                ทีมงาน KB Battery Car
                พร้อมให้บริการและตอบทุกข้อสงสัยเกี่ยวกับแบตเตอรี่รถยนต์
                กรุณากรอกแบบฟอร์มด้านข้าง
                หรือเลือกช่องทางติดต่อที่สะดวกด้านล่างนี้
              </p>

              <div className={styles.contactDetail}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <FaPhoneAlt
                    size={35}
                    style={{
                      color: "var(--primary-color)",
                      marginRight: "8px",
                    }}
                  />
                  <strong style={{ paddingRight: 5 }}>โทรศัพท์:</strong>
                  <a href="tel:0623736168" className={styles.contactLink}>
                    062-373-6168
                  </a>
                </p>
              </div>

              <div className={styles.contactDetail}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <FaLine
                    size={35}
                    style={{
                      color: "#06C755",
                      marginRight: "8px",
                    }}
                  />
                  <strong style={{ paddingRight: 5 }}>Line ID:</strong>
                  {/* ใช้ LINE ID ธรรมดา: kbbattry */}
                  <a
                    href="http://line.me/ti/p/~kbbattry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.contactLink}
                  >
                    kbbattry
                  </a>
                </p>
              </div>
              <div className={styles.contactDetail}>
                <p style={{ display: "flex", alignItems: "center" }}>
                  <FaRegEnvelope
                    size={35}
                    style={{ color: "#555", marginRight: "8px" }}
                  />
                  <strong style={{ paddingRight: 5 }}>อีเมล:</strong>
                  <a
                    href="mailto:tinnakorn16888@gmail.com"
                    className={styles.contactLink}
                  >
                    tinnakorn16888@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* ฝั่งขวา: แบบฟอร์มติดต่อ (Form Placeholder) */}
            <form className={styles.contactForm}>
              <input
                type="text"
                placeholder="ชื่อ - นามสกุล"
                className={styles.formInput}
                required
              />
              <input
                type="tel"
                placeholder="เบอร์โทรศัพท์ที่ติดต่อได้"
                className={styles.formInput}
                required
              />
              <input
                type="text"
                placeholder="ยี่ห้อและรุ่นรถยนต์"
                className={styles.formInput}
              />
              <textarea
                placeholder="ข้อความ / คำถามเพิ่มเติม"
                rows={4}
                className={styles.formTextarea}
                required
              ></textarea>
              <button type="submit" className={styles.formSubmitButton}>
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ********** FLOATING ACTION BUTTONS (FAB) ********** */}
      <div className={styles.floatingButtonsContainer}>
        {/* 1. ปุ่ม LINE (ด้านบน) */}
        <a
          href="https://line.me/ti/p/~kbbattry"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.fabButton} ${styles.fabLine}`}
          title="แอดไลน์สอบถาม: kbbattry"
        >
          <FaLine style={{ fontSize: "3rem" }} />
        </a>

        {/* 2. ปุ่ม CALL (ด้านล่าง, มี Animation) */}
        <a
          href="tel:0623736168"
          className={`${styles.fabButton} ${styles.fabCall} ${styles.fabCallAnimate}`}
          title="โทรด่วน: 062-373-6168"
        >
          <span style={{ fontSize: "3rem" }}>&#x260E;</span>
        </a>
      </div>
      {/* ********** END FABs ********** */}
      {/* Footer ยังคงอยู่ที่เดิม */}
      <footer className={styles.footer}>
        <p>&copy; 2025 KBBatteryCar. All rights reserved.</p>
      </footer>
      {/* Lightbox Component (สำหรับ Infographic ในหน้า Services) */}
      <Lightbox
        isOpen={isModalOpen}
        src={currentImageSrc}
        alt={currentImageAlt}
        onClose={closeModal}
      />
    </main>
  );
}
