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

// ==========================Feature_block=============================
const featureWindow = document.querySelector(".feature-window");
const sliderDots = document.querySelectorAll(".slider__dots li");
const leftArrow = document.querySelector(
  ".slider-icons__container .arrow--left",
).parentNode;
const rightArrow = document.querySelector(
  ".slider-icons__container .arrow--right",
).parentNode;
const smallScreen = window.matchMedia("(max-width: 768px)");

function intiateSlide() {
  if (!smallScreen.matches) return;
  const slides = () =>
    document.querySelectorAll(".feature-window .slider-item");
  const firstSlideClone = slides()[0].cloneNode(true);
  const lastSlideClone = slides()[slides().length - 1].cloneNode(true);

  featureWindow.appendChild(firstSlideClone);
  featureWindow.insertBefore(lastSlideClone, slides()[0]);

  let totalSlides = slides().length;
  let currentIndex = 1;

  function getSlideWidth() {
    // return featureWindow.clientWidth;
    return slides()[0].clientWidth;
  }

  function updateSlidePosition() {
    const slideWidth = getSlideWidth();
    featureWindow.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  updateSlidePosition();
  updateDots(currentIndex - 1);

  window.addEventListener("resize", () => {
    featureWindow.classList.remove("transit");
    updateSlidePosition();
  });

  updateDots(currentIndex - 1);
  function slideWindow(index) {
    let offset = -index * getSlideWidth();

    featureWindow.classList.add("transit");
    featureWindow.style.transform = `translateX(${offset}px)`;
  }

  function updateDots(index) {
    let dotIndex = index;
    console.log(`Index: ${index}`);

    if (index === totalSlides - 2) dotIndex = 0;
    if (index === -1) dotIndex = sliderDots.length - 1;
    if (index >= 0 && index < sliderDots.length) dotIndex = index;

    sliderDots.forEach((dot, i) => {
      if (i === dotIndex) dot.classList.add("active-dot");
      else dot.classList.remove("active-dot");
    });
  }

  sliderDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index + 1;
      slideWindow(currentIndex);
      updateDots(index);
    });
  });

  featureWindow.addEventListener("transitionend", () => {
    if (currentIndex === totalSlides - 1) {
      featureWindow.classList.remove("transit");
      featureWindow.style.transform = `translateX(${-getSlideWidth()}px)`;
      currentIndex = 1;
      updateDots(0);
    } else if (currentIndex === 0) {
      featureWindow.classList.remove("transit");
      featureWindow.style.transform = `translateX(-${(totalSlides - 2) * getSlideWidth()}px)`;
      currentIndex = totalSlides - 2;
      updateDots(sliderDots.length - 1);
    }
  });
  function showNext() {
    currentIndex++;
    slideWindow(currentIndex);
    updateDots(currentIndex - 1);
  }

  function showPrev() {
    currentIndex--;
    slideWindow(currentIndex);
    updateDots(currentIndex - 1);
  }

  rightArrow.addEventListener("click", showNext);
  leftArrow.addEventListener("click", showPrev);
}

intiateSlide();

const featureList = document.querySelectorAll(".feature-item__description");
const extratLargeScreen = window.matchMedia("( min-width: 768px )");

const pictures = document.querySelectorAll(".feature .picture");
function hideInactiveFeature(index) {
  pictures.forEach((picture, i) => {
    if (index === i) {
      picture.classList.add("active");
    } else {
      picture.classList.remove("active");
    }
  });
}
function navigateFeature(index) {
  if (!extratLargeScreen.matches) return;

  featureList.forEach((feature, i) => {
    console.log(`Active feature: ${i}`);
    if (index === i) feature.classList.add("feature__item--active");
    else feature.classList.remove("feature__item--active");
  });
}

featureList.forEach((feature, i) => {
  feature.addEventListener("click", () => {
    navigateFeature(i);
    hideInactiveFeature(i);
  });
});
document.querySelector(".feature").addEventListener("click", (event) => {
  event.stopPropagation();
});

// ============================Footer=============================
const footerListHeading = document.querySelectorAll(".footer-list__heading");
const footerList = document.querySelectorAll(".footer__list-wrapper");

footerListHeading.forEach((heading, i) => {
  heading.addEventListener("click", () => {
    footerList[i].classList.toggle("collapsible--expanded");
  });
});
