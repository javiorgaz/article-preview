const footer1 = document.getElementById("footer1");
const footer2 = document.getElementById("footer2");

const nav = document.getElementById("nav");

const icon1 = document.querySelector(".icon-share-container--1");
const icon2 = document.querySelector(".icon-share-container--2");

const mediaQuery = window.matchMedia('(min-width: 768px)');

mediaQuery.addEventListener("change", handleViewportChange)


function handleViewportChange(e) {
    if(e.matches) {
        icon1.removeEventListener("click",toggleFooter);
        icon2.removeEventListener("click",toggleFooter);
        icon1.addEventListener("click",toggleNav);
        
        if(footer2.classList.contains("footer2-display")){
            footer2.classList.toggle("footer2-display");
            footer1.classList.toggle("footer1-display");
        }
        
    }else {
        icon1.addEventListener("click",toggleFooter);
        icon2.addEventListener("click", toggleFooter)
        icon1.removeEventListener("click",toggleNav);
    }
    console.log("change");
}


function toggleNav() {
    console.log("toggle nav");
    nav.classList.toggle("nav-display");
}

function toggleFooter() {
    footer2.classList.toggle("footer2-display");
    footer1.classList.toggle("footer1-display")
}

// Ejecutar al cargar la página
handleViewportChange(mediaQuery);