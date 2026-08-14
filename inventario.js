const API_URL =
"https://script.google.com/macros/s/AKfycbypoMBQ97gMfD5scJHX6B_Y1kQvJI4hhOYS1AoxTJVyPLaaPLXa2vTQaXUMzP8R7LwWjQ/exec";


let productosEncontrados = [];
let productoSeleccionado = null;


/* ==========================================
   ELEMENTOS
========================================== */

const buscar = document.getElementById("buscar");
const sugerencias = document.getElementById("sugerencias");
const contador = document.getElementById("contador");

const productoPanel =
    document.getElementById("productoPanel");

const nuevoPanel =
    document.getElementById("nuevoPanel");

const mensaje =
    document.getElementById("mensaje");


/* ==========================================
   MENSAJES
========================================== */

function mostrarMensaje(texto) {

    mensaje.textContent = texto;

    mensaje.style.display = "block";

    setTimeout(() => {
        mensaje.style.display = "none";
    }, 2500);
}


/* ==========================================
   BUSCAR PRODUCTOS
========================================== */

let temporizadorBusqueda;

buscar.addEventListener("input", function () {

    clearTimeout(temporizadorBusqueda);

    const texto = this.value.trim();

    if (!texto) {

        sugerencias.innerHTML = "";
        contador.textContent = "";

        return;
    }

    temporizadorBusqueda = setTimeout(() => {

        buscarProductos(texto);

    }, 250);

});


async function buscarProductos(texto) {

    contador.textContent = "Buscando...";

    try {

        const url =
            API_URL +
            "?accion=buscar&q=" +
            encodeURIComponent(texto);

        const respuesta = await fetch(url);

        const data = await respuesta.json();

        if (data.status !== "success") {

            contador.textContent = "No se encontraron productos";

            sugerencias.innerHTML = "";

            return;
        }

        productosEncontrados =
            data.resultados || [];

        mostrarSugerencias();

    } catch (error) {

        console.error(error);

        contador.textContent =
            "Error de conexión";

    }

}


/* ==========================================
   MOSTRAR SUGERENCIAS
========================================== */

function mostrarSugerencias() {

    sugerencias.innerHTML = "";

    contador.textContent =
        productosEncontrados.length +
        " coincidencia(s)";


    productosEncontrados
        .slice(0, 30)
        .forEach(producto => {

            const item =
                document.createElement("div");

            item.className = "sugerencia";

            item.innerHTML = `

                <span class="codigo">
                    ${producto.codigo || ""}
                </span>

                <span class="marca">
                    ${producto.marca || ""}
                </span>

                <span>
                    ${producto.medida || ""}
                </span>

            `;

            item.addEventListener(
                "click",
                () => seleccionarProducto(producto)
            );

            sugerencias.appendChild(item);

        });

}


/* ==========================================
   SELECCIONAR PRODUCTO
========================================== */

function seleccionarProducto(producto) {

    productoSeleccionado = producto;

    nuevoPanel.classList.add("oculto");

    productoPanel.classList.remove("oculto");

    sugerencias.innerHTML = "";

    contador.textContent = "Producto seleccionado";

    cargarProducto(producto);

}


/* ==========================================
   CARGAR DATOS
========================================== */

function cargarProducto(p) {

    document.getElementById("tituloProducto")
        .textContent =
        p.marca || "Producto";


    document.getElementById("codigoProducto")
        .textContent =
        p.codigo || "";


    ponerValor("medida", p.medida);
    ponerValor("diametro", p.diametro);
    ponerValor("ancho", p.ancho);
    ponerValor("perfil", p.perfil);
    ponerValor("pr", p.pr);
    ponerValor("pcd", p.pcd);
    ponerValor("et", p.et);
    ponerValor("marca", p.marca);
    ponerValor("modelo", p.modelo);
    ponerValor("iciv", p.iciv);
    ponerValor("treadwear", p.treadwear);
    ponerValor("traccion", p.traccionTemperatura);
    ponerValor("procedencia", p.procedencia);

}


/* ==========================================
   UTILIDAD
========================================== */

function ponerValor(id, valor) {

    const elemento =
        document.getElementById(id);

    if (elemento) {

        elemento.value =
            valor ?? "";

    }

}


/* ==========================================
   CANTIDAD
========================================== */

document.getElementById("menos")
    .addEventListener("click", () => {

        const input =
            document.getElementById("cantidad");

        let cantidad =
            Number(input.value) || 0;

        if (cantidad > 0) {

            input.value =
                cantidad - 1;

        }

    });


document.getElementById("mas")
    .addEventListener("click", () => {

        const input =
            document.getElementById("cantidad");

        let cantidad =
            Number(input.value) || 0;

        input.value =
            cantidad + 1;

    });


/* ==========================================
   NUEVO PRODUCTO
========================================== */

document.getElementById("btnNuevo")
    .addEventListener("click", () => {

        productoPanel.classList.add("oculto");

        nuevoPanel.classList.remove("oculto");

        document.getElementById("nuevoCodigo")
            .focus();

    });


document.getElementById("btnCancelarNuevo")
    .addEventListener("click", () => {

        nuevoPanel.classList.add("oculto");

        productoPanel.classList.add("oculto");

    });


