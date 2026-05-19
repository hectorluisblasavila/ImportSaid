const contenedorProductos = document.getElementById('contenedor-aros');

// Generar las tarjetas de productos
stockAros.forEach(producto => {
  const div = document.createElement("div");
  div.classList.add('producto');
  div.innerHTML = `

  <a href="productoAros.html?id=${producto.codigo}" class="boton-ver">
    <img class="imagen" src=${producto.imagen} alt="${producto.alt}">
    <h3 class="titulop info">Diametro: ${producto.Diametro}</h3>
    <h5 class="info" id="anchoaros">Ancho: ${producto.ancho}</h5>
    <h6 class="info">PCD: ${producto.PCD}</h6>
    <p class="info">ET: ${producto.ET}</p>
    <p class="info">Marca: ${producto.marca}</p>
    <p class="info">Codigo: ${producto.codigo}</p>
    <p class="precioProducto info">Precio: S/.${producto.precio}.00</p>
    </a>
    <p class="precioProductoAfiliado info">Afiliado: S/.${Math.round(producto.precio*0.947/5)*5}</p>
    <button class="boton-agregar">WhatsApp</button>
  `;
  contenedorProductos.appendChild(div);

  // Agregar funcionalidad al botón "AGREGAR"
  const botonAgregar = div.querySelector('.boton-agregar');
  botonAgregar.addEventListener('click', () => {
    // Crear el mensaje de WhatsApp
    const mensaje = `Hola, estoy interesado en el siguiente producto:%0A
    - *Diametro:* ${producto.Diametro}%0A
    - *Ancho:* ${producto.ancho}%0A
    - *PCD:* ${producto.PCD}%0A
    - *ET:* ${producto.ET}%0A
    - *Marca:* ${producto.marca}%0A
    - *Código:* ${producto.codigo}%0A
    - *Precio:* S/. ${producto.precio}.00%0A
¿Está disponible?`;

    // Número de WhatsApp
    const numeroWhatsApp = '+51923435438'; // Reemplázalo con tu número

    // Generar el enlace para WhatsApp
    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Abrir WhatsApp en una nueva pestaña
    window.open(url, '_blank');
  });
});



// Seleccionar el botón
const botonFlotanterines = document.getElementById('boton-flotante-rines');

// Mostrar el botón solo cuando se haya hecho scroll hacia abajo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonFlotanterines.style.display = 'flex'; // Mostrar el botón
  } else {
    botonFlotanterines.style.display = 'none'; // Ocultar el botón
  }
});

// Evento para regresar al inicio al hacer clic en el botón
botonFlotanterines.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});
