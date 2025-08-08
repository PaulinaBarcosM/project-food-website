document.addEventListener("DOMContentLoaded", () => {
  const hamburguesas = [
    {
      nombre: "Clásica",
      descripcion:
        "Carne 100% vacuna, queso cheddar y salsa especial de alioli",
      precio: 8000,
      imagen: "./img-food/food1.png",
      opcion: "*puede salir con medallon veggie simil carne*",
    },
    {
      nombre: "BBQ Bacon",
      descripcion: "Carne, queso cheddar, panceta crocante y salsa BBQ",
      precio: 9500,
      imagen: "./img-food/food3.png",
    },
    {
      nombre: "Big Mac",
      descripcion:
        "Hamburguesa de carne smalleada con doble cheddar, rucula, hongos y queso azul",
      precio: 8000,
      imagen: "./img-food/food2.png",
    },
  ];

  const burritos = [
    {
      nombre: "Burrito Clásico",
      descripcion:
        "Tortilla de trigo rellena de carne, arroz, porotos y guacamole",
      precio: 7500,
      imagen: "./img-food/food4.png",
      opcion: "*opcional: extra jalapeños*",
    },
    {
      nombre: "Burrito Veggie",
      descripcion:
        "Relleno de tofu crocante con pimientos salteados, arroz, guacamole y portos negros",
      precio: 7500,
      imagen: "./img-food/food5.png",
    },
    {
      nombre: "Burrito de Mar",
      descripcion:
        "Langostino, carne y arroz salteado con pimientos, guacamole, porotos y queso",
      precio: 8000,
      imagen: "./img-food/food6.png",
    },
  ];

  const variedad = [
    {
      nombre: "Langostinos al plato",
      descripcion:
        "Salteado de langostinos con cebolla morada, lechuga, papas, perejil y salsa picante",
      precio: 10500,
      imagen: "./img-food/food7.png",
    },
    {
      nombre: "Brochetas",
      descripcion:
        "Brochetas de pollo o carne con pimientos y cebollas asadas acompañado de guarnición",
      precio: 10000,
      imagen: "./img-food/food8.png",
      opcion: "*consultar por guarnición disponible*",
    },
    {
      nombre: "Pizza Individual",
      descripcion: "Pizza de mozzarella con salame en rodajas",
      precio: 3000,
      imagen: "./img-food/food9.png",
      opcion: "*consultar por otros sabores*",
    },
  ];

  const contHamburguesa = document.getElementById("menu-hamburguesas");
  const contBurritos = document.getElementById("menu-sandwiches");
  const contVariedad = document.getElementById("menu-variedad");

  function renderizarMenu(array, contenedor) {
    contenedor.innerHTML = "";

    array.forEach((producto) => {
      //crear tarjeta
      const card = document.createElement("div");
      card.classList.add("producto-card");

      //imagen
      const img = document.createElement("img");
      img.src = producto.imagen;
      img.alt = producto.nombre;
      img.classList.add("producto-imagen");

      //nombre
      const titulo = document.createElement("h3");
      titulo.textContent = producto.nombre;

      //descripción
      const desc = document.createElement("p");
      desc.textContent = producto.descripcion;

      // Opción extra
      const opcion = document.createElement("small");
      if (producto.opcion) {
        opcion.textContent = producto.opcion;
      }

      //precio
      const precio = document.createElement("p");
      precio.classList.add("producto-precio");
      precio.textContent = `$${producto.precio}`;

      //boton agregar
      const boton = document.createElement("button");
      boton.classList.add("btn-agregar");
      boton.innerHTML = `<i class="fas fa-shopping-cart"></i> Quiero esta!`;

      // 🛒 Agregar evento al botón
      //boton.addEventListener("click", () => {
      //agregarAlCarrito(producto);
      //});

      // Agregar elementos a la tarjeta
      card.appendChild(img);
      card.appendChild(titulo);
      card.appendChild(desc);
      if (producto.opcion) {
        card.appendChild(opcion);
      }
      card.appendChild(precio);
      card.appendChild(boton);

      // Agregar tarjeta al contenedor
      contenedor.appendChild(card);
    });
  }

  renderizarMenu(hamburguesas, contHamburguesa);
  renderizarMenu(burritos, contBurritos);
  renderizarMenu(variedad, contVariedad);
});
