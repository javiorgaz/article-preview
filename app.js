const btn = document.getElementById("btn");
const footer1 = document.getElementById("footer1");
const footer2 = document.getElementById("footer2");

const icon1 = document.querySelector(".icon-share-container--1");

icon1.addEventListener("click",toggleFooter);



function toggleFooter() {
    footer2.classList.toggle("footer2-display");
    footer1.classList.toggle("footer1-display")
}