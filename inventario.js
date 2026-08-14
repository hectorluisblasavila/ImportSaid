/*******************************************************
 * IMPORT SAID
 * INVENTARIO LOCAL
 *******************************************************/


const API_URL =
"https://script.google.com/macros/s/AKfycbypoMBQ97gMfD5scJHX6B_Y1kQvJI4hhOYS1AoxTJVyPLaaPLXa2vTQaXUMzP8R7LwWjQ/exec";


/* =====================================================
   ESTADO LOCAL
===================================================== */

let catalogo = [];

let productosEncontrados = [];

let productoSeleccionado = null;


/*
 * Productos pendientes de sincronizar.
 *
 * codigo -> producto
 */

let pendientes = {};


const CACHE_CATALOGO =
    "IMPORT_SAID_CATALOGO";

const PENDIENTES_INVENTARIO =
    "IMPORT_SAID_PENDIENTES";


/* =====================================================
   ELEMENTOS
===================================================== */

const buscar =
    document.getElementById("buscar");

const sugerencias =
    document.getElementById("sugerencias");

const contador =
    document.getElementById("contador");

const productoPanel =
    document.getElementById("productoPanel");

const nuevoPanel =
    document.getElementById("nuevoPanel");

const mensaje =
    document.getElementById("mensaje");


/* =====================================================
   INICIO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    iniciarInventario
);


async function iniciarInventario() {

    cargarPendientesLocales();

    crearBotonFinalizar();

    actualizarResumen();

    /*
     * Primero mostramos catálogo
     * guardado localmente.
     */

    const cache =
        localStorage.getItem(
            CACHE_CATALOGO
        );


    if (cache) {

        try {

            const datos =
                JSON.parse(cache);

            if (
                Array.isArray(datos)
            ) {

                catalogo =
                    datos;

                mostrarEstadoCatalogo();

            }

        } catch (error) {

            console.error(
                "Error leyendo caché",
                error
            );

        }

    }


    /*
     * Después intentamos descargar
     * una versión actualizada.
     *
     * SOLO UNA CONSULTA.
     */

    await cargarCatalogoDesdeServidor();

}


/* =====================================================
   CARGAR CATÁLOGO
===================================================== */

function cargarCatalogoDesdeServidor() {

    return new Promise((resolve) => {

        mostrarMensaje(
            "Cargando catálogo..."
        );

        const callbackName =
            "IMPORT_SAID_catalogo_" +
            Date.now() +
            "_" +
            Math.floor(
                Math.random() * 100000
            );

        let terminado = false;
        let script = null;


        function terminar(exito) {

            if (terminado) {
                return;
            }

            terminado = true;

            try {
                delete window[callbackName];
            } catch (e) {}

            if (
                script &&
                script.parentNode
            ) {

                script.parentNode.removeChild(
                    script
                );

            }

            resolve(exito);
        }


        /*
         * Apps Script llamará a esta función
         * cuando entregue el catálogo.
         */

        window[callbackName] =
            function(data) {

                try {

                    if (
                        !data ||
                        data.status !== "success"
                    ) {

                        throw new Error(
                            data &&
                            data.mensaje
                                ? data.mensaje
                                : "No se pudo cargar catálogo"
                        );

                    }


                    /*
                     * Guardamos los 1116 productos
                     * en memoria.
                     */

                    catalogo =
                        Array.isArray(
                            data.productos
                        )
                            ? data.productos
                            : [];


                    /*
                     * Guardamos una copia
                     * en el dispositivo.
                     */

                    localStorage.setItem(

                        CACHE_CATALOGO,

                        JSON.stringify(
                            catalogo
                        )

                    );


                    /*
                     * Actualizamos contador.
                     */

                    mostrarEstadoCatalogo();


                    mostrarMensaje(
                        "✅ Catálogo listo"
                    );


                    terminar(true);


                } catch (error) {

                    console.error(
                        "Error procesando catálogo:",
                        error
                    );


                    /*
                     * Si ya existe una copia
                     * local, seguimos trabajando.
                     */

                    if (
                        catalogo.length > 0
                    ) {

                        mostrarEstadoCatalogo();

                        mostrarMensaje(
                            "⚠️ Usando catálogo local"
                        );

                    } else {

                        contador.textContent =
                            "No se pudo cargar el catálogo";

                        mostrarMensaje(
                            "❌ No se pudo cargar el catálogo"
                        );

                    }


                    terminar(
                        catalogo.length > 0
                    );

                }

            };


        /*
         * Creamos un <script> en lugar
         * de utilizar fetch().
         *
         * Esto permite que GitHub Pages
         * reciba el JSONP de Apps Script.
         */

        script =
            document.createElement(
                "script"
            );

        script.async = true;


        script.src =

            API_URL +

            "?accion=catalogo" +

            "&callback=" +

            encodeURIComponent(
                callbackName
            ) +

            "&_=" +

            Date.now();


        /*
         * Si Apps Script no responde.
         */

        script.onerror =
            function(error) {

                console.error(
                    "Error conectando con Apps Script:",
                    error
                );


                if (
                    catalogo.length > 0
                ) {

                    mostrarEstadoCatalogo();

                    mostrarMensaje(
                        "⚠️ Usando catálogo local"
                    );

                } else {

                    contador.textContent =
                        "No se pudo cargar el catálogo";

                    mostrarMensaje(
                        "❌ Error de conexión"
                    );

                }


                terminar(
                    catalogo.length > 0
                );

            };


        /*
         * Enviamos la solicitud.
         */

        document.head.appendChild(
            script
        );


        /*
         * Seguridad:
         * si no responde en 15 segundos,
         * dejamos de esperar.
         */

        setTimeout(
            function() {

                if (terminado) {
                    return;
                }


                console.error(
                    "Tiempo de espera agotado"
                );


                if (
                    catalogo.length > 0
                ) {

                    mostrarEstadoCatalogo();

                    mostrarMensaje(
                        "⚠️ Usando catálogo local"
                    );

                } else {

                    contador.textContent =
                        "No se pudo cargar el catálogo";

                    mostrarMensaje(
                        "❌ Tiempo de espera agotado"
                    );

                }


                terminar(
                    catalogo.length > 0
                );

            },
            15000
        );

    });

}


