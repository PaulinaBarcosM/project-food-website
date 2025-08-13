// Inicializar el primer Swiper
const swiperHeader = new Swiper(".mySwiper-1", {
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

// Función para duplicar slides si son menos de 4
function duplicateSlidesIfNeeded(swiperSelector) {
  const swiperEl = document.querySelector(swiperSelector + " .swiper-wrapper");
  if (!swiperEl) return;

  const slides = swiperEl.children;
  if (slides.length < 4) {
    const slidesArray = Array.from(slides);
    while (swiperEl.children.length < 4) {
      slidesArray.forEach((slide) => {
        if (swiperEl.children.length < 4) {
          swiperEl.appendChild(slide.cloneNode(true));
        }
      });
    }
  }
}

// Duplicar para cada carrusel
duplicateSlidesIfNeeded("#swiper1");
duplicateSlidesIfNeeded("#swiper2");
duplicateSlidesIfNeeded("#swiper3");

// Inicializar Swipers
const swiper1 = new Swiper("#swiper1", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper1 .main-next",
    prevEl: "#swiper1 .main-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
  },
});

const swiper2 = new Swiper("#swiper2", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: "#swiper2 .main-next",
    prevEl: "#swiper2 .main-prev",
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
    nextEl: "#swiper3 .main-next",
    prevEl: "#swiper3 .main-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
  },
});

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const numeritoCarrito = document.querySelector(".boton-carrito span");

function actualizarNumerito() {
  const totalCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  if (numeritoCarrito) numeritoCarrito.textContent = totalCantidad;
}

function agregarAlCarritoPorNombre(nombreProducto) {
  const producto =
    hamburguesas.find((p) => p.nombre === nombreProducto) ||
    burritos.find((p) => p.nombre === nombreProducto) ||
    variedad.find((p) => p.nombre === nombreProducto);

  if (!producto) return alert("Producto no encontrado");

  const existe = carrito.find((item) => item.nombre === producto.nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarNumerito();
}

//evento para botones comprar slider
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-comprar-slider")) {
    const nombreProd = e.target.dataset.nombre;
    agregarAlCarritoPorNombre(nombreProd);
  }
});

actualizarNumerito();
