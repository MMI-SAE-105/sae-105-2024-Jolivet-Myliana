const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");
const premierItem = document.querySelector(".carousel__item");
if (carousel) {
prevButton.addEventListener("click", () => {
const scrollAmount = premierItem.clientWidth;
carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });;
});
nextButton.addEventListener("click", () => {
const scrollAmount = premierItem.clientWidth;
carousel.scrollBy({ left: +scrollAmount, behavior: "smooth" });;
});
}
