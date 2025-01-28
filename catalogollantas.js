const contenedorllantas = document.getElementById('contenedor-llantas');
const baseURL = "https://hectorluisblasavila.github.io/ImportSaid/";

stockllantas.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('producto');
    div.innerHTML = `
    <a href="producto.html?id=${producto.codigo}" class="boton-ver">
        <img class="imagen" src="${producto.imagen}" alt="Imagen de la llanta">
        </a>
        <h3 class="titulop info">Diametro: ${producto.Diametro}</h3>
        <h5 class="info">Ancho: ${producto.ancho}</h5>
        <h4 class="info">Perfil: ${producto.Perfil}</h4>
        <p class="info">PR: ${producto.PR}</p>
        <h6 class="info">Marca: ${producto.marca}</h6>
        <p class="info">Codigo: ${producto.codigo}</p>
        <p class="precioProducto info">Precio: S/.${Math.round(producto.precio/5)*5}</p>
        <p class="precioProductoAfiliado info">Afiliado: S/.${Math.round(producto.precio*0.95/5)*5}</p>
    <span class="info">Cantidad:</span>
    <input type="number" class="quantity-input" value="1" min="1">
  
    <!-- Nuevo enlace -->
        <button class="boton-agregar" href="#">WhatsApp</button>
    `;
    contenedorllantas.appendChild(div);

    // Aquí agregamos el evento a cada botón de WhatsApp dinámicamente
    const botonAgregar = div.querySelector('.boton-agregar');
    botonAgregar.addEventListener('click', () => {
        // Obtener la cantidad seleccionada
    const cantidadInput = div.querySelector('.quantity-input');
    const cantidad = parseInt(cantidadInput.value);
      const precioNoDecimales = Math.round(producto.precio/5)*5;
    // Calcular el total
    const total = cantidad * precioNoDecimales;
  
        // Crear el mensaje de WhatsApp con los datos del producto
        const mensaje = `Hola, estoy interesado en el siguiente producto:%0A
        - *Diametro:* ${producto.Diametro}%0A
        - *Ancho:* ${producto.ancho}%0A
        - *Perfil:* ${producto.Perfil}%0A
        - *PR:* ${producto.PR}%0A
        - *Marca:* ${producto.marca}%0A
        - *Código:* ${producto.codigo}%0A
        - *Precio:* S/. ${Math.round(producto.precio/5)*5}.00%0A
        - *Cantidad:* ${cantidad}%0A
        - *Total:* S/. ${total}.00%0A
        - *Imagen:* ${baseURL}${producto.imagen}%0A
        ¿Está disponible?`;

        // Número de WhatsApp (reemplaza con el tuyo)
        const numeroWhatsApp = '+51923435438'; // Incluye el código del país

        // Generar el enlace para WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(url, '_blank');
    });
});


// Seleccionar el botón
const botonFlotante = document.getElementById('boton-flotante');

// Mostrar el botón solo cuando se haya hecho scroll hacia abajo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonFlotante.style.display = 'flex'; // Mostrar el botón
  } else {
    botonFlotante.style.display = 'none'; // Ocultar el botón
  }
});

// Evento para regresar al inicio al hacer clic en el botón
botonFlotante.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Desplazamiento suave
  });
});
