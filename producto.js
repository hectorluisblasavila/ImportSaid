
// producto.js
document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id'); // Obtener el 'id' de la URL

    // Buscar el producto en el array de stockllantas
    const productoSeleccionado = stockllantas.find(producto => producto.codigo === productoId);

    if (productoSeleccionado) {
        // Insertar los detalles del producto en la página
        const detalleContainer = document.getElementById('producto-detail');
        detalleContainer.innerHTML = `
            <img class="imagen" src="${productoSeleccionado.imagen}" alt="Imagen de la llanta">
            <h2>${productoSeleccionado.marca} - ${productoSeleccionado.codigo}</h2>
            <p><strong>Diametro:</strong> ${productoSeleccionado.Diametro}</p>
            <p><strong>Ancho:</strong> ${productoSeleccionado.ancho}</p>
            <p><strong>Perfil:</strong> ${productoSeleccionado.Perfil}</p>
            <p><strong>PR:</strong> ${productoSeleccionado.PR}</p>
            <p><strong>Precio:</strong> S/. ${productoSeleccionado.precio}</p>
            <a href="https://wa.me/+51923435438?text=Estoy%20interesado%20en%20el%20producto%20${productoSeleccionado.codigo}" target="_blank">Contactar por WhatsApp</a>
        `;
    } else {
        // Si el producto no se encuentra, mostrar un mensaje de error
        const detalleContainer = document.getElementById('producto-detail');
        detalleContainer.innerHTML = '<p>Producto no encontrado</p>';
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id'); // Obtener el ID del producto desde la URL
    const productoSeleccionado = stockllantas.find(producto => producto.codigo === productoId);

    if (productoSeleccionado) {
        const baseURL = "https://hectorluisblasavila.github.io/ImportSaid/productos/";

        // Definir las propiedades de Open Graph dinámicamente
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogImage = document.querySelector('meta[property="og:image"]');
        const ogUrl = document.querySelector('meta[property="og:url"]');

        if (ogTitle) ogTitle.setAttribute("content", `Detalles del producto: ${productoSeleccionado.marca} ${productoSeleccionado.codigo}`);
        if (ogDescription) ogDescription.setAttribute("content", `Consulta detalles de este producto: diámetro ${productoSeleccionado.Diametro}, ancho ${productoSeleccionado.ancho}. ¡Compra ya!`);
        if (ogImage) ogImage.setAttribute("content", `${baseURL}${productoSeleccionado.imagen}`);
        if (ogUrl) ogUrl.setAttribute("content", window.location.href);

        // Actualiza otros elementos en la página si es necesario
        document.title = `${productoSeleccionado.marca} - ${productoSeleccionado.codigo}`;
    } else {
        console.error("Producto no encontrado. No se pueden actualizar las etiquetas OG.");
    }
});
