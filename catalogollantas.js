const contenedorllantas = document.getElementById('contenedor-llantas');

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
        <button id="agregar${producto.id}" class="boton-agregar" href="">AGREGAR</button>
    `;
    contenedorllantas.appendChild(div);
});

