let currentBreakPoint = window.innerWidth >= 620 ? "tablet" : "mobile";
const input = document.querySelector(".nav-menu .search-input-wrapper .input");
const inputWrapper = document.querySelector(".nav-menu .search-input-wrapper");

const menuBarContent = document.querySelector(".menu-bar__content");
const searchBlock = document.querySelector(".nav-menu .search-block");

input.addEventListener("click", () => {
  searchBlock.classList.toggle("collapsible--expanded");
  inputWrapper.classList.toggle("outline");
});

const menuBarFeatureToggler = document.querySelector(".toggler");
menuBarFeatureToggler.addEventListener("click", () => {
  menuBarContent.classList.toggle("collapsible--expanded");
});

const navMenuCloseIcon = document.querySelector(".nav-menu__close-icon");
const navMenu = document.querySelector(".nav-menu");
const menuToggle = document.querySelector(".menu-toggle");

navMenuCloseIcon.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

const smallScreens = window.matchMedia("( min-width: 620px )");

const navSearchIconContainer = document.querySelector(
  ".nav__icons .icon-container",
);

const navSearchBlock = document.querySelector(".nav__icons .search-block");

navSearchIconContainer.addEventListener("click", (event) => {
  hidePriorActiveElement();
  if (navSearchIconContainer.contains(event.target)) {
    navSearchBlock.classList.add("open");
    event.stopPropagation();
  }
});

navSearchBlock.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!navSearchBlock.contains(event.target)) {
    navSearchBlock.classList.remove("open");
  }
});

// =====================Mega-menu=============================
const megaMenu = document.querySelector(".mega-menu");
menuToggle.addEventListener("click", toggleMegaMenu);

function toggleMegaMenu(event) {
  if (window.innerWidth <= 620) {
    navMenu.classList.add("show");
    currentBreakPoint = "mobile";
  } else {
    const priorExists = checkPriorActiveElement();
    if (priorExists && priorExists !== megaMenu) {
      hidePriorActiveElement();
    }
    megaMenu.classList.toggle("open");
    currentBreakPoint = "tablet";
  }
  event.stopPropagation();
}

megaMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (!megaMenu.classList.contains(event.target)) {
    megaMenu.classList.remove("open");
  }
});

const iconEllipsis = document.querySelector(".mega-li .icon-ellipsis");
megaMenuContainer = document.querySelector(".mega-menu-container");

megaMenuContainer.addEventListener("mouseenter", () => {
  iconEllipsis.classList.add("hover-effect");
});
megaMenuContainer.addEventListener("mouseleave", () => {
  iconEllipsis.classList.remove("hover-effect");
});

function hidePriorActiveElement() {
  const active = document.querySelector(".open");
  if (active) {
    active.classList.remove("open");
    console.log("done hiding it...");
  }
}

function checkPriorActiveElement() {
  const active = document.querySelector(".open");
  return active;
}

window.addEventListener("resize", () => {
  newBreakPoint = window.innerWidth >= 620 ? "tablet" : "mobile";
  if (currentBreakPoint !== newBreakPoint) {
    menuToggle.removeEventListener("click", toggleMegaMenu);
    menuToggle.addEventListener("click", toggleMegaMenu);
    currentBreakPoint = newBreakPoint;
  }
});
