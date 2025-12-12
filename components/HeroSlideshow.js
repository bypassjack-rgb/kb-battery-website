"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../app/home.module.css';

// รายการรูปภาพสำหรับ Slideshow
const slides = [
  // ต้องแน่ใจว่ารูปภาพเหล่านี้อยู่ในโฟลเดอร์ public/images/
  { src: '/images/slide-01.jpg', alt: 'โปรโมชั่นเปลี่ยนแบตเตอรี่รถยนต์' },
  { src: '/images/slide-02.jpg', alt: 'บริการส่งและติดตั้งแบตเตอรี่ถึงที่' },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect สำหรับตั้งเวลาการเปลี่ยนภาพอัตโนมัติ
  useEffect(() => {
    // ตั้งเวลาให้เปลี่ยนภาพทุก 5 วินาที (5000 มิลลิวินาที)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); 

    // ทำความสะอาด Interval เมื่อ Component ถูกถอดออก
    return () => clearInterval(interval);
  }, []);

  return (
    // Slide Container
    <div className={styles.slideshowContainer}>
      
      {/* วนลูปแสดงภาพทั้งหมด */}
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
        >
          {/* ส่วนแสดงภาพพื้นหลัง */}
          <Image
            src={slide.src}
            alt={slide.alt}
            fill 
            sizes="(max-width: 768px) 100vw, 100vw"
            priority={index === 0} 
            className={styles.slideImage}
          />
        </div>
      ))}
      
      {/* *************************************************************** */}
      {/* * โครงสร้าง Hero Content ทับซ้อนอยู่ด้านบนของ Slideshow (Overlay) * */}
      
      <div className={styles.heroOverlayContent}>
          <div className={styles.heroContentContainer}>
              <div className={styles.heroTextSide}>
                  {/* Badge */}
                  <div className={styles.heroBadge}>
                      <i className="fas fa-bolt mr-1"></i> ถึงไวภายใน 30 นาที
                  </div>
                  
                  {/* Title and Subtitle */}
                  <h1 className={styles.heroTitleCustom}>
                      แบตหมด? รถสตาร์ทไม่ติด? <br/>
                      <span className={styles.heroAccentText}>เราไปหาถึงที่ 24 ชม.</span>
                  </h1>
                  <p className={styles.heroSubtitleCustom}>
                      บริการเปลี่ยนแบตเตอรี่รถยนต์นอกสถานที่ ครอบคลุมทั่วพื้นที่ ราคาถูกกว่าศูนย์ แบตเตอรี่ใหม่แกะกล่องทุกลูก พร้อมรับประกัน
                  </p>
                  
                  {/* Call to Action Buttons */}
                  <div className={styles.heroActions}>
                      <a href="#contact" className={`${styles.ctaButtonPrimary} ${styles.ctaAnimate}`}>
                          <i className="fas fa-phone-volume"></i>
                          โทรเรียกช่างด่วน
                      </a>
                      <a href="#contact" className={styles.ctaButtonSecondaryStyle}>
                          <i className="fab fa-line text-green-400"></i>
                          แอดไลน์สอบถาม
                      </a>
                  </div>
              </div>
              
              {/* Image Illustration (เราถอดรูปภาพออก เพื่อใช้ Slideshow แทน) */}
              <div className={styles.heroImageSide}>
                  
              </div>
          </div>
      </div>

      {/* จุดนำทาง (Dots) */}
      <div className={styles.slideDots}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      
    </div> // ปิด .slideshowContainer
  ); // ปิด return statement 
}