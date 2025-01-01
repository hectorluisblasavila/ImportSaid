
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


// Asegúrate de tener la información del producto seleccionada
const productoSeleccionado = stockllantas.find(producto => producto.codigo === params.get('id'));

if (productoSeleccionado) {
    // Construye la URL completa de la imagen y el enlace del producto
    const baseURL = "https://hectorluisblasavila.github.io/ImportSaid/";
    const imagenURL = `${baseURL}assets/images/${productoSeleccionado.imagen}`;
    const productoURL = `${baseURL}producto.html?id=${productoSeleccionado.codigo}`;

    // Actualiza las etiquetas OG dinámicamente

    document.querySelector('meta[property="og:image"]').setAttribute("content", imagenURL);
    document.querySelector('meta[property="og:url"]').setAttribute("content", productoURL);
}
