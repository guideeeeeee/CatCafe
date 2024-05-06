const listTreat = [
    {
        img:"../../Asset/catTreat/meaw.png",
        name:"Meaw lia",
        price:40
    },
    {
        img:"../../Asset/catTreat/grob.png",
        name:"Meaw grobgab",
        price:40
    },
]

const postContainer = document.querySelector('.drink-container');

const postMethod = ()=>{
    listTreat.map((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('dcard');
        postElement.innerHTML=`

        <img src="${postData.img}" class="Menudrink" alt="">
                    <div class="dcard-content">
                        <div class="contenttop">
                            <img src="../../Asset/catTreat/solar_cat-linear.png"  alt="">
                            <p>${postData.name}</p>
                        </div>
                        <div class="contentbottom">
                            <div class="listbottom">
                                <p>${postData.price}</p>
                            </div>
                        </div>`
                    
                    
                    postContainer.appendChild(postElement)
    })
}
postMethod()

const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTreat = listTreat.filter(treat => treat.name.toLowerCase().includes(searchTerm));
    renderFilteredTreat(filteredTreat);
}

function renderFilteredTreat(filteredTreat) {
    postContainer.innerHTML = '';
    filteredTreat.forEach((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('dcard');
        postElement.innerHTML = ` <img src="${postData.img}" class="Menudrink" alt="">
        <div class="dcard-content">
            <div class="contenttop">
                <img src="../../Asset/dessert/icon-park-outline_cake-two.png"  alt="">
                <p>${postData.name}</p>
            </div>
            <div class="contentbottom">
                <div class="listbottom">
                    <p>${postData.price}</p>
                </div>
            </div>
        </div>
    `;
        postContainer.appendChild(postElement);
    });
}

renderFilteredTreat(listTreat);