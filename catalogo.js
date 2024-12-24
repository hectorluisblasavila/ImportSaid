const contenedorProductos = document.getElementById('contenedor-aros')

stockAros.forEach(producto => {
	const div = document.createElement("div")
	div.classList.add('producto')
	div.innerHTML = `
	<img class="imagen" src=${producto.imagen} alt="">
	<h3 class="titulop info">Diametro: ${producto.medida}</h3>
	<p class="info">Marca: ${producto.marca}</p>
	<p class="info">PCD: ${producto.PCD}</p>
	<h5 class="info" id="anchoaros">Ancho: ${producto.ancho}</h5>
	<p class="info">ET: ${producto.ET}</p>
	<P class="info">Codigo: ${producto.codigo}</P>
	<p class="precioProducto info">Precio: S/.${producto.precio}.00</p>
	<button id="agregar${producto.id}" class="boton-agregar" href="">AGREGAR</button>
	`
	contenedorProductos.appendChild(div)
		

});




