const dessertList = [
    {
        img:"../../Asset/dessert/redvelvet.png",
        name:"Red Velvet Cake",
        price:50
    },
    {
        img:"../../Asset/dessert/croissant.png",
        name:"Croissant",
        price:50
    },
    {
        img:"../../Asset/dessert/pancake.png",
        name:"Pancake",
        price:50
    },
    {
        img:"../../Asset/dessert/waffle.png",
        name:"Waffle ice cream",
        price:45
    },
    {
        img:"../../Asset/dessert/cookie.png",
        name:"Cookie",
        price:15
    },
    {
        img:"../../Asset/dessert/chocolate.png",
        name:"chocolate cake",
        price:60
    },
    
]
const postContainer = document.querySelector('.drink-container');
const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredDesserts = dessertList.filter(dessert => dessert.name.toLowerCase().includes(searchTerm));
    renderFilteredDesserts(filteredDesserts);
}

function renderFilteredDesserts(filteredDesserts) {
    postContainer.innerHTML = '';
    filteredDesserts.forEach((postData) => {
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

renderFilteredDesserts(dessertList);