// app/page.js
"use client";
import { useState } from 'react'; // ต้องใช้ useState hook
import styles from './home.module.css'; // 1. นำเข้า CSS Module ที่จะสร้าง
import Image from 'next/image'; // ถ้ามีรูปภาพจริง ค่อยนำเข้า
import Lightbox from '../components/Lightbox'; // นำเข้า Component Lightbox

export default function HomePage() {
  // State สำหรับเก็บสถานะการเปิด/ปิด และ URL ของรูปภาพ
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageSrc, setCurrentImageSrc] = useState('');
  const [currentImageAlt, setCurrentImageAlt] = useState('');

  // ฟังก์ชันสำหรับเปิด Lightbox
  const openModal = (src, alt) => {
    setCurrentImageSrc(src);
    setCurrentImageAlt(alt);
    setIsModalOpen(true);
  };

  // ฟังก์ชันสำหรับปิด Lightbox
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageSrc('');
    setCurrentImageAlt('');
  };

  return (
    <main className={styles.mainContainer}> 
      
      {/* 1. ส่วน Header / Navigation Bar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
            <a href="#" className={styles.logo}>
              <Image
                src="/images/logo-kb.png" // Path ไปยังไฟล์โลโก้
                alt="KB Battery Car Logo"
                width={150} // กำหนดความกว้างที่เหมาะสม
                height={50} // กำหนดความสูงที่เหมาะสม
                className={styles.logoImage} // Class ใหม่สำหรับจัดการ Style
              />
            </a>
          <nav className={styles.navLinks}>
            <a href="#products">สินค้า</a>
            <a href="#services">บริการ</a>
            <a href="#reviews">รีวิว</a>
            <a href="#contact">ติดต่อเรา</a>
          </nav>
          <button className={styles.mobileMenuBtn}>☰</button>
        </div>
      </header>
      
      {/* 2. ส่วน Hero Section */}
      <section className={styles.heroSection} id="home">
        <h1 className={styles.heroTitle}>
          ที่สุดของพลังงาน<br/>เพื่อทุกการขับเคลื่อน
        </h1>
        <p className={styles.heroSubtitle}>
          KB Battery ผู้นำด้านแบตเตอรี่รถยนต์คุณภาพสูง รับประกันความทนทาน
          พร้อมบริการเปลี่ยนและติดตั้งรวดเร็วถึงที่
        </p>
        
        <div className={styles.heroActions}>
          <a href="#products" className={styles.ctaButtonPrimary}>
            สำรวจสินค้า
          </a>
          <a href="#contact" className={styles.ctaButtonSecondary}>
            ติดต่อสอบถาม
          </a>
        </div>
      </section>

      {/* 3. ส่วนแสดงสินค้าเด่น */}
      <section className={styles.productsSection} id="products">
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>
            สินค้าแบตเตอรี่คุณภาพ
          </h2>
          
          <div className={styles.productGrid}>
            
            {/* สินค้าชิ้นที่ 1: แบตเตอรี่มาตรฐาน */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <span>รูปแบตเตอรี่มาตรฐาน</span>
              </div>
              <h3 className={styles.productCardTitle}>แบตเตอรี่รถเก๋ง / รถกระบะทั่วไป</h3>
              <p className={styles.productCardDesc}>อายุการใช้งานยาวนาน ด้วยเทคโนโลยีแผ่นธาตุที่ทนทานต่อทุกสภาพอากาศ</p>
              <div className={styles.productPrice}>เริ่มต้น ฿2,500</div>
              <a href="#" className={styles.productButton}>ดูรายละเอียด</a>
            </div>

            {/* สินค้าชิ้นที่ 2: แบตเตอรี่สำหรับรถยุโรป/Start-Stop (AGM) */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <span>รูปแบตเตอรี่ AGM</span>
              </div>
              <h3 className={styles.productCardTitle}>แบตเตอรี่ AGM (รถยนต์ Start-Stop)</h3>
              <p className={styles.productCardDesc}>ประสิทธิภาพสูงสำหรับรถยนต์ที่มีระบบ Start-Stop และรถยุโรปชั้นนำ ทนทานต่อการชาร์จ/คายประจุซ้ำ</p>
              <div className={styles.productPrice}>เริ่มต้น ฿4,800</div>
              <a href="#" className={styles.productButton}>ดูรายละเอียด</a>
            </div>

            {/* สินค้าชิ้นที่ 3: แบตเตอรี่เพื่อการพาณิชย์/รถบรรทุก */}
            <div className={styles.productCard}>
              <div className={styles.productImagePlaceholder}>
                <span>รูปแบตเตอรี่รถบรรทุก</span>
              </div>
              <h3 className={styles.productCardTitle}>แบตเตอรี่รถบรรทุก / รถเพื่อการพาณิชย์</h3>
              <p className={styles.productCardDesc}>กำลังไฟสูงสำหรับการใช้งานหนักต่อเนื่อง ทนทานเป็นพิเศษเพื่อการขนส่งระยะยาว</p>
              <div className={styles.productPrice}>เริ่มต้น ฿3,500</div>
              <a href="#" className={styles.productButton}>ดูรายละเอียด</a>
            </div>
            
          </div>
          
          <div className={styles.allProductsButtonContainer}>
            <a href="#" className={styles.ctaButtonSecondary}>
              ดูแคตตาล็อกทั้งหมด
            </a>
          </div>

        </div>
      </section>
      {/* 4. ส่วนแสดงบริการเด่น (Services Section - เน้น SEO) */}
      <section className={styles.servicesSection} id="services">
        <div className={styles.sectionContainer}>
          
          <h2 className={styles.servicesTitle}>
            บริการ **เปลี่ยนแบตเตอรี่รถยนต์** ที่รวดเร็วและไว้ใจได้
          </h2>
          <div className={styles.infographicContainer}>
              <h3 className={styles.infographicTitle}>บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่</h3>
              <div 
                className={styles.imageClickable} 
                onClick={() => openModal('/images/infographic_04.jpg', 'บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ KB Battery Car')}
                >
              <Image 
                src="/images/infographic_04.jpg" // Path ไปยัง Infographic เปลี่ยนแบต
                alt="บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ KB Battery Car"
                width={1200} 
                height={500} 
                className={styles.infographicImage}
              />
              </div>
              <h3 className={styles.infographicTitle} style={{marginTop: '2rem'}}>บริการจั๊มแบตฉุกเฉิน</h3>
              <div 
                className={styles.imageClickable} 
                onClick={() => openModal('/images/infographic_03.jpg', 'ขั้นตอนบริการจั๊มแบตเตอรี่รถยนต์นอกสถานที่ KB Battery')}
                >
                <Image 
                  src="/images/infographic_03.jpg" 
                  alt="ขั้นตอนบริการจั๊มแบตเตอรี่รถยนต์นอกสถานที่ KB Battery"
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
              <h3 className={styles.serviceCardTitle}>ฟรี! ค่าติดตั้งทุกรุ่น</h3>
              <p className={styles.serviceCardDesc}>
                ไม่ต้องกังวลเรื่องค่าใช้จ่ายแอบแฝง เราบริการ **เปลี่ยนแบตเตอรี่รถยนต์** ให้คุณฟรี! ณ จุดติดตั้ง
              </p>
            </div>

            {/* บริการที่ 2: บริการนอกสถานที่ (เน้นความสะดวก) */}
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>📍</span>
              <h3 className={styles.serviceCardTitle}>รวดเร็วทันใจ บริการถึงที่</h3>
              <p className={styles.serviceCardDesc}>
                ไม่ว่าจะที่บ้าน ที่ทำงาน หรือบนท้องถนน ทีมงานของเราพร้อมไป **เปลี่ยนแบตเตอรี่รถยนต์** ให้คุณถึงที่ในเวลาอันรวดเร็ว
              </p>
            </div>

            {/* บริการที่ 3: รับประกันคุณภาพ (เน้นความมั่นใจ) */}
            <div className={styles.serviceCard}>
              <span className={styles.serviceIcon}>🛡️</span>
              <h3 className={styles.serviceCardTitle}>รับประกันคุณภาพ 100%</h3>
              <p className={styles.serviceCardDesc}>
                แบตเตอรี่ทุกลูกของ KB Battery มีการรับประกันอย่างเป็นทางการ เพื่อให้คุณมั่นใจในผลิตภัณฑ์และบริการของเรา
              </p>
            </div>
            
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
                ทีมงาน KB Battery พร้อมให้บริการและตอบทุกข้อสงสัยเกี่ยวกับแบตเตอรี่รถยนต์
                กรุณากรอกแบบฟอร์มด้านข้าง หรือเลือกช่องทางติดต่อที่สะดวกด้านล่างนี้
              </p>
              
              <div className={styles.contactDetail}>
                <p>📞 โทรศัพท์:</p>
                <a href="tel:09xxxxxxxxx" className={styles.contactLink}>09X-XXX-XXXX</a>
              </div>
              
              <div className={styles.contactDetail}>
                <p>💬 Line ID:</p>
                <span className={styles.contactLink}>@kbbattery</span>
              </div>
              
              <div className={styles.contactDetail}>
                <p>📧 อีเมล:</p>
                <a href="mailto:contact@kbbattery.com" className={styles.contactLink}>contact@kbbattery.com</a>
              </div>
            </div>

            {/* ฝั่งขวา: แบบฟอร์มติดต่อ (Form Placeholder) */}
            {/* ใน Next.js การสร้าง Form ต้องจัดการ State และการส่งข้อมูล ซึ่งจะซับซ้อนขึ้น
               ในขั้นตอนนี้ เราจะสร้างโครงสร้าง HTML/CSS ไว้ก่อน */}
            <form className={styles.contactForm}>
              <input type="text" placeholder="ชื่อ - นามสกุล" className={styles.formInput} required />
              <input type="tel" placeholder="เบอร์โทรศัพท์ที่ติดต่อได้" className={styles.formInput} required />
              <input type="text" placeholder="ยี่ห้อและรุ่นรถยนต์" className={styles.formInput} />
              <textarea placeholder="ข้อความ / คำถามเพิ่มเติม" rows="4" className={styles.formTextarea} required></textarea>
              <button type="submit" className={styles.formSubmitButton}>
                ส่งข้อความ
              </button>
            </form>
          </div>

        </div>
      </section>
      {/* Footer ยังคงอยู่ที่เดิม */}
      <footer className={styles.footer}>
        <p>&copy; 2025 KB Battery. All rights reserved.</p>
      </footer>
      {/* **** เพิ่ม Lightbox Component ไว้ที่นี่ **** */}
      <Lightbox 
        isOpen={isModalOpen}
        src={currentImageSrc}
        alt={currentImageAlt}
        onClose={closeModal}
      />

    </main>
  );
}