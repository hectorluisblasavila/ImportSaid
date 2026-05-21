// --- CONFIGURACIÓN DE ESTADO GLOBAL ---
let paginaActual = 1;
const productosPorPagina = 14; 
// Esta variable mantendrá los productos que pasen el filtro. Por defecto, todos.
let stockFiltrado = [...stockllantas]; 

/**
 * Función Principal para Renderizar el Catálogo
 */
function renderizarPagina(pagina) {
    const contenedorllantas = document.getElementById('contenedor-llantas');
    if (!contenedorllantas) return;

    contenedorllantas.innerHTML = ""; // Limpiar contenedor

    // 1. Calcular rango de productos usando el array FILTRADO (stockFiltrado)
    const inicio = (pagina - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosParaMostrar = stockFiltrado.slice(inicio, fin);

    if (productosParaMostrar.length === 0) {
        contenedorllantas.innerHTML = `<p style="text-align:center; width:100%; grid-column: 1/-1; padding: 20px;">
            No se encontraron llantas con esos criterios.</p>`;
    }

    // 2. Generar cada Tarjeta de Producto
    productosParaMostrar.forEach(producto => {
        const matches = producto.IC_IV.match(/(\d+)\/?(\d+)?([A-Z])/);
        let textoCarga = "No definido";
        let textoVelocidad = "No definido";

        if (matches) {
            const icPrincipal = matches[1];
            const letraVelocidad = matches[3];
            if (typeof tablaIC !== 'undefined') textoCarga = tablaIC[icPrincipal] || icPrincipal;
            if (typeof tablaIV !== 'undefined') textoVelocidad = tablaIV[letraVelocidad] || letraVelocidad;
        }

        const div = document.createElement("div");
        div.classList.add('producto');
        
        div.setAttribute('data-ancho', producto.ancho);
        div.setAttribute('data-perfil', producto.Perfil);
        div.setAttribute('data-diametro', producto.Diametro);
        div.setAttribute('data-marca', producto.marca.toUpperCase());

       // Definimos el aviso solo si la cantidad es 0
const agotadoHTML = producto.cantidad === 0 
    ? `<div class="badge-agotado">AGOTADO</div>` 
    : '';

// 1. Verificamos si la cantidad es CERO (convertimos a número por seguridad)
const esAgotado = Number(producto.cantidad) === 0;

// 2. Definimos qué mostrar
const badgeAgotado = esAgotado ? '<div class="badge-agotado">AGOTADO</div>' : '';
const claseExtraImagen = esAgotado ? 'imagen-agotada' : '';

// 3. Insertamos el HTML (Fíjate en el contenedor-imagen que envuelve la imagen)
div.innerHTML = `
    <a href="producto.html?id=${producto.codigo}" class="boton-ver"> 
        <div class="contenedor-imagen">
            ${badgeAgotado}
            <img class="imagen ${claseExtraImagen}" src="${producto.imagenes[0]}" alt="${producto.alt}">
        <div class="burbuja-stock b-izquierda precioProductoAfiliado locales">P: ${producto.S710}</div>
            
            <div class="burbuja-stock b-derecha precioProductoAfiliado locales">S: ${producto.S1943}</div>
             <div class="moneda-comision " title="Tu comisión">
                <span class="simbolo-moneda ">S/</span>${producto.comision}
            </div>
            
            </div>
         </a>   
        
        <h3 class="titulop info"><strong>${producto.ancho}/${producto.Perfil}R${producto.Diametro} ${producto.IC_IV}</strong></h3>
        <h6 class="info"><strong>${producto.marca}</strong></h6>
        <p class="info">${producto.modelo}</p>         
        <h3 class="info precio-destacado"><strong>PRECIO: S/.${producto.precio}</strong></h3> 
        <p class="info precioProductoAfiliado pminimo"><strong>P. Minimo: S/.</strong>${producto.pMinimo}</p>
        <p class="info solo-admin"> <strong>P. Costo: S/. </strong>${Math.ceil(parseFloat(String(producto.costo).replace(',', '.')) || 0)}</p>
        <p class="info"><strong>Stock: </strong>${producto.cantidad}</p>
   
    
    <p class="info solo-admin ">Codigo: ${producto.codigo}</p>


<div class="boton-ver"> <div class="control-cantidad">
        <span class="info">Comprar:</span>
        <button type="button" class="btn-cantidad">-</button>
        <input type="number" 
               class="quantity-input" 
               value="1" 
               data-stock="${producto.cantidad}">
        <button type="button" class="btn-cantidad">+</button>
    </div>

    

</div>






    <button class="boton-agregar btn-whatsapp">
    
    <span>COMPRAR:</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#ffffff">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
     </button>
`;

               // --- EVENTO WHATSAPP ---

        const botonAgregar = div.querySelector('.boton-agregar');

        botonAgregar.addEventListener('click', () => {

            const cantidadInput = div.querySelector('.quantity-input');

            const cantidad = parseInt(cantidadInput.value) || 1;

            const precioUnitario = Math.round(producto.precio / 5) * 5;

            const total = cantidad * precioUnitario;



            const urlProducto = `https://hectorluisblasavila.github.io/tirux/producto.html?id=${producto.codigo}`;



            const mensajeTexto = `*¡Hola! Nuevo Pedido* %0A%0A` +

                `*Producto:* ${producto.ancho}/${producto.Perfil}R${producto.Diametro} ${producto.IC_IV}%0A` +

                `*Marca:* ${producto.marca} %0A` +

                `*Modelo:* ${producto.modelo}%0A` +

                `*Código:* \`${producto.codigo}\`%0A%0A` +

                `--------------------------%0A` +

                `*Precio Unit:* S/. ${precioUnitario}.00%0A` +

                `*Cantidad:* ${cantidad} unidades%0A` +

                `*TOTAL:* S/. ${total}.00 %0A` +

                `--------------------------%0A%0A` +

                `*Link del producto:* ${urlProducto}`;



            const numeroWhatsApp = '51927668906';

            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeTexto}`, '_blank');

        });



        contenedorllantas.appendChild(div);

    });

    actualizarControlesPaginacion();
}

/**
 * Función Actualizada de Búsqueda y Filtro
 */
const buscarllantas = () => {
    const textoDiametro = document.getElementById('buscar-llantas').value;
    const textoAncho = document.getElementById('ancho-llantas').value;
    const textoPerfil = document.getElementById('perfil-llantas').value;
    const textoMarca = document.getElementById('marca-llantas').value.toUpperCase();

    stockFiltrado = stockllantas.filter(p => {
        const coincideAncho = p.ancho.includes(textoAncho);
        const coincidePerfil = p.Perfil.includes(textoPerfil);
        const coincideDiametro = p.Diametro.includes(textoDiametro);
        const coincideMarca = p.marca.toUpperCase().includes(textoMarca);

        return (textoDiametro === "" || coincideDiametro) && 
               (textoAncho === "" || coincideAncho) && 
               (textoPerfil === "" || coincidePerfil) && 
               (textoMarca === "" || coincideMarca);
    });
// NUEVO: Guardar los códigos de los productos filtrados
    const idsFiltrados = stockFiltrado.map(p => p.codigo);
    sessionStorage.setItem('productos_filtrados', JSON.stringify(idsFiltrados));


    paginaActual = 1;
    renderizarPagina(paginaActual);
};

/**
 * FUNCIÓN PARA LIMPIAR FILTROS
 */
const limpiarFiltros = () => {
    // 1. Limpiar los valores visuales de los inputs/selects
    document.getElementById('buscar-llantas').value = "";
    document.getElementById('ancho-llantas').value = "";
    document.getElementById('perfil-llantas').value = "";
    document.getElementById('marca-llantas').value = "";

    // 2. Resetear el stock filtrado al stock original
    stockFiltrado = [...stockllantas];

    // 3. Regresar a la página 1 y volver a pintar
    paginaActual = 1;
    renderizarPagina(paginaActual);
};

/**
 * Función para crear botones de paginación basados en stockFiltrado
 */
function actualizarControlesPaginacion() {
    const totalPaginas = Math.ceil(stockFiltrado.length / productosPorPagina);
    
    let navTop = document.getElementById('paginacion-top');
    let navBottom = document.getElementById('paginacion-bottom');

    if (!navTop) {
        navTop = document.createElement('div');
        navTop.id = 'paginacion-top';
        navTop.className = 'paginacion-container';
        document.getElementById('contenedor-llantas').before(navTop);
    }
    if (!navBottom) {
        navBottom = document.createElement('div');
        navBottom.id = 'paginacion-bottom';
        navBottom.className = 'paginacion-container';
        document.getElementById('contenedor-llantas').after(navBottom);
    }

    navTop.innerHTML = "";
    navBottom.innerHTML = "";

    if (totalPaginas <= 1) return;

    // --- CONFIGURACIÓN DEL RANGO DINÁMICO ---
    const maxBotonesVisibles = 3; // Cuántos números se verán a los lados
    let paginaInicio = Math.max(1, paginaActual - Math.floor(maxBotonesVisibles / 2));
    let paginaFin = paginaInicio + maxBotonesVisibles - 1;

    if (paginaFin > totalPaginas) {
        paginaFin = totalPaginas;
        paginaInicio = Math.max(1, paginaFin - maxBotonesVisibles + 1);
    }

    // Función interna para fabricar botones rápidamente
    const crearBoton = (texto, destinoPagina, claseExtra = '') => {
        const btn = document.createElement('button');
        btn.innerText = texto;
        btn.className = (destinoPagina === paginaActual && !claseExtra) ? 'btn-pag activo' : `btn-pag ${claseExtra}`;
        
        // Deshabilitar si no tiene sentido hacer click (ej: Anterior estando en la pág 1)
        if (destinoPagina === paginaActual && claseExtra) {
            btn.disabled = true;
            btn.style.opacity = "0.5";
            btn.style.cursor = "not-allowed";
        }

        btn.onclick = () => {
            if (destinoPagina !== paginaActual) {
                paginaActual = destinoPagina;
                renderizarPagina(paginaActual);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };
        return btn;
    };

    // --- AGREGAR LOS BOTONES A AMBOS CONTENEDORES ---
    [navTop, navBottom].forEach(nav => {
        // 1. Botón ir al Inicio (<<) y Anterior (<)
        nav.appendChild(crearBoton('<<', 1, paginaActual === 1 ? 'btn-nav' : ''));
        nav.appendChild(crearBoton('<', Math.max(1, paginaActual - 1), paginaActual === 1 ? 'btn-nav' : ''));

        // 2. Indicador de "..." si hay páginas ocultas al inicio
        if (paginaInicio > 1) {
            const elipsis = document.createElement('span');
            elipsis.innerText = '...';
            elipsis.style.padding = '0 5px';
            nav.appendChild(elipsis);
        }

        // 3. Los botones numéricos dinámicos
        for (let i = paginaInicio; i <= paginaFin; i++) {
            nav.appendChild(crearBoton(i, i));
        }

        // 4. Indicador de "..." si hay páginas ocultas al final
        if (paginaFin < totalPaginas) {
            const elipsis = document.createElement('span');
            elipsis.innerText = '...';
            elipsis.style.padding = '0 5px';
            nav.appendChild(elipsis);
        }

        // 5. Botón Siguiente (>) y Fin (>>)
        nav.appendChild(crearBoton('>', Math.min(totalPaginas, paginaActual + 1), paginaActual === totalPaginas ? 'btn-nav' : ''));
        nav.appendChild(crearBoton('>>', totalPaginas, paginaActual === totalPaginas ? 'btn-nav' : ''));
    });
}
/**
 Lógica del Botón Flotante
 */
const configurarBotonFlotante = () => {
    const botonFlotante = document.getElementById('boton-flotante');
    if (!botonFlotante) return;
    window.addEventListener('scroll', () => {
        botonFlotante.style.display = (window.scrollY > 200) ? 'flex' : 'none';
    });
    botonFlotante.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    // Vincular los eventos de los filtros
    const filtrosIds = ['buscar-llantas', 'ancho-llantas', 'perfil-llantas', 'marca-llantas'];
    filtrosIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', buscarllantas);
    });

    // VINCULAR EL BOTÓN DE LIMPIAR FILTROS
    const btnLimpiar = document.getElementById('btn-limpiar');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarFiltros);
    }

    renderizarPagina(paginaActual);
    configurarBotonFlotante();
});

// Validación de rango
const inputDiametro = document.getElementById('buscar-llantas');
if (inputDiametro) {
    inputDiametro.addEventListener('input', function () {
        let valor = this.value.replace(/\D/g, ''); 
        if (valor.length > 2) valor = valor.slice(0, 2);
        if (valor.length === 2 && (parseInt(valor) < 12 || parseInt(valor) > 22)) { 
            alert("Solo se permiten números entre 12 y 22.");
            valor = ''; 
        }
        this.value = valor;
    });
}





document.addEventListener('input', function (e) {
    // 1. Lógica para el Input de Precio (Simulador)
    if (e.target.classList.contains('input-venta-simulador')) {
        const card = e.target.closest('.boton-ver');
        const precioVenta = Number(e.target.value);
        const costo = Number(e.target.dataset.costo.replace(',', '.'));
        
        // Obtener cantidad actual
        const inputCant = card.querySelector('.quantity-input');
        const cantidad = inputCant ? Number(inputCant.value) : 1;

        // Calcular comisión (20% del margen)
        const resultado = (precioVenta > costo) ? ((precioVenta - costo) * 0.2 * cantidad).toFixed(2) : '0.00';
        
        // Mostrar resultado
        card.querySelector('.comision-span').innerText = resultado;
    }

    // 2. Lógica para el Input de Cantidad
    if (e.target.classList.contains('quantity-input')) {
        const card = e.target.closest('.boton-ver');
        const stockReal = Number(e.target.dataset.stock);
        const limite = stockReal > 0 ? stockReal : 1;

        // Validaciones de cantidad
        if (e.target.value !== '' && Number(e.target.value) < 1) e.target.value = 1;
        if (Number(e.target.value) > limite) e.target.value = limite;

        // Avisar a la calculadora para que actualice el total
        const inputPrecio = card.querySelector('.input-venta-simulador');
        if (inputPrecio && inputPrecio.value !== '') {
            // Re-disparamos el evento de forma controlada para la calculadora
            const event = new Event('input', { bubbles: true });
            inputPrecio.dispatchEvent(event);
        }
    }
});

// 3. Lógica para los botones [+] y [-]
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('btn-cantidad')) {
        const isMas = e.target.innerText === '+';
        const input = isMas ? e.target.previousElementSibling : e.target.nextElementSibling;
        const stock = Number(input.dataset.stock);
        const limite = stock > 0 ? stock : 1;
        let valor = Number(input.value);

        if (isMas && valor < limite) {
            input.value = valor + 1;
        } else if (!isMas && valor > 1) {
            input.value = valor - 1;
        }
        
        // Disparar evento input para activar la lógica de arriba
        input.dispatchEvent(new Event('input', { bubbles: true }));
    }
});


document.getElementById('busqueda-medida').addEventListener('input', function(e) {
    let valor = e.target.value;
    
    const inputAncho = document.getElementById('ancho-llantas');
    const inputPerfil = document.getElementById('perfil-llantas');
    const inputDiametro = document.getElementById('buscar-llantas');

    // Limpiar antes de procesar
    inputAncho.value = "";
    inputPerfil.value = "";
    inputDiametro.value = "";

    if (valor.length > 0) {
        // 1. Siempre los primeros 3 son Ancho (Ej: 205...)
        inputAncho.value = valor.substring(0, 3);

        if (valor.length === 4) {
            // Si solo hay 4 dígitos (Ej: 2055), no lo pongas en diámetro aún 
            // para que no oculte todo. Solo filtra por Ancho.
        } 
        else if (valor.length === 5) {
            // Si hay 5 dígitos (Ej: 19514), comprobamos si es una llanta SIN perfil
            // Normalmente los diámetros son 13, 14, 15, 16, 17, 18, 20, 22.
            let posibleDiametro = valor.substring(3, 5);
            if (posibleDiametro >= 12 && posibleDiametro <= 24) {
                inputDiametro.value = posibleDiametro;
            } else {
                // Si no parece un diámetro, lo tomamos como inicio de perfil
                inputPerfil.value = posibleDiametro;
            }
        } 
        else if (valor.length >= 6) {
            // A partir de 6 dígitos ya es claro: Ancho + Perfil + Diámetro
            inputPerfil.value = valor.substring(3, 5);
            inputDiametro.value = valor.substring(5, 7);
        }
    }

    // Ejecuta la búsqueda de tu catálogo
    buscarllantas();
});

/*
<div class="calculadora-vendedor">
        <hr>
        <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 5px;">Simulador de Ganancia:</label>
        <input type="number" 
               class="input-venta-simulador" 
               placeholder="S/ Precio venta" 
               data-costo="${producto.costo}">
        
        <p class="comision-label">
            Tu Comisión: <span class="comision-monto">S/ <span class="comision-span">0.00</span></span>
        </p>
    </div>*/
    