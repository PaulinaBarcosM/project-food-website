const hamburguesas = [
  { nombre: "Alfajor", precio: 8000, imagen: "./img-food/food1.png" },
  { nombre: "BBQ Bacon", precio: 9500, imagen: "./img-food/food3.png" },
  { nombre: "Big Mac", precio: 8000, imagen: "./img-food/food2.png" },
  { nombre: "Extra bacon", precio: 5000, imagen: "./img-food/slider1.png" },
];

const burritos = [
  { nombre: "Burrito Clásico", precio: 7500, imagen: "./img-food/food4.png" },
  { nombre: "Burrito Veggie", precio: 7500, imagen: "./img-food/food5.png" },
  { nombre: "Burrito de Mar", precio: 8000, imagen: "./img-food/food6.png" },
];

const variedad = [
  {
    nombre: "Langostinos al plato",
    precio: 10500,
    imagen: "./img-food/food7.png",
  },
  { nombre: "Brochetas", precio: 10000, imagen: "./img-food/food8.png" },
  { nombre: "Pizza Individual", precio: 3000, imagen: "./img-food/food9.png" },
];

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

// === Carrito ===
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
