document.getElementById("lastModified").innerHTML = document.lastModified;
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const hambutton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hambutton.addEventListener("click", () => {
    hambutton.classList.toggle("show");
    navigation.classList.toggle("show");
});


window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        navigation.classList.remove("show");
        hambutton.classList.remove("show");
    }
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Arequipa Peru Temple",
        location: "Arequipa Peru Temple",
        dedicated: "2019, December, 15",
        area: 26969,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg"
    },

    {
        templeName: "Buenos Aires Argentina Temple",
        location: "Buenos Aires Argentina Temple",
        dedicated: "1986, January, 17",
        area: 30659,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
    },

    {
        templeName: "Guadalajara Mexico Temple",
        location: "Guadalajara Mexico Temple",
        dedicated: "2001, April, 29",
        area: 10700,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/guadalajara-mexico-temple/guadalajara-mexico-temple-17313.jpg"
    },
];

const templesContainer = document.querySelector("#temple-cards");


function displayTemples(templesArray) {
    templesContainer.innerHTML = ""; 

    templesArray.forEach(temple => {
      
        const card = document.createElement("div");
        card.classList.add("temple-card");

        
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy";

        
        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        
        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        
        const dedicated = document.createElement("p");
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

       
        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;

        
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        
        templesContainer.appendChild(card);
    });
}


displayTemples(temples);




function showOld() {
    const oldTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year < 1900;
    });
    displayTemples(oldTemples);
    document.querySelector("#headertext").textContent = document.querySelector("#old").textContent;
}

function showNew() {
    const newTemples = temples.filter(t => {
        const year = parseInt(t.dedicated.split(",")[0]);
        return year > 2000;
    });
    displayTemples(newTemples);
    document.querySelector("#headertext").textContent = document.querySelector("#new").textContent;
}

function showLarge() {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
    document.querySelector("#headertext").textContent = document.querySelector("#large").textContent;
}

function showSmall() {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
    document.querySelector("#headertext").textContent = document.querySelector("#small").textContent;
}

function showAll() {
    displayTemples(temples);
    document.querySelector("#headertext").textContent = document.querySelector("#home").textContent;
}


document.querySelector("#home").addEventListener("click", showAll);
document.querySelector("#old").addEventListener("click", showOld);
document.querySelector("#new").addEventListener("click", showNew);
document.querySelector("#large").addEventListener("click", showLarge);
document.querySelector("#small").addEventListener("click", showSmall);
