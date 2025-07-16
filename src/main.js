document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".c-header__nav a");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      links.forEach((l) => l.classList.remove("is-active"));
      e.currentTarget.classList.add("is-active");
    });
  });

  const prevButton = document.querySelector('.c-button[aria-label="Назад"]');
  const nextButton = document.querySelector('.c-button[aria-label="Вперёд"]');

  const sliderContainer = document.querySelector(".c-slider__cards");

  prevButton.addEventListener("click", () => {
    sliderContainer.scrollBy({
      left: -sliderContainer.offsetWidth,
      behavior: "smooth",
    });
  });

  nextButton.addEventListener("click", () => {
    sliderContainer.scrollBy({
      left: sliderContainer.offsetWidth,
      behavior: "smooth",
    });
  });

  const menuToggle = document.querySelector(".c-header__menu-toggle");
  const nav = document.querySelector(".c-header__nav");

  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.add("is-open");
  });

  document.body.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      nav.classList.remove("is-open");
    }
  });

});
