"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../app/home.module.css";

export default function WorkGallery({ imageNames }: { imageNames: string[] }) {
  const displayCount = 12; // 3 แถว x 4 คอลัมน์
  const [visibleImages, setVisibleImages] = useState<string[]>([]);
  const [isFading, setIsFading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const updateImages = () => {
      setIsFading(true); // เริ่มการจางออก (Fade out)

      // รอให้การจางออกทำงาน 0.5 วินาที ก่อนเปลี่ยนรูป
      setTimeout(() => {
        if (imageNames.length > 0) {
          const shuffled = [...imageNames].sort(() => 0.5 - Math.random());
          setVisibleImages(shuffled.slice(0, displayCount));
        }
        setIsFading(false); // เริ่มการปรากฏขึ้น (Fade in)
      }, 500);
    };

    updateImages();
    const interval = setInterval(updateImages, 7000); // เปลี่ยนภาพทุก 7 วินาที

    return () => clearInterval(interval);
  }, [imageNames]);

  return (
    <>
      <div
        className={`${styles.worksGridCustom} ${
          isFading ? styles.fadeOut : styles.fadeIn
        }`}
      >
        {visibleImages.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className={styles.workItemCustom}
            onClick={() => setSelectedImage(`/images/works/${name}`)}
          >
            <Image
              src={`/images/works/${name}`}
              alt={`ผลงาน ${index + 1}`}
              fill
              sizes="(max-width: 768px) 33vw, 25vw"
              className={styles.workImage}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      {/* Lightbox สำหรับดูรูปขยาย */}
      {selectedImage && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div className={styles.lightboxContent}>
            <button className={styles.closeButton}>&times;</button>
            <img
              src={selectedImage}
              alt="Full view"
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </>
  );
}
