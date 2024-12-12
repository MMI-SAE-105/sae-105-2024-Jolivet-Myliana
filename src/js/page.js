const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
const scrollAmount = premierItem.clientWidth;


if (carousel) {
prevButton.addEventListener("click", () => {
carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
});

nextButton.addEventListener("click", () => {
carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
});
}

const carousel2 = document.querySelector(".carousel__container2");
const prevButton2 = document.querySelector(".carousel__button--prev2");
const nextButton2 = document.querySelector(".carousel__button--next2");
const premierItem2 = document.querySelector(".carousel__item");
const scrollAmount2 = premierItem2.clientWidth;


if (carousel2) {
prevButton2.addEventListener("click", () => {
carousel2.scrollBy({ left: -scrollAmount2, behavior: "smooth" });;
});

nextButton2.addEventListener("click", () => {
carousel2.scrollBy({ left: +scrollAmount2, behavior: "smooth" });;
});
}

const toggle = document.querySelector(".header__action--menu");
const nav = document.querySelector(".header__nav");

// Gestion du clic sur le bouton du menu
toggle.addEventListener("click", () => {
    // Ajout ou suppression de la classe pour afficher ou masquer le menu
    nav.classList.toggle("header__nav--open");

    // Mise à jour des attributs ARIA pour l'accessibilité
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    nav.setAttribute("aria-hidden", isExpanded);
});
