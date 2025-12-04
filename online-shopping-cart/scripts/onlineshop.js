document.getElementById("lastModified").innerHTML = document.lastModified;

const year = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = year;

const products = [
    {
        category: "food",
        name: "Cooked Shrimps",
        price: "$100",
        image: "images/food1.webp",
        description: "Shrimps deliciously prepared and flavored to meet taste buds satisfaction"
    },

    {
        category: "food",
        name: "Burger",
        price: "$200",
        image: "images/food2.webp",
        description: "Nice and tasty burger. Soft and appealing"
    },

    {
        category: "food",
        name: "Salad",
        price: "$150",
        image: "images/food3.webp",
        description: "Fresh and crisp salad with a blend of nutritious vegetables and light dressing"
    },

    {
        category: "food",
        name: "Korean Sushi",
        price: "$100",
        image: "images/food4.webp",
        description: "Authentic Korean-style sushi rolls with premium ingredients and perfect balance of flavors"
    },

    {
        category: "food",
        name: "Sweetened Burger",
        price: "$100",
        image: "images/food5.webp",
        description: "Delicious burger with a hint of sweetness and savory toppings"
    },

    {
        category: "food",
        name: "Italian Pizza",
        price: "$150",
        image: "images/food6.webp",
        description: "Authentic Italian pizza with traditional toppings and a perfectly crispy crust"
    },

    {
        category: "food",
        name: "Noodles",
        price: "$100",
        image: "images/food7.webp",
        description: "Perfectly cooked noodles with savory sauce and fresh ingredients"
    },

    {
        category: "food",
        name: "Samosa",
        price: "$100",
        image: "images/food8.webp",
        description: "Crispy fried pastry filled with spiced potatoes and peas"
    },

    {
        category: "drink",
        name: "Chinese Coca Cola",
        price: "$50",
        image: "images/drink1.webp",
        description: "Classic Coca Cola taste imported from China with authentic packaging"
    },

    {
        category: "drink",
        name: "Rani",
        price: "$50",
        image: "images/drink2.webp",
        description: "Refreshing fruit juice drink with natural flavors and tropical taste"
    },

    {
        category: "drink",
        name: "7Up",
        price: "$50",
        image: "images/drink3.webp",
        description: "Crisp and clean lemon-lime flavored carbonated beverage"
    },

    {
        category: "drink",
        name: "Thums Up",
        price: "$50",
        image: "images/drink4.webp",
        description: "Bold and energizing cola drink with powerful taste and refreshing fizz"
    },

    {
        category: "drink",
        name: "Coca Cola",
        price: "$50",
        image: "images/drink5.webp",
        description: "The world's favorite cola drink with iconic taste and refreshing bubbles"
    },

    {
        category: "drink",
        name: "Can Coca Cola",
        price: "$50",
        image: "images/drink6.webp",
        description: "Original Coca Cola in convenient aluminum cans for on-the-go refreshment"
    },

    {
        category: "snack",
        name: "Doritos",
        price: "$70",
        image: "images/snack1.webp",
        description: "Crunchy triangular snack chips with bold flavors and satisfying taste"
    },

    {
        category: "snack",
        name: "Pimento",
        price: "$70",
        image: "images/snack2.webp",
        description: "Savory and spicy pepper-flavored snack with an addictive crunch"
    },

    {
        category: "snack",
        name: "Pan",
        price: "$70",
        image: "images/snack3.webp",
        description: "Traditional betel leaf-based snack with mint and spice blend"
    },

    {
        category: "icecream",
        name: "Vanilla Muffins",
        price: "$30",
        image: "images/icecream1.webp",
        description: "Soft and fluffy muffins with classic vanilla flavor and delicious texture"
    },

    {
        category: "icecream",
        name: "Mango Muffins",
        price: "$70",
        image: "images/icecream2.webp",
        description: "Tropical muffins infused with sweet mango flavor and fruity aroma"
    },

    {
        category: "icecream",
        name: "Strawberry Muffins",
        price: "$50",
        image: "images/icecream3.webp",
        description: "Delightful strawberry-flavored muffins with fresh berry taste and moist crumb"
    },

    {
        category: "icecream",
        name: "Mojito",
        price: "$50",
        image: "images/icecream5.webp",
        description: "Refreshing mint and lime flavored frozen treat inspired by the classic Mojito cocktail"
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
            <button class="view-overlay" data-product-name="${product.name}">View Product</button>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        card.querySelector(".view-overlay").addEventListener("click", () => openProductModal(product));
        filteredContainer.appendChild(card);
    });
}

// Display all products initially (if container exists)
if (filteredContainer) {
    displayFilteredProducts(products);
}

// Create modal overlay for product details
function createProductModal() {
    const modalHTML = `
        <div id="productModal" class="product-modal">
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div id="modalProductDetails"></div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}

function openProductModal(product) {
    let modal = document.getElementById("productModal");
    if (!modal) {
        createProductModal();
        modal = document.getElementById("productModal");
    }

    const detailsDiv = document.getElementById("modalProductDetails");
    detailsDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1rem;">
        <h2>${product.name}</h2>
        <p class="price" style="font-size: 1.3rem; color: var(--dusty-olive); font-weight: bold; margin: 1rem 0;">${product.price}</p>
        <p class="description" style="margin-bottom: 1.5rem;">${product.description || ""}</p>
        <div class="quantity-control" style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
            <span style="font-weight: bold;">Quantity:</span>
            <button class="qty-minus" style="width: 40px; height: 40px; font-size: 1.2rem; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; font-family: 'Amaranth', Sans-Serif;">−</button>
            <input type="number" id="modalQty" value="1" min="1" style="width: 60px; padding: 0.5rem; text-align: center; border: 1px solid #ccc; border-radius: 4px; font-family: 'Amaranth', Sans-Serif;">
            <button class="qty-plus" style="width: 40px; height: 40px; font-size: 1.2rem; cursor: pointer; border: 1px solid #ccc; border-radius: 4px; font-family: 'Amaranth', Sans-Serif;">+</button>
        </div>
        <button id="modalAddToCart" style="width: 100%; padding: 1rem; background-color: var(--dusty-olive); color: white; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; font-family: 'Amaranth', Sans-Serif;">Add to Cart</button>
    `;

    // Quantity button handlers
    detailsDiv.querySelector(".qty-minus").addEventListener("click", () => {
        const input = detailsDiv.querySelector("#modalQty");
        if (input.value > 1) input.value--;
    });
    detailsDiv.querySelector(".qty-plus").addEventListener("click", () => {
        const input = detailsDiv.querySelector("#modalQty");
        input.value++;
    });

    // Add to cart handler
    detailsDiv.querySelector("#modalAddToCart").addEventListener("click", () => {
        const qty = detailsDiv.querySelector("#modalQty").value;
        alert(`Added ${qty} x ${product.name} to cart!`);
        closeProductModal();
    });

    // Close button handler
    modal.querySelector(".modal-close").addEventListener("click", closeProductModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeProductModal();
    });

    modal.classList.add("active");
    document.body.classList.add("modal-open");

}

function closeProductModal() {
    const modal = document.getElementById("productModal");
    if (modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }
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

