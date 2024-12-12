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

const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const page = document.body;


if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    toggle.ariaExpanded = isClosed;
    nav.ariaHidden = isOpen;
    page.classList.toggle("noscroll", isClosed);
  });
}
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    if (isOpen) {
      page.style.overflow = "hidden";
    } else {
      page.style.overflow = "";
    }
  });
}
