document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');
    
    const productoSeleccionado = stockllantas.find(producto => producto.codigo === productoId);

    if (productoSeleccionado) {
        const detalleContainer = document.getElementById('producto-detail');
        const precioNoDecimales = Math.round(productoSeleccionado.precio / 5) * 5;

        // 1. Lógica IC/IV
        const matches = productoSeleccionado.IC_IV.match(/(\d+)\/?(\d+)?([A-Z])/);
        let textoCarga = "No definido";
        let textoVelocidad = "No definido";
        if (matches) {
            const icPrincipal = matches[1];
            const letraVelocidad = matches[3];
            if (typeof tablaIC !== 'undefined') textoCarga = tablaIC[icPrincipal] || `${icPrincipal} (ver tabla)`;
            if (typeof tablaIV !== 'undefined') textoVelocidad = tablaIV[letraVelocidad] || letraVelocidad;
        }

        // 2. Insertar el HTML
        detalleContainer.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <h2 id="tituloACopiar" style="margin: 0;">
                    Llanta ${productoSeleccionado.ancho}/${productoSeleccionado.Perfil}R${productoSeleccionado.Diametro} ${productoSeleccionado.marca}
                </h2>
                <button class="btn-copiar" onclick="copiarCualquierTexto('tituloACopiar')" title="Copiar Título">
                    <span>📋</span>
                </button>
            </div>

            <div class="producto-contenedor-flex">
                <div class="galeria-wrapper" style="position: relative; display: flex; align-items: center;">
                    <button class="btn-flecha" onclick="scrollGaleria(-1)" style="left: 5px;">&#10094;</button>
                    <div id="galeria-scroll" class="galeria-deslizable">
                        ${productoSeleccionado.imagenes.map(foto => `
                            <img src="${foto}" class="foto-slide" style="padding-bottom: 15px;" onerror="this.remove()" alt="Imagen de la llanta">
                        `).join('')}
                    </div>
                    <button class="btn-flecha" onclick="scrollGaleria(1)" style="right: 5px;">&#10095;</button>
                </div>
                
                <div class="info-detallada">
                    <div id="infoACopiar">
                    
                        <p><strong>Características:</strong></p>
                        <p>
                        <strong>🔘 Diámetro:</strong> ${productoSeleccionado.Diametro} pulgadas<br>
                        <strong>📐 Ancho:</strong> ${productoSeleccionado.ancho} mm<br>
                        <strong>📊 Perfil:</strong> ${productoSeleccionado.Perfil} %<br>
                        <strong>🏷️ Marca:</strong> ${productoSeleccionado.marca}<br>
                        <strong>🏁 Modelo:</strong> ${productoSeleccionado.modelo}<br>
                        <strong>📈 IC/IV:</strong> ${productoSeleccionado.IC_IV}<br>
                        <strong>Capacidad de Carga:</strong> ${textoCarga}<br>
                        <strong>Rango de Velocidad:</strong> ${textoVelocidad}<br>
                        <strong>PR:</strong> ${productoSeleccionado.PR}</p>
                        <p>
                        📦 Envíos a nivel nacional 🇵🇪<br>
                        💳 Aceptamos todos los medios de pago (efectivo, tarjeta, transferencias, Yape, Plin) ✅<br>
                        ⏰ Atención las 24 horas del día, los 7 días de la semana, los 365 días del año<br>
                        📲 Escríbenos para más información o cotizar tu juego de llantas 💬</p>
                    </div>

                    <button class="btn-copiar" onclick="copiarCualquierTexto('infoACopiar')" title="Copiar Características">
                        <span>📋</span>
                    </button>

                    <p><strong>Precio:</strong> S/. ${precioNoDecimales}.00</p>
                    <span class="info">Comprar:</span>
                    <input type="number" id="cantidad" class="quantity-input" value="1" min="1">
                    <button id="boton-whatsapp" class="pedir-whatsapp">Consultar por WhatsApp</button>
                </div>
            </div> 
        `;

        // 3. Agregar botones de navegación Global (Entre productos filtrados)
        const navHTML = `
            <button id="btn-prod-prev" class="nav-f-btn" style="display:none;">&#10094;</button>
            <button id="btn-prod-next" class="nav-f-btn" style="display:none;">&#10095;</button>
        `;
        document.body.insertAdjacentHTML('beforeend', navHTML);

        // --- INICIALIZAR FUNCIONES ---
        configurarNavegacionFiltro();
        actualizarMetatags(productoSeleccionado);
        
        // Evento WhatsApp
        const btnWS = document.getElementById('boton-whatsapp');
        btnWS.addEventListener('click', () => {
            const cantidad = parseInt(document.getElementById('cantidad').value) || 1;
            const total = cantidad * precioNoDecimales;
            const urlProducto = window.location.href;

            const mensaje = encodeURIComponent(
`*¡Hola! Nuevo Pedido* *Producto:* ${productoSeleccionado.ancho}/${productoSeleccionado.Perfil}R${productoSeleccionado.Diametro} ${productoSeleccionado.IC_IV}
*Marca:* ${productoSeleccionado.marca}
*Modelo:* ${productoSeleccionado.modelo}
*Código:* ${productoSeleccionado.codigo}

--------------------------
*Precio Unit:* S/. ${precioNoDecimales}.00
*Cantidad:* ${cantidad} unidades
*TOTAL: S/. ${total}.00*
--------------------------

*Link del producto:* ${urlProducto}`
            );

            const numeroWhatsApp = '51927668906';
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
        });

    } else {
        document.getElementById('producto-detail').innerHTML = "<h2>Producto no encontrado</h2>";
    }
});

/**
 * Navegación entre productos filtrados
 */
function configurarNavegacionFiltro() {
    const urlParams = new URLSearchParams(window.location.search);
    const idActual = urlParams.get('id');
    const listaIds = JSON.parse(sessionStorage.getItem('productos_filtrados'));

    if (!listaIds || listaIds.length <= 1) return;

    const indexActual = listaIds.indexOf(idActual);
    const btnPrev = document.getElementById('btn-prod-prev');
    const btnNext = document.getElementById('btn-prod-next');

    if (indexActual > 0) {
        btnPrev.style.display = 'block';
        btnPrev.onclick = () => window.location.href = `producto.html?id=${listaIds[indexActual - 1]}`;
    }

    if (indexActual < listaIds.length - 1) {
        btnNext.style.display = 'block';
        btnNext.onclick = () => window.location.href = `producto.html?id=${listaIds[indexActual + 1]}`;
    }
}

/**
 * Gestión de gestos (Swipe)
 */
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
}, {passive: true});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
}, {passive: true});

function handleGesture() {
    const btnNext = document.getElementById('btn-prod-next');
    const btnPrev = document.getElementById('btn-prod-prev');

    // Deslizar a la izquierda -> Siguiente producto
    if (touchstartX - touchendX > 100) {
        if (btnNext && btnNext.style.display !== 'none') btnNext.click();
    }
    // Deslizar a la derecha -> Producto anterior
    if (touchendX - touchstartX > 100) {
        if (btnPrev && btnPrev.style.display !== 'none') btnPrev.click();
    }
}

/**
 * Utilidades: Galería, Copiar y Metatags
 */
function scrollGaleria(direccion) {
    const contenedor = document.getElementById('galeria-scroll');
    if (contenedor) {
        const anchoImagen = contenedor.clientWidth;
        contenedor.scrollBy({ left: direccion * anchoImagen, behavior: 'smooth' });
    }
}

function copiarCualquierTexto(idElemento) {
    const elemento = document.getElementById(idElemento);
    const boton = event.currentTarget;
    const iconoOriginal = boton.innerHTML;

    if (elemento) {
        navigator.clipboard.writeText(elemento.innerText).then(() => {
            boton.classList.add('copiado');
            boton.innerHTML = "<span>✅</span>";
            setTimeout(() => {
                boton.classList.remove('copiado');
                boton.innerHTML = iconoOriginal;
            }, 1500);
        });
    }
}

function actualizarMetatags(producto) {
    const baseURL = "https://hectorluisblasavila.github.io/tirux/";
    document.title = `${producto.marca} - ${producto.codigo}`;
    
    const tags = {
        "og:title": `Llanta ${producto.marca} ${producto.ancho}/${producto.Perfil}R${producto.Diametro}`,
        "og:description": `Modelo ${producto.modelo}. Envíos a todo el Perú.`,
        "og:image": `${baseURL}${producto.imagenes[0]}`,
        "og:url": window.location.href
    };

    for (let prop in tags) {
        const el = document.querySelector(`meta[property="${prop}"]`);
        if (el) el.setAttribute("content", tags[prop]);
    }
}