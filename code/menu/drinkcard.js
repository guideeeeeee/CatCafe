const listDrink = [
    {
        img:null,
        name:"bgimg",
    },
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
    {
        img:null,
        name:"bgimg1",
    },
]

const searchInput = document.querySelector('input[type="text"]');
searchInput.addEventListener('input', handleSearch);

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredDrinks = listDrink.filter(drink => drink.name.toLowerCase().includes(searchTerm));
    // Exclude items with names 'bgimg' and 'bgimg1' from the filtered drinks
    filteredDrinks = filteredDrinks.filter(drink => drink.name !== 'bgimg' && drink.name !== 'bgimg1');
    renderFilteredDrinks(filteredDrinks);
}

const postContainer = document.querySelector('.drink-container');
function renderFilteredDrinks(filteredDrinks) {
    postContainer.innerHTML = '';
    filteredDrinks.forEach((postData) => {
        const postElement = document.createElement('div');
        if (postData.name === 'bgimg') {
            postElement.classList.add('listDrink1');
            postElement.innerHTML = `<div class="dcardimg saleimg"></div>`;
        } else if (postData.name === 'bgimg1') {
            postElement.classList.add('listDrink1');
            postElement.innerHTML = `<div class="dcardimg coffeeimg"></div>`;
        } else {
            postElement.classList.add('dcard');
            postElement.innerHTML = `
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
                        <p>Frappe</p><p>60</p>
                    </div>
                </div>
            </div>
        `;;
        }
        postContainer.appendChild(postElement);
    });
}


renderFilteredDrinks(listDrink);

