document.getElementById("lastModified").innerHTML = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = year;

const products = [
    {
        category: "food",
        name: "Italian Noodles",
        price: "$100",
        image: "images/food1.webp"

    },

    {
        category: "food",
        name: "Koren Ramen",
        price: "$200",
        image: "images/food2.webp"

    },

    {
        category: "food",
        name: "Chinese Noodles",
        price: "$150",
        image: "images/food3.webp"

    },

    {
        category: "food",
        name: "Korean Sushi",
        price: "$100",
        image: "images/food4.webp"

    },

    {
        category: "food",
        name: "Italian Pizza",
        price: "$100",
        image: "images/food5.webp"
    },

    {
        category: "food",
        name: "Italian Pizza",
        price: "$150",
        image: "images/food6.webp"
    },

    {
        category: "food",
        name: "Samosa",
        price: "$100",
        image: "images/food7.webp"
    },

    {
        category: "food",
        name: "Burger",
        price: "$100",
        image: "images/food8.webp"
    },

    {
        category: "drink",
        name: "Chinese Coca Cola",
        price: "$50",
        image: "images/drink1.webp"
    },

    {
        category: "drink",
        name: "Rani",
        price: "$50",
        image: "images/drink2.webp"
    },

    {
        category: "drink",
        name: "7Up",
        price: "$50",
        image: "images/drink3.webp"
    },

    {
        category: "drink",
        name: "Thums Up",
        price: "$50",
        image: "images/drink4.webp"
    },

    {
        category: "drink",
        name: "Coca Cola",
        price: "$50",
        image: "images/drink5.webp"
    },

    {
        category: "drink",
        name: "Can Coca Cola",
        price: "$50",
        image: "images/drink6.webp"
    },

    {
        category: "snack",
        name: "Doritos",
        price: "$70",
        image: "images/snack1.webp"
    },

    {
        category: "snack",
        name: "Pimento",
        price: "$70",
        image: "images/snack2.webp"
    },

    {
        category: "snack",
        name: "Pan",
        price: "$70",
        image: "images/snack3.webp"
    },

    {
        category: "icecream",
        name: "Vanilla",
        price: "$30",
        image: "images/icecream1.webp"
    },

    {
        category: "icecream",
        name: "Chocolate",
        price: "$70",
        image: "images/icecream2.webp"
    },

    {
        category: "icecream",
        name: "Strawberry",
        price: "$50",
        image: "images/icecream3.webp"
    },

    {
        category: "icecream",
        name: "Mango",
        price: "$50",
        image: "images/icecream5.webp"
    },
]

const productContainer = document.getElementById("featured-products");

function loadRandomProducts() {
    productContainer.innerHTML = "";

    const randomProducts = products
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    randomProducts.forEach((product, index) => {
        const productCard = document.createElement("div");

        // Add animation delay for nice stagger effect
        productCard.style.animationDelay = `${index * 0.2}s`;

        productCard.classList.add("slide-in");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        productContainer.append(productCard);
    });
}

// Only load random products if the container exists (homepage)
if (productContainer) {
    loadRandomProducts();
    setInterval(loadRandomProducts, 5000);
}

const filteredContainer = document.querySelector("#filtered-products");

function displayFilteredProducts(list) {
    filteredContainer.innerHTML = "";

    list.forEach(product => {
        let card = document.createElement("div");
        card.classList.add("filtered-card");

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        filteredContainer.appendChild(card);
    });
}

// Display all products initially (if container exists)
if (filteredContainer) {
    displayFilteredProducts(products);
}

const filterLinks = document.querySelectorAll("#filters a");

filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.dataset.category;

        if (category === "all") {
            displayFilteredProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayFilteredProducts(filtered);
        }
    });
});