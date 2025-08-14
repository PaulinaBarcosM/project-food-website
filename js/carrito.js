// === Funciones reutilizables ===

// obtener carrito del localStorage
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

// guardar carrito en localStorage
function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// actualizar numerito del header
function actualizarNumerito() {
  const carrito = obtenerCarrito();
  const totalCantidad = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  const numeritoMenu = document.querySelector(".boton-carrito span");
  const numeritoIndex = document.getElementById("numerito");

  if (numeritoMenu) numeritoMenu.textContent = totalCantidad;
  if (numeritoIndex) numeritoIndex.textContent = totalCantidad;
}

// === Render del carrito ===
const contenedorProductos = document.querySelector(".carrito-productos");
const contenedorVacio = document.querySelector(".carrito-vacio");
const contenedorAcciones = document.querySelector(".carrito-acciones");
const totalElemento = document.querySelector("#total");
const mensajeComprado = document.querySelector(".carrito-comprado");

function renderCarrito() {
  const carrito = obtenerCarrito();

  //ocultar mensaje al renderizar (se muestra solo despues de la compra)
  if (mensajeComprado.classList.contains("disabled")) {
    mensajeComprado.classList.add("disabled");
  }

  if (carrito.length === 0) {
    //si ya se hizo una compra, no muestra el mensaje del carrito vacio
    if (mensajeComprado.classList.contains("disabled")) {
      contenedorVacio.style.display = "block";
    } else {
      contenedorVacio.style.display = "none";
    }

    contenedorProductos.classList.add("disabled");
    contenedorAcciones.classList.add("disabled");
    totalElemento.textContent = "$0";
    actualizarNumerito();
    return;
  }

  contenedorVacio.style.display = "none";
  contenedorProductos.classList.remove("disabled");
  contenedorAcciones.classList.remove("disabled");

  contenedorProductos.innerHTML = "";

  carrito.forEach((prod) => {
    const div = document.createElement("div");
    div.classList.add("carrito-producto");
    div.innerHTML = `
        <img class="carrito-producto-imagen" src="${prod.imagen}" alt="${
      prod.nombre
    }" />
        <div class="carrito-producto-titulo">
            <small>Producto:</small>
            <h3>${prod.nombre}</h3>
        </div>
        <div class="carrito-producto-cantidad">
            <small>Cantidad:</small>
            <p>${prod.cantidad}</p>
        </div>
        <div class="carrito-producto-precio">
            <small>Precio:</small>
            <p>$${prod.precio.toLocaleString()}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small>Subtotal:</small>
            <p>$${(prod.precio * prod.cantidad).toLocaleString()}</p>
        </div>
        <button class="carrito-producto-eliminar" data-nombre="${prod.nombre}">
            <i class="bi bi-trash"></i>
        </button>
    `;
    contenedorProductos.append(div);
  });

  actualizarTotal();
  actualizarNumerito();
}

// Calcular y mostrar total
function actualizarTotal() {
  const carrito = obtenerCarrito();
  const total = carrito.reduce(
    (acc, prod) => acc + prod.precio * prod.cantidad,
    0
  );
  totalElemento.textContent = `$${total.toLocaleString()}`;
}

// === Eventos ===

// eliminar producto
document.addEventListener("click", (e) => {
  if (e.target.closest(".carrito-producto-eliminar")) {
    const nombre = e.target.closest("button").dataset.nombre;
    let carrito = obtenerCarrito();
    carrito = carrito.filter((prod) => prod.nombre !== nombre);
    guardarCarrito(carrito);
    renderCarrito();
  }
});

// vaciar carrito
document
  .querySelector(".carrito-acciones-vaciar")
  .addEventListener("click", () => {
    guardarCarrito([]);
    renderCarrito();
    mensajeComprado.classList.add("disabled");
  });

// Comprar ahora
const botonComprarAhora = document.querySelector(".carrito-acciones-comprar");
botonComprarAhora.addEventListener("click", () => {
  const carrito = obtenerCarrito();
  if (carrito.length === 0) {
    alert("Tu carrito está vacío");
  } else {
    guardarCarrito([]);
    mensajeComprado.classList.remove("disabled");
    contenedorVacio.style.display = "none";
    renderCarrito();
  }
});

// Render inicial
renderCarrito();
