document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".c-nav__item a");

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
});