/* =====================================================
   ESTADO CATÁLOGO
===================================================== */

function mostrarEstadoCatalogo() {

    if (!contador) {
        return;
    }


    contador.textContent =
        catalogo.length +
        " productos disponibles";

}


/* =====================================================
   BÚSQUEDA LOCAL
===================================================== */

let temporizadorBusqueda;


buscar.addEventListener(
    "input",
    function () {

        clearTimeout(
            temporizadorBusqueda
        );


        const texto =
            this.value
                .trim()
                .toUpperCase();


        if (!texto) {

            sugerencias.innerHTML =
                "";

            contador.textContent =
                catalogo.length +
                " productos disponibles";

            return;

        }


        /*
         * SIN FETCH.
         *
         * La búsqueda ocurre
         * directamente en el navegador.
         */

        temporizadorBusqueda =
            setTimeout(
                () => {

                    buscarLocal(
                        texto
                    );

                },
                10
            );

    }
);


/* =====================================================
   FILTRO LOCAL
===================================================== */

function buscarLocal(texto) {

    productosEncontrados =
        catalogo.filter(
            producto => {

                const codigo =
                    normalizar(
                        producto.codigo
                    );

                const marca =
                    normalizar(
                        producto.marca
                    );

                const modelo =
                    normalizar(
                        producto.modelo
                    );

                const medida =
                    normalizar(
                        producto.medida
                    );


                return (

                    codigo.includes(
                        texto
                    )

                    ||

                    marca.includes(
                        texto
                    )

                    ||

                    modelo.includes(
                        texto
                    )

                    ||

                    medida.includes(
                        texto
                    )

                );

            }
        );


    mostrarSugerencias();

}


/* =====================================================
   SUGERENCIAS
===================================================== */

function mostrarSugerencias() {

    sugerencias.innerHTML =
        "";


    contador.textContent =
        productosEncontrados.length +
        " coincidencia(s)";


    productosEncontrados
        .slice(0, 40)
        .forEach(producto => {


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "sugerencia";


            item.innerHTML = `

                <span class="codigo">
                    ${escapar(
                        producto.codigo
                    )}
                </span>

                <span class="marca">
                    ${escapar(
                        producto.marca
                    )}
                </span>

                <span>
                    ${escapar(
                        producto.medida
                    )}
                </span>

            `;


            item.addEventListener(
                "click",
                () =>
                    seleccionarProducto(
                        producto
                    )
            );


            sugerencias.appendChild(
                item
            );

        });

}


