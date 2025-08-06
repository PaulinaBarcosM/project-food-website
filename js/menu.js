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
      imagen: "./img-food/food4.png",
    },
  ];

  const contHamburguesa = document.getElementById("menu-hamburguesas");

  function renderizarMenu(array, contenedor) {
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

      // Opción extra (si existe)
      if (producto.opcion) {
        const opcion = document.createElement("small");
        opcion.textContent = producto.opcion;
        card.appendChild(opcion);
      }

      //precio
      const precio = document.createElement("p");
      precio.classList.add("producto-precio");
      precio.textContent = `$${producto.precio}`;

      //boton agregar
      const boton = document.createElement("button");
      boton.textContent = "Quiero esta";
      boton.classList.add("btn-agregar");

      // Agregar elementos a la tarjeta
      card.appendChild(img);
      card.appendChild(titulo);
      card.appendChild(desc);
      card.appendChild(precio);
      card.appendChild(boton);

      // Agregar tarjeta al contenedor
      contenedor.appendChild(card);
    });
  }

  renderizarMenu(hamburguesas, contHamburguesa);
});
