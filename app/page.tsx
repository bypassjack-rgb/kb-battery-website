import fs from "fs";
import path from "path";
import HomePageClient from "../components/HomePageClient"; // เรียกใช้ตัวที่เราเพิ่งสร้าง

// ฟังก์ชันอ่านไฟล์ (ทำงานบน Server เท่านั้น)
async function getWorkImages() {
  const worksDirectory = path.join(process.cwd(), "public/images/works");
  try {
    const filenames = fs.readdirSync(worksDirectory);
    return filenames.filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
  } catch (error) {
    return [];
  }
}

// หน้าหลัก (เป็น Server Component)
export default async function Page() {
  // 1. อ่านข้อมูลรูปภาพจาก Server
  const workImages = await getWorkImages();

  // 2. ส่งข้อมูลไปให้ HomePageClient แสดงผล
  return <HomePageClient workImages={workImages} />;
}
