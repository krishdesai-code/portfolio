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

let btn = document.getElementById("btnT");

btn.addEventListener('click',()=>{
    let body = document.body;
    let menu = document.getElementById("openMenu");
    let curr = "light";

    if (curr == "light") {
        body.classList.toggle("dark");
        menu.classList.toggle("darkImg");
        curr = "dark";
    }

    else
    {
        body.classList.toggle("light");
        curr = "light";
    }
    
});


let Sbtns = document.querySelectorAll(".Sbtn");

Sbtns.forEach((Sbtn) => {

Sbtn.addEventListener('click',()=>{

    let para = Sbtn.nextElementSibling;
    
    para.classList.toggle("show");
    para.classList.toggle("remove");

    if(para.classList.contains("show")){
        Sbtn.textContent = "Hide";
    }
    else{
        Sbtn.textContent = "See More";
    }

});

});