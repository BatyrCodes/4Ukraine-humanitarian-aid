// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// <!--Sliders -->
const swiper = new Swiper(".image-slider", {
  // If we need pagination
  effect: "cube",
  cubeEffect: {
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  //Автопрокрутка
  autoplay: {
    delay: 1800,
    // Пауза между прокруткой
    stopOnlastSlide: true,
    // Отключить после ручного переключение
    disableOnInteraction: false,
  },
  speed: 2000,
});
