/*const projectcat = [{
    img: "../../Asset/drink/capuccino.png",
    name: "Capuccino", 
},{
    img: "../../Asset/drink/capuccino.png",
    name: "latte", 
},{
    img: "../../Asset/drink/capuccino.png",
    name: "Capuccino", 
},

]

const myContent = document.querySelector(".myContent")
const showInHtml = projectcat.map((project,index) =>{
    return `
    <div class="dcard">
                        <img src="${project.img}" alt="">
                    <div class="dcard-content">
                        <div class="contenttop">
                            <img src="../../Asset/drink/Vector.png" alt="">
                            <p>${project.name}</p>
                        </div>
                        <div class="contentbottom">
                            <div class="listbottom">
                                <p>ice</p><p>55</p>
                            </div>
                            <div class="listbottom">
                                <p>hot</p><p>50</p>
                            </div>
                            <div class="listbottom">
                                <p>frappe</p><p>60</p>
                            </div>
                        </div>
                    </div>
                </div>
    `
})
myContent.innerHTML= showInHtml*/

const listDrink = [
    {
        img: "../../Asset/drink/capuccino.png",
        name: "Capuccino"
    },
    {
        img: "../../Asset/drink/Latte.png",
        name: "Latte"
    },
    {
        img: "../../Asset/drink/Americano.png",
        name: "Americano"
    },
    {
        img: "../../Asset/drink/Macchiato.png",
        name: "Macchiato"
    },
    {
        img: "../../Asset/drink/Black coffee.png",
        name: "Black coffee"
    },
    {
        img: "../../Asset/drink/Espresso.png",
        name: "Espresso"
    },{
        img: "../../Asset/drink/Chocomint.png",
        name: "ChocoMint"
    },
    {
        img: "../../Asset/drink/Thai tea.png",
        name: "Thai tea"
    },
    {
        img: "../../Asset/drink/Matcha.png",
        name: "Matcha"
    },
    {
        img: "../../Asset/drink/chocolate.png",
        name: "Chocolate"
    },
]

const postContainer = document.querySelector('.drink-container');

const postMethod = ()=>{
    listDrink.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('dcard');
        postElement.innerHTML=`

        <img src="${postData.img}" class="Menudrink" alt="">
                    <div class="dcard-content">
                        <div class="contenttop">
                            <img src="../../Asset/drink/Vector.png"  alt="">
                            <p>${postData.name}</p>
                        </div>
                        <div class="contentbottom">
                            <div class="listbottom">
                                <p>Ice</p><p>55</p>
                            </div>
                            <div class="listbottom">
                                <p>Hot</p><p>50</p>
                            </div>
                            <div class="listbottom">
                                <p>frappe</p><p>60</p>
                            </div>
                        </div>`
                    
                    
                    postContainer.appendChild(postElement)
    })
}
postMethod()