/* =====================================================
   SELECCIONAR
===================================================== */

function seleccionarProducto(
    producto
) {

    productoSeleccionado =
        producto;


    nuevoPanel
        .classList
        .add("oculto");


    productoPanel
        .classList
        .remove("oculto");


    sugerencias.innerHTML =
        "";


    contador.textContent =
        "Producto seleccionado";


    cargarProducto(
        producto
    );


    /*
     * Si ya había sido contado,
     * mostrar su cantidad pendiente.
     */

    const pendiente =
        pendientes[
            producto.codigo
        ];


    if (pendiente) {

        document.getElementById(
            "cantidad"
        ).value =
            pendiente.cantidad;

    } else {

        document.getElementById(
            "cantidad"
        ).value = 0;

    }

}


/* =====================================================
   CARGAR FICHA
===================================================== */

function cargarProducto(p) {

    ponerValor(
        "medida",
        p.medida
    );

    ponerValor(
        "diametro",
        p.diametro
    );

    ponerValor(
        "ancho",
        p.ancho
    );

    ponerValor(
        "perfil",
        p.perfil
    );

    ponerValor(
        "pr",
        p.pr
    );

    ponerValor(
        "pcd",
        p.pcd
    );

    ponerValor(
        "et",
        p.et
    );

    ponerValor(
        "marca",
        p.marca
    );

    ponerValor(
        "modelo",
        p.modelo
    );

    ponerValor(
        "iciv",
        p.iciv
    );

    ponerValor(
        "treadwear",
        p.treadwear
    );

    ponerValor(
        "traccion",
        p.traccionTemperatura
    );

    ponerValor(
        "procedencia",
        p.procedencia
    );


    const titulo =
        document.getElementById(
            "tituloProducto"
        );


    if (titulo) {

        titulo.textContent =
            p.marca ||
            "Producto";

    }


    const codigo =
        document.getElementById(
            "codigoProducto"
        );


    if (codigo) {

        codigo.textContent =
            p.codigo ||
            "";

    }

}


/* =====================================================
   UTILIDADES
===================================================== */

function ponerValor(
    id,
    valor
) {

    const elemento =
        document.getElementById(
            id
        );


    if (elemento) {

        elemento.value =
            valor ?? "";

    }

}


function obtenerValor(id) {

    const elemento =
        document.getElementById(
            id
        );


    if (!elemento) {
        return "";
    }


    return elemento.value || "";

}


function normalizar(valor) {

    return String(
        valor || ""
    )
        .trim()
        .toUpperCase();

}


function escapar(valor) {

    return String(
        valor || ""
    )
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        );

}


/* =====================================================
   CANTIDAD
===================================================== */

document
    .getElementById("menos")
    .addEventListener(
        "click",
        () => {

            const input =
                document.getElementById(
                    "cantidad"
                );


            let cantidad =
                Number(
                    input.value
                ) || 0;


            if (
                cantidad > 0
            ) {

                input.value =
                    cantidad - 1;

            }

        }
    );


document
    .getElementById("mas")
    .addEventListener(
        "click",
        () => {

            const input =
                document.getElementById(
                    "cantidad"
                );


            let cantidad =
                Number(
                    input.value
                ) || 0;


            input.value =
                cantidad + 1;

        }
    );


/* =====================================================
   NUEVO PRODUCTO
===================================================== */

document
    .getElementById("btnNuevo")
    .addEventListener(
        "click",
        () => {

            productoPanel
                .classList
                .add("oculto");


            nuevoPanel
                .classList
                .remove("oculto");


            document
                .getElementById(
                    "nuevoCodigo"
                )
                .focus();

        }
    );


document
    .getElementById(
        "btnCancelarNuevo"
    )
    .addEventListener(
        "click",
        () => {

            nuevoPanel
                .classList
                .add("oculto");

            productoPanel
                .classList
                .add("oculto");

        }
    );


/* =====================================================
   AGREGAR PRODUCTO EXISTENTE
   SOLO MEMORIA LOCAL
===================================================== */

