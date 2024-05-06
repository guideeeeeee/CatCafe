const nav = document.querySelector('.thisnav') //classname ของไฟล์ที่จะดึงไฟล์จากclass navbar มาใช้
fetch('../nav/navbar.html') // file location //ใช้ fetch API เพื่อดึงข้อมูลจาก URL
.then(res =>res.text())
.then(data=>{
    nav.innerHTML=data //เปลี่ยนตัวแปรในนี้ด้วยถ้าจะใช้
})

// ใช้สำหรับดึงและแสดงเนื้อหาของไฟล์ HTML จาก URL นั้นๆ 
// ลงในส่วนของหน้าเว็บที่ต้องการโดยใช้ JavaScript และ fetch API 
// ในการทำงานแบบไม่ซิงโครนัส (asynchronously) 
// โดยทำให้สามารถปรับเปลี่ยนหรืออัปเดตส่วนต่างๆ 
// ของหน้าเว็บได้โดยไม่ต้องโหลดหน้าใหม่ทุกครั้ง