// JavaScript to toggle the menu on hamburger click
const hamburger = document.getElementById("hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});