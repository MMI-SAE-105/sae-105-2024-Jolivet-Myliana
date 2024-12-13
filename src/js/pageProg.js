// Gestion du clic sur le bouton du menu
const toggle = document.querySelector(".header__action--menu");
const nav = document.querySelector(".header__nav");
const page= document.body;

toggle.addEventListener("click", () => {
    // Ajout ou suppression de la classe pour afficher ou masquer le menu
    nav.classList.toggle("header__nav--open");

    // Mise à jour des attributs ARIA pour l'accessibilité
    const isExpanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", !isExpanded);
    nav.setAttribute("aria-hidden", isExpanded);
});

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
