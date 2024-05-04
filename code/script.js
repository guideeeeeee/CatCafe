const nav = document.querySelector('.thisnav') //classname ของไฟล์ที่จะดึงไฟล์จากclass navbar มาใช้
fetch('../nav/navbar.html') // file location
.then(res =>res.text())
.then(data=>{
    nav.innerHTML=data //เปลี่ยนตัวแปรในนี้ด้วยถ้าจะใช้
})

