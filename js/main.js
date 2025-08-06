new WOW().init();
// burger menu //

const burgerOpen = document.querySelector(".burger__button");
const navMenu = document.querySelector(".nav__menu");
const menuClose = document.querySelector(".menu__button");
const overlay = document.querySelector(".overlay");

const openMenu = function () {
  navMenu.classList.toggle("nav__menu--show");
  overlay.classList.toggle("overlay--active");
};

const closeMenu = function () {
  navMenu.classList.remove("nav__menu--show");
  overlay.classList.remove("overlay--active");
};

burgerOpen.addEventListener("click", function () {
  openMenu();
});

menuClose.addEventListener("click", function () {
  closeMenu();
});
// select //

const selectElements = document.querySelectorAll(".select__custom");
const onCloseSelect = (control, target) => {
  const didClickedOutside = !control.contains(target);
  if (didClickedOutside) {
    control.classList.remove("select--active");
  }
};

const onOpenSelect = (control) => control.classList.toggle("select--active");
const onChangeSelect = (option, selectControl) => {
  const triggelControl = selectControl.querySelector(".select__trigger");
  triggelControl.textContent = option.textContent;
  onCloseSelect(selectControl);
};

document.addEventListener("click", (evt) => {
  selectElements.forEach((el) => onCloseSelect(el, evt.target));
});

selectElements.forEach((el) => {
  const selectControl = el;
  const optionsList = selectControl.querySelectorAll(".option");
  const triggelControl = selectControl.querySelector(".select__trigger");

  triggelControl.addEventListener("click", () => onOpenSelect(selectControl));
  optionsList.forEach((option) => {
    option.addEventListener("click", () =>
      onChangeSelect(option, selectControl)
    );
  });
});
// range //

const rangeSlider = document.querySelector(".slider__range");
const rangeValue = document.querySelector(".slider__value");
rangeValue.innerHTML = rangeSlider.value;

rangeSlider.oninput = function () {
  rangeValue.innerHTML = this.value;
};

// smooth scroll for anchor links and close mobile menu
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      // Close mobile menu if open
      navMenu.classList.remove("nav__menu--show");
      overlay.classList.remove("overlay--active");

      // Smooth scroll to target
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
