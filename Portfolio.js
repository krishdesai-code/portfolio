const openMenu = document.getElementById("openMenu");
const navMenu = document.getElementById("navMenu");

let isOpen = false;

openMenu.addEventListener("click", () => {
    if (!isOpen) {
        navMenu.classList.add("show");
        navMenu.classList.remove("remove");
        isOpen = true;
    } else {
        navMenu.classList.remove("show");
        navMenu.classList.add("remove");
        isOpen = false;
    }
});