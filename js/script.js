// Inicializar el primer Swiper
const swiper = new Swiper(".mySwiper-1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".header-next",
    prevEl: ".header-prev",
  },
});

// Inicializar el segundo Swiper
const swiper1 = new Swiper("#swiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper1 .main-next-1",
    prevEl: "#swiper1 .main-prev-1",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

const swiper2 = new Swiper("#swiper2", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper2 .main-next-2",
    prevEl: "#swiper2 .main-prev-2",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
  },
});

const swiper3 = new Swiper("#swiper3", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper3 .main-next-3",
    prevEl: "#swiper3 .main-prev-3",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
  },
});

// Seleccionar inputs de pestañas
const tabInputs = document.querySelectorAll(".tabInput");

tabInputs.forEach((input) => {
  input.addEventListener("change", () => {
    const id = input.value;
    const thisSwiper = document.getElementById("swiper" + id);
    thisSwiper.swiper.update();
    thisSwiper.swiper.slideTo(0);
  });
});
