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
