const input = document.querySelector(".search-input-wrapper .input");
const inputWrapper = document.querySelector(".search-input-wrapper");

const collapsibles = document.querySelector(".menu-bar__content");
const searchBlock = document.querySelector(".search-block");

input.addEventListener("click", () => {
  searchBlock.classList.toggle("collapsible--expanded");
  inputWrapper.classList.toggle("outline");
});

const menuBarFeatureToggler = document.querySelector(".toggler");
menuBarFeatureToggler.addEventListener("click", () => {
  collapsibles.classList.toggle("collapsible--expanded");
});

const menuBarToggler = document.querySelector(".nav-menu__close-icon");
const navMenu = document.querySelector(".nav-menu");
menuBarToggler.addEventListener("click", () => {
  navMenu.classList.add(".collapse");
});
