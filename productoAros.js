document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id'); // Obtener el 'id' de la URL

    const productoSeleccionado = stockAros.find(producto => producto.codigo === productoId);

    if (productoSeleccionado) {
        const detalleContainer = document.getElementById('producto-rines');
        detalleContainer.innerHTML = `
            <h2>${productoSeleccionado.marca} - ${productoSeleccionado.codigo}</h2>
            <img class="imagen" src="${productoSeleccionado.imagen}" alt="Imagen del aro">
            <p><strong>Diametro:</strong> ${productoSeleccionado.Diametro}</p>
            <p><strong>Ancho:</strong> ${productoSeleccionado.ancho}</p>
            <p><strong>PCD:</strong> ${productoSeleccionado.PCD}</p>
            <p><strong>ET:</strong> ${productoSeleccionado.ET}</p>
            <p><strong>Precio:</strong> S/. ${productoSeleccionado.precio}</p>
            <button class="pedir-whatsapp">WhatsApp</button>
        `;

        const botonAgregar = detalleContainer.querySelector('.pedir-whatsapp');
        botonAgregar.addEventListener('click', () => {
            const baseURL = "https://www.importsaid.com/";
            const cantidad = 1;
            const precioNoDecimales = Math.round(productoSeleccionado.precio / 5) * 5;
            const total = cantidad * precioNoDecimales;

            const mensaje = `Hola, estoy interesado en el siguiente producto:%0A
- *Diametro:* ${productoSeleccionado.Diametro}%0A
- *Ancho:* ${productoSeleccionado.ancho}%0A
- *PCD:* ${productoSeleccionado.PCD}%0A
- *ET:* ${productoSeleccionado.ET}%0A
- *Marca:* ${productoSeleccionado.marca}%0A
- *Código:* ${productoSeleccionado.codigo}%0A
- *Precio:* S/. ${precioNoDecimales}.00%0A
- *Cantidad:* ${cantidad}%0A
- *Total:* S/. ${total}.00%0A
- *Imagen:* ${baseURL}${productoSeleccionado.imagen}%0A
¿Está disponible?`;

            const numeroWhatsApp = '+51927668906';
            const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
            window.open(url, '_blank');
        });

    } else {
        const detalleContainer = document.getElementById('producto-detail');
        detalleContainer.innerHTML = '<p>Producto no encontrado</p>';
    }

    // ETIQUETAS OG (para SEO y compartir en redes)
    const productoSeleccionadoOG = stockAros.find(producto => producto.codigo === productoId);
    if (productoSeleccionadoOG) {
        const baseURL = "https://www.importsaid.com/";

        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');

        if (ogTitle) ogTitle.setAttribute("content", `Detalles del producto: ${productoSeleccionadoOG.marca} ${productoSeleccionadoOG.codigo}`);
        if (ogDescription) ogDescription.setAttribute("content", `Consulta detalles de este producto: diámetro ${productoSeleccionadoOG.Diametro}, ancho ${productoSeleccionadoOG.ancho}. ¡Compra ya!`);
        if (ogImage) ogImage.setAttribute("content", `${baseURL}${productoSeleccionadoOG.imagen}`);
        if (ogUrl) ogUrl.setAttribute("content", window.location.href);

        document.title = `${productoSeleccionadoOG.marca} - ${productoSeleccionadoOG.codigo}`;
    }
});