/* ==========================================
   GUARDAR INVENTARIO
========================================== */

document.getElementById("btnGuardar")
    .addEventListener("click", async () => {

    if (!productoSeleccionado) {

        mostrarMensaje(
            "Selecciona un producto"
        );

        return;
    }

    const cantidad =
        Number(
            document.getElementById("cantidad").value
        );

    if (cantidad < 0) {

        mostrarMensaje(
            "La cantidad no puede ser negativa"
        );

        return;
    }

    /*
     * TOMAR TODOS LOS DATOS ACTUALES
     * DE LA FICHA.
     *
     * Esto permite modificar un producto
     * existente y guardar los cambios.
     */

    const datos = {

        accion: "guardarInventario",

        codigo:
            productoSeleccionado.codigo,

        medida:
            document.getElementById("medida").value,

        diametro:
            document.getElementById("diametro").value,

        ancho:
            document.getElementById("ancho").value,

        perfil:
            document.getElementById("perfil").value,

        pr:
            document.getElementById("pr").value,

        pcd:
            document.getElementById("pcd").value,

        et:
            document.getElementById("et").value,

        marca:
            document.getElementById("marca").value,

        modelo:
            document.getElementById("modelo").value,

        iciv:
            document.getElementById("iciv").value,

        treadwear:
            document.getElementById("treadwear").value,

        traccionTemperatura:
            document.getElementById("traccion").value,

        procedencia:
            document.getElementById("procedencia").value,

        cantidad:
            cantidad,

        usuario:
            localStorage.getItem("dni") || ""

    };

    await enviarDatos(datos);

});


/* ==========================================
   GUARDAR NUEVO PRODUCTO
========================================== */

document.getElementById("btnGuardarNuevo")
    .addEventListener("click", async () => {

    const codigo =
        document.getElementById("nuevoCodigo")
            .value
            .trim()
            .toUpperCase();


    if (!codigo) {

        mostrarMensaje(
            "Debes ingresar el código"
        );

        return;
    }


    /*
     * NUEVO PRODUCTO
     *
     * Se utiliza guardarInventario,
     * NO guardarProducto.
     *
     * Así:
     *
     * 1. Crea el producto en PRODUCTOS
     * 2. Registra la cantidad en CONTEO FISICO
     */

    const datos = {

        accion:
            "guardarInventario",

        codigo:
            codigo,

        medida:
            document.getElementById("nuevoMedida").value,

        diametro:
            document.getElementById("nuevoDiametro").value,

        ancho:
            document.getElementById("nuevoAncho").value,

        perfil:
            document.getElementById("nuevoPerfil").value,

        pr:
            obtenerValor("nuevoPR"),

        pcd:
            obtenerValor("nuevoPCD"),

        et:
            obtenerValor("nuevoET"),

        marca:
            document.getElementById("nuevoMarca").value,

        modelo:
            document.getElementById("nuevoModelo").value,

        iciv:
            document.getElementById("nuevoICIV").value,

        treadwear:
            document.getElementById("nuevoTreadwear").value,

        traccionTemperatura:
            obtenerValor("nuevoTraccion"),

        procedencia:
            document.getElementById("nuevoProcedencia").value,

        cantidad:
            Number(
                document.getElementById("nuevoCantidad").value
            ) || 0,

        usuario:
            localStorage.getItem("dni") || ""

    };


    await enviarDatos(datos);

});


/* ==========================================
   OBTENER VALOR SEGURO
========================================== */

function obtenerValor(id) {

    const elemento =
        document.getElementById(id);

    if (!elemento) {
        return "";
    }

    return elemento.value || "";

}


/* ==========================================
   ENVIAR AL API
========================================== */

async function enviarDatos(datos) {

    mostrarMensaje("Guardando...");

    try {

        const respuesta =
            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(datos)

            });


        const resultado =
            await respuesta.json();


        if (
            resultado.status === "success"
        ) {

            mostrarMensaje(
                "✅ Guardado correctamente"
            );


            /*
             * Limpiar búsqueda
             */

            buscar.value = "";

            sugerencias.innerHTML = "";

            contador.textContent = "";


            /*
             * Ocultar fichas
             */

            productoPanel
                .classList
                .add("oculto");

            nuevoPanel
                .classList
                .add("oculto");


            /*
             * Preparar siguiente registro
             */

            productoSeleccionado =
                null;


            /*
             * Volver automáticamente
             * al buscador
             */

            buscar.focus();


        } else {

            mostrarMensaje(
                resultado.mensaje ||
                "No se pudo guardar"
            );

        }


    } catch (error) {

        console.error(error);

        mostrarMensaje(
            "❌ Error de conexión"
        );

    }

}


/* ==========================================
   CERRAR SESIÓN
========================================== */

document.getElementById("btnCerrar")
    .addEventListener("click", () => {

    localStorage.removeItem("token");

    localStorage.removeItem("rol");

    localStorage.removeItem("dni");

    window.location.href =
        "index.html";

});


/* ==========================================
   CERRAR SESIÓN
========================================== */

document.getElementById("btnCerrar")
    .addEventListener("click", () => {

        localStorage.removeItem("token");

        window.location.href =
            "index.html";

    });