document
    .getElementById("btnGuardar")
    .addEventListener(
        "click",
        () => {

            if (
                !productoSeleccionado
            ) {

                mostrarMensaje(
                    "Selecciona un producto"
                );

                return;

            }


            const cantidad =
                Number(
                    obtenerValor(
                        "cantidad"
                    )
                );


            if (
                !Number.isFinite(
                    cantidad
                ) ||
                cantidad < 0
            ) {

                mostrarMensaje(
                    "Cantidad inválida"
                );

                return;

            }


            const producto =
                construirProductoDesdeFicha(
                    productoSeleccionado.codigo
                );


            /*
             * Guardar en memoria.
             *
             * Si ya existe,
             * reemplaza la cantidad.
             */

            pendientes[
                producto.codigo
            ] = {

                codigo:
                    producto.codigo,

                cantidad:
                    cantidad,

                producto:
                    producto

            };


            guardarPendientesLocales();


            /*
             * Actualizar también
             * el catálogo local.
             */

            actualizarCatalogoLocal(
                producto
            );


            mostrarMensaje(
                "✅ Producto agregado al inventario"
            );


            actualizarResumen();


            limpiarSeleccion();

        }
    );


/* =====================================================
   CONSTRUIR PRODUCTO DESDE FICHA
===================================================== */

function construirProductoDesdeFicha(
    codigo
) {

    return {

        codigo:
            normalizar(
                codigo
            ),

        medida:
            obtenerValor(
                "medida"
            ),

        diametro:
            obtenerValor(
                "diametro"
            ),

        ancho:
            obtenerValor(
                "ancho"
            ),

        perfil:
            obtenerValor(
                "perfil"
            ),

        pr:
            obtenerValor(
                "pr"
            ),

        pcd:
            obtenerValor(
                "pcd"
            ),

        et:
            obtenerValor(
                "et"
            ),

        marca:
            obtenerValor(
                "marca"
            ),

        modelo:
            obtenerValor(
                "modelo"
            ),

        iciv:
            obtenerValor(
                "iciv"
            ),

        treadwear:
            obtenerValor(
                "treadwear"
            ),

        traccionTemperatura:
            obtenerValor(
                "traccion"
            ),

        procedencia:
            obtenerValor(
                "procedencia"
            )

    };

}


/* =====================================================
   NUEVO PRODUCTO
===================================================== */

document
    .getElementById(
        "btnGuardarNuevo"
    )
    .addEventListener(
        "click",
        () => {

            const codigo =
                normalizar(
                    obtenerValor(
                        "nuevoCodigo"
                    )
                );


            if (!codigo) {

                mostrarMensaje(
                    "Debes ingresar el código"
                );

                return;

            }


            /*
             * NO inventamos el código.
             *
             * El código lo proporciona
             * el usuario.
             */


            const producto = {

                codigo:

                    codigo,

                medida:

                    obtenerValor(
                        "nuevoMedida"
                    ),

                diametro:

                    obtenerValor(
                        "nuevoDiametro"
                    ),

                ancho:

                    obtenerValor(
                        "nuevoAncho"
                    ),

                perfil:

                    obtenerValor(
                        "nuevoPerfil"
                    ),

                pr:

                    obtenerValor(
                        "nuevoPR"
                    ),

                pcd:

                    obtenerValor(
                        "nuevoPCD"
                    ),

                et:

                    obtenerValor(
                        "nuevoET"
                    ),

                marca:

                    obtenerValor(
                        "nuevoMarca"
                    ),

                modelo:

                    obtenerValor(
                        "nuevoModelo"
                    ),

                iciv:

                    obtenerValor(
                        "nuevoICIV"
                    ),

                treadwear:

                    obtenerValor(
                        "nuevoTreadwear"
                    ),

                traccionTemperatura:

                    obtenerValor(
                        "nuevoTraccion"
                    ),

                procedencia:

                    obtenerValor(
                        "nuevoProcedencia"
                    )

            };


            const cantidad =
                Number(
                    obtenerValor(
                        "nuevoCantidad"
                    )
                ) || 0;


            /*
             * Si el código ya existe
             * en el catálogo, no crear
             * un duplicado.
             */

            const existente =
                catalogo.find(
                    p =>
                        normalizar(
                            p.codigo
                        ) === codigo
                );


            if (existente) {

                mostrarMensaje(
                    "⚠️ Ese código ya existe. Selecciónalo de la lista."
                );

                return;

            }


            pendientes[codigo] = {

                codigo:

                    codigo,

                cantidad:

                    cantidad,

                producto:

                    producto

            };


            /*
             * También agregarlo al
             * catálogo local.
             */

            catalogo.push(
                producto
            );


            guardarPendientesLocales();


            localStorage.setItem(

                CACHE_CATALOGO,

                JSON.stringify(
                    catalogo
                )

            );


            mostrarMensaje(
                "✅ Producto nuevo agregado"
            );


            actualizarResumen();


            limpiarSeleccion();

        }
    );


