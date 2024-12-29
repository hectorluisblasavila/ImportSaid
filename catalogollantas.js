const contenedorLlantas = document.getElementById('contenedor-llantas');

stockllantas.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add('producto');
    div.innerHTML = `
        <img class="imagen" src="${producto.imagen}" alt="">
        <h3 class="titulop info">Diametro: ${producto.diametro}</h3>
        <p class="info">Marca: ${producto.marca}</p>
        <h5 class="info">Ancho: ${producto.ancho}</h5>
        <P class="info">Perfil: ${producto.perfil}</P>
        <P class="info">PR: ${producto.PR}</P>
        <P class="info">Codigo: ${producto.codigo}</P>
        <p class="precioProducto info">Precio: S/.${producto.precio}.00</p>
        <button id="agregar${producto.id}" class="boton-agregar" href="">WhatsApp</button>
    `;
    contenedorLlantas.appendChild(div);

    // Obtener el botón por ID dinámico
    const botonAgregar = document.getElementById(`agregar${producto.id}`);
    botonAgregar.addEventListener('click', () => {
        // Crear el mensaje para WhatsApp
        const mensaje = `Hola, estoy interesado en la siguiente llanta:%0A
        - *Diámetro:* ${producto.diametro}%0A
        - *Marca:* ${producto.marca}%0A
        - *Ancho:* ${producto.ancho}%0A
        - *Perfil:* ${producto.perfil}%0A
        - *PR:* ${producto.PR}%0A
        - *Código:* ${producto.codigo}%0A
        - *Precio:* S/. ${producto.precio}.00%0A
¿Está disponible?`;

        // Número de WhatsApp (reemplaza con el tuyo)
        const numeroWhatsApp = '+51923435438'; // Incluye el código de tu país

        // Generar el enlace de WhatsApp
        const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(url, '_blank');
    });
});
