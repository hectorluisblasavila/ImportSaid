const contenedorllantas = document.getElementById('contenedor-llantas');
const baseURL = "https://hectorluisblasavila.github.io/ImportSaid/";

stockllantas.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('producto');
    div.innerHTML = `
    <a href="producto.html?id=${producto.codigo}" class="boton-ver">
        <img class="imagen" src="${producto.imagen}" alt="Imagen de la llanta">
        <h3 class="titulop info">Diametro: ${producto.Diametro}</h3>
        <h5 class="info">Ancho: ${producto.ancho}</h5>
        <h4 class="info">Perfil: ${producto.Perfil}</h4>
        <p class="info">PR: ${producto.PR}</p>
        <p class="info">Marca: ${producto.marca}</p>
        <p class="info">Codigo: ${producto.codigo}</p>
        <p class="precioProducto info">Precio: S/.${producto.precio}</p>
    </a> <!-- Nuevo enlace -->
        <button id="agregar${producto.id}" class="boton-agregar" href="#">WhatsApp</button>
    `;
    contenedorllantas.appendChild(div);

    // Aquí agregamos el evento a cada botón de WhatsApp dinámicamente
    const botonAgregar = div.querySelector('.boton-agregar');
    botonAgregar.addEventListener('click', () => {
        // Crear el mensaje de WhatsApp con los datos del producto
        const mensaje = `Hola, estoy interesado en el siguiente producto:%0A
        - *Diametro:* ${producto.Diametro}%0A
        - *Ancho:* ${producto.ancho}%0A
        - *Perfil:* ${producto.Perfil}%0A
        - *PR:* ${producto.PR}%0A
        - *Marca:* ${producto.marca}%0A
        - *Código:* ${producto.codigo}%0A
        - *Precio:* S/. ${producto.precio}.00%0A
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