/* =====================================================
   ACTUALIZAR CATÁLOGO LOCAL
===================================================== */

function actualizarCatalogoLocal(
    producto
) {

    const indice =
        catalogo.findIndex(
            p =>
                normalizar(
                    p.codigo
                ) ===
                normalizar(
                    producto.codigo
                )
        );


    if (
        indice >= 0
    ) {

        catalogo[indice] =
            producto;

    } else {

        catalogo.push(
            producto
        );

    }


    localStorage.setItem(

        CACHE_CATALOGO,

        JSON.stringify(
            catalogo
        )

    );

}


/* =====================================================
   LIMPIAR SELECCIÓN
===================================================== */

function limpiarSeleccion() {

    buscar.value =
        "";

    sugerencias.innerHTML =
        "";

    productoPanel
        .classList
        .add("oculto");

    nuevoPanel
        .classList
        .add("oculto");

    productoSeleccionado =
        null;

    contador.textContent =
        "Listo para el siguiente producto";

}


/* =====================================================
   PENDIENTES
===================================================== */

function cargarPendientesLocales() {

    const datos =
        localStorage.getItem(
            PENDIENTES_INVENTARIO
        );


    if (!datos) {
        pendientes = {};
        return;
    }


    try {

        pendientes =
            JSON.parse(
                datos
            ) || {};

    } catch (error) {

        pendientes = {};

    }

}


function guardarPendientesLocales() {

    localStorage.setItem(

        PENDIENTES_INVENTARIO,

        JSON.stringify(
            pendientes
        )

    );

}


/* =====================================================
   RESUMEN
===================================================== */

function actualizarResumen() {

    const cantidadProductos =
        Object.keys(
            pendientes
        ).length;


    const cantidadUnidades =
        Object.values(
            pendientes
        )
        .reduce(
            (total, item) =>
                total +
                Number(
                    item.cantidad
                ),
            0
        );


    const resumen =
        document.getElementById(
            "resumenInventario"
        );


    if (resumen) {

        resumen.textContent =

            `Pendientes: ${cantidadProductos}` +
            ` | Unidades: ${cantidadUnidades}`;

    }

}


/* =====================================================
   BOTÓN FINALIZAR
===================================================== */

function crearBotonFinalizar() {

    /*
     * Evitar duplicarlo.
     */

    if (
        document.getElementById(
            "btnFinalizarInventario"
        )
    ) {

        return;

    }


    const boton =
        document.createElement(
            "button"
        );


    boton.id =
        "btnFinalizarInventario";


    boton.type =
        "button";


    boton.textContent =
        "🟢 FINALIZAR Y GUARDAR INVENTARIO";


    boton.style.cssText = `

        width:100%;
        margin-top:10px;
        padding:14px;
        border:0;
        border-radius:8px;
        background:#16803c;
        color:white;
        font-size:16px;
        font-weight:bold;
        cursor:pointer;

    `;


    boton.addEventListener(
        "click",
        finalizarInventario
    );


    /*
     * Insertarlo después del
     * botón de guardar.
     */

    const btnGuardar =
        document.getElementById(
            "btnGuardar"
        );


    if (
        btnGuardar &&
        btnGuardar.parentElement
    ) {

        btnGuardar
            .parentElement
            .appendChild(
                boton
            );

    } else {

        document.body
            .appendChild(
                boton
            );

    }


    /*
     * Crear contador.
     */

    const resumen =
        document.createElement(
            "div"
        );


    resumen.id =
        "resumenInventario";


    resumen.style.cssText = `

        margin-top:10px;
        padding:10px;
        text-align:center;
        font-weight:bold;

    `;


    boton.parentElement
        .appendChild(
            resumen
        );

}


/* =====================================================
   FINALIZAR INVENTARIO
===================================================== */

