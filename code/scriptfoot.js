const footer = document.querySelector('.thisfoot') //classname ของไฟล์ที่จะดึงไฟล์จากclass navbar มาใช้
fetch('../footer/footer.html') // file location
.then(res =>res.text())
.then(data=>{
    footer.innerHTML=data //เปลี่ยนตัวแปรในนี้ด้วยถ้าจะใช้
})