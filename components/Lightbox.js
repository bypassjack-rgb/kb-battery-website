// components/Lightbox.js
import styles from '../app/home.module.css'; // ใช้ Style เดิมจาก home.module.css
import Image from 'next/image';

export default function Lightbox({ isOpen, src, alt, onClose }) {
  if (!isOpen || !src) {
    return null; // ถ้าไม่เปิด หรือไม่มีรูป ก็ไม่แสดงผล
  }

  // ตัวแปรสำหรับขนาดรูปภาพ (Infographic)
  const MAX_WIDTH = 900;
  const MAX_HEIGHT = 900;

  return (
    // Modal Overlay (พื้นหลังทึบที่คลุมทั้งหน้าจอ)
    <div className={styles.modalOverlay} onClick={onClose}>
      
      {/* Modal Content (กล่องที่แสดงรูปภาพ) */}
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        
        {/* ปุ่มปิด Modal */}
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        {/* แสดงรูปภาพขนาดใหญ่ */}
        <Image 
          src={src}
          alt={alt}
          width={MAX_WIDTH}
          height={MAX_HEIGHT}
          className={styles.lightboxImage}
          priority // ให้โหลดเร็ว
        />
      </div>
    </div>
  );
}