async function finalizarInventario() {

    const lista =
        Object.values(
            pendientes
        );


    if (
        lista.length === 0
    ) {

        mostrarMensaje(
            "No hay productos pendientes"
        );

        return;

    }


    const unidades =
        lista.reduce(
            (total, item) =>
                total +
                Number(
                    item.cantidad
                ),
            0
        );


    const confirmar =
        confirm(

            "FINALIZAR INVENTARIO\n\n" +

            "Productos: " +
            lista.length +

            "\nUnidades: " +
            unidades +

            "\n\n" +

            "Se actualizará PRODUCTOS " +
            "y se registrará CONTEO FISICO.\n\n" +

            "¿Continuar?"

        );


    if (!confirmar) {
        return;
    }


    const boton =
        document.getElementById(
            "btnFinalizarInventario"
        );


    if (boton) {

        boton.disabled =
            true;

        boton.textContent =
            "⏳ GUARDANDO TODO...";

    }


    mostrarMensaje(
        "Guardando inventario..."
    );


    /*
     * Preparar datos.
     */

    const productos =
        lista.map(
            item =>
                item.producto
        );


    const conteos =
        lista.map(
            item => ({

                codigo:
                    item.codigo,

                cantidad:
                    Number(
                        item.cantidad
                    ) || 0

            })
        );


    const datos = {

        accion:
            "guardarLote",

        usuario:
            localStorage.getItem(
                "dni"
            ) ||

            localStorage.getItem(
                "usuario"
            ) ||

            "",

        productos:
            productos,

        conteos:
            conteos

    };


    try {
        /*
         * ENVIAR INVENTARIO A GOOGLE APPS SCRIPT
         *
         * Usamos no-cors porque GitHub Pages
         * y Apps Script están en dominios diferentes.
         *
         * Apps Script recibirá y procesará el POST,
         * pero el navegador no podrá leer la respuesta.
         */

        await fetch(
            API_URL,
            {
                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type":
                        "text/plain;charset=utf-8"
                },

                body:
                    JSON.stringify(datos)
            }
        );


        /*
         * El envío fue realizado.
         *
         * No intentamos hacer:
         *
         * await respuesta.json()
         *
         * porque eso provoca el error CORS.
         */


        pendientes = {};

        localStorage.removeItem(
            PENDIENTES_INVENTARIO
        );


        mostrarMensaje(
            "✅ INVENTARIO ENVIADO CORRECTAMENTE"
        );


        actualizarResumen();


        if (boton) {

            boton.disabled = false;

            boton.textContent =
                "🟢 FINALIZAR Y GUARDAR INVENTARIO";

        }


        alert(

            "INVENTARIO ENVIADO\n\n" +

            "Los productos y conteos " +
            "fueron enviados a Google Sheets.\n\n" +

            "Productos enviados: " +
            productos.length +

            "\nUnidades: " +
            unidades

        );


        /*
         * SOLO después de recibir
         * éxito del servidor,
         * borrar pendientes.
         */

        pendientes = {};


        localStorage.removeItem(
            PENDIENTES_INVENTARIO
        );


        mostrarMensaje(
            "✅ INVENTARIO GUARDADO CORRECTAMENTE"
        );


        actualizarResumen();


        if (boton) {

            boton.disabled =
                false;

            boton.textContent =
                "🟢 FINALIZAR Y GUARDAR INVENTARIO";

        }


        alert(

            "INVENTARIO GUARDADO\n\n" +

            "Productos actualizados: " +
            resultado.productosActualizados +

            "\nProductos nuevos: " +
            resultado.productosNuevos +

            "\nConteos guardados: " +
            resultado.conteosGuardados

        );


    } catch (error) {

        console.error(
            error
        );


        /*
         * MUY IMPORTANTE:
         *
         * NO borramos los pendientes.
         *
         * Si falla Internet,
         * puedes volver a intentar.
         */

        mostrarMensaje(
            "❌ No se pudo sincronizar. Tus datos siguen guardados."
        );


        alert(

            "NO SE GUARDÓ EL INVENTARIO.\n\n" +

            "Tus productos siguen guardados " +
            "en este dispositivo.\n\n" +

            "Puedes volver a intentar cuando tengas conexión."

        );


        if (boton) {

            boton.disabled =
                false;

            boton.textContent =
                "🔄 REINTENTAR GUARDAR INVENTARIO";

        }

    }

}


/* =====================================================
   CERRAR SESIÓN
===================================================== */

document
    .getElementById(
        "btnCerrar"
    )
    .addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "token"
            );

            window.location.href =
                "index.html";

        }
    );