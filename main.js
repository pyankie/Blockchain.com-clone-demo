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

const smallScreen = window.matchMedia("(max-width: 768px)");
const features = document.querySelectorAll(".feature");
const getScreenWidth = () => window.innerWidth;

function cleanupSlider(feature) {
  const featureWindow = feature.querySelector(".feature-window");
  const slides = feature.querySelectorAll(".feature-window .slider-item");
  const initialSlides = 4;

  if (slides.length > initialSlides) {
    slides[0].remove();
    slides[slides.length - 1].remove();
  }

  featureWindow.style.transform = "";
  featureWindow.classList.remove("transit");
}
const thirdFeature = 2;
function initiateSlider() {
  const isSmallScreen = getScreenWidth() <= 760;

  features.forEach((feature, i) => {
    if (i === thirdFeature) return;

    cleanupSlider(feature);

    if (!isSmallScreen) return;

    const featureWindow = feature.querySelector(".feature-window");
    const sliderDots = feature.querySelectorAll(".slider__dots li");
    const leftArrow = feature.querySelector(
      ".slider-icons__container .arrow--left",
    ).parentNode;
    const rightArrow = feature.querySelector(
      ".slider-icons__container .arrow--right",
    ).parentNode;

    const slides = () =>
      feature.querySelectorAll(".feature-window .slider-item");

    const firstSlideClone = slides()[0].cloneNode(true);
    const lastSlideClone = slides()[slides().length - 1].cloneNode(true);

    featureWindow.appendChild(firstSlideClone);
    featureWindow.insertBefore(lastSlideClone, slides()[0]);

    let totalSlides = slides().length;
    let currentIndex = 1;
    let isTransitioning = false;

    function getSlideWidth() {
      return slides()[0].clientWidth;
    }

    function updateSlidePosition() {
      const slideWidth = getSlideWidth();
      featureWindow.style.transform = `translateX(${
        -currentIndex * slideWidth
      }px)`;
    }

    updateSlidePosition();
    updateDots(currentIndex - 1);

    function slideWindow(index) {
      let offset = -index * getSlideWidth();

      if (isTransitioning) return;
      isTransitioning = true;

      featureWindow.classList.add("transit");
      featureWindow.style.transform = `translateX(${offset}px)`;
    }

    function updateDots(index) {
      let dotIndex = index;

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
        if (isTransitioning) return;

        currentIndex = index + 1;
        slideWindow(currentIndex);
        updateDots(index);
      });
    });

    featureWindow.addEventListener("transitionend", () => {
      isTransitioning = false;

      if (currentIndex === totalSlides - 1) {
        featureWindow.classList.remove("transit");
        featureWindow.style.transform = `translateX(${-getSlideWidth()}px)`;
        currentIndex = 1;
        updateDots(0);
      } else if (currentIndex === 0) {
        featureWindow.classList.remove("transit");
        featureWindow.style.transform = `translateX(-${
          (totalSlides - 2) * getSlideWidth()
        }px)`;
        currentIndex = totalSlides - 2;
        updateDots(sliderDots.length - 1);
      }
    });

    function showNext() {
      if (isTransitioning) return;

      currentIndex++;
      slideWindow(currentIndex);
      updateDots(currentIndex - 1);
    }

    function showPrev() {
      if (isTransitioning) return;

      currentIndex--;
      slideWindow(currentIndex);
      updateDots(currentIndex - 1);
    }

    rightArrow.addEventListener("click", showNext);
    leftArrow.addEventListener("click", showPrev);
  });
}

initiateSlider();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initiateSlider();
  }, 100);
});

const extraLargeScreen = window.matchMedia("(min-width: 1200px)");

function queryFeatureDescriptions(feature) {
  return extraLargeScreen.matches
    ? feature.querySelectorAll(
        ".feature__list-container .feature-item__description",
      )
    : feature.querySelectorAll(".feature-window .feature-item__description");
}

function navigateFeatures(feature, index) {
  const pictures = feature.querySelectorAll(".picture");
  const featureDescs = queryFeatureDescriptions(feature);

  featureDescs.forEach((featureDesc, i) => {
    if (index === i) {
      featureDesc.classList.add("feature__item--active");
      pictures[i].classList.add("active");
    } else {
      featureDesc.classList.remove("feature__item--active");
      pictures[i].classList.remove("active");
    }
  });
}

function initializeFeatureListeners(features) {
  features.forEach((feature) => {
    const featureDescs = queryFeatureDescriptions(feature);

    featureDescs.forEach((featureDesc, i) => {
      featureDesc.addEventListener("click", () => {
        navigateFeatures(feature, i);
      });
    });
  });
}

initializeFeatureListeners(features);

extraLargeScreen.addEventListener("change", () => {
  initializeFeatureListeners(features);
});

// ============================Footer=============================
const footerListHeading = document.querySelectorAll(".footer-list__heading");
const footerList = document.querySelectorAll(".footer__list-wrapper");
const footer = document.querySelector(".footer");

const activeFooterItem = () =>
  footer.querySelector(".footer__list-wrapper.collapsible--expanded");

footerListHeading.forEach((heading, i) => {
  heading.addEventListener("click", () => {
    const activeItem = activeFooterItem();
    if (activeItem && activeItem !== footerList[i])
      activeItem.classList.remove("collapsible--expanded");

    footerList[i].classList.toggle("collapsible--expanded");
  });
});
