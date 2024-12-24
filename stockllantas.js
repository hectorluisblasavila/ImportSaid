const stockllantas = [


{codigo:"2056014ANN", diametro:"R12", medida:"205/60/R14", marca:"ANNAITE", ancho:"205", PR:"0", perfil:"60", imagen:"https://i.ibb.co/KmgBfjc/IMG-20210810-105134.jpg", cantidad:"1", precio:"195"},
{codigo:"19514CHAB", diametro:"R13", medida:"195R14C", marca:"HABILEAD RS01", ancho:"195", PR:"0", perfil:"", imagen:"https://i.ibb.co/CWwq2QR/IMG-20210810-105239.jpg", cantidad:"1", precio:"252"},
{codigo:"19514pspsA", diametro:"R13", medida:"195R14C", marca:"OVATION V-02", ancho:"195", PR:"8", perfil:"", imagen:"https://i.ibb.co/FsY0QkT/IMG-20210810-105322.jpg", cantidad:"1", precio:"240"},
{codigo:"19514CHAB", diametro:"R14", medida:"195R14C", marca:"HABILEAD RS01", ancho:"195", PR:"0", perfil:"", imagen:"https://i.ibb.co/CWwq2QR/IMG-20210810-105239.jpg", cantidad:"1", precio:"252"},
{codigo:"19514COVA", diametro:"R14", medida:"195R14C", marca:"OVATION V-02", ancho:"195", PR:"8", perfil:"", imagen:"https://i.ibb.co/FsY0QkT/IMG-20210810-105322.jpg", cantidad:"1", precio:"240"},
{codigo:"19514CFOR", diametro:"R14", medida:"195R14C", marca:"FORTUNE FSR-01", ancho:"195", PR:"8", perfil:"", imagen:"https://i.ibb.co/Qf9m5Kn/IMG-20210810-105335.jpg", cantidad:"1", precio:"240"},

{codigo:"19514CFOR", diametro:"R15", medida:"195R14C", marca:"FORTUNE FSR-01", ancho:"195", PR:"8", perfil:"", imagen:"https://i.ibb.co/Qf9m5Kn/IMG-20210810-105335.jpg", cantidad:"1", precio:"240"},

{codigo:"205amam4ANN", diametro:"R15", medida:"205/60/R14", marca:"ANNAITE", ancho:"205", PR:"0", perfil:"60", imagen:"https://i.ibb.co/KmgBfjc/IMG-20210810-105134.jpg", cantidad:"1", precio:"195"},

];

//var llantas = stockllantas.filter(function(ele){
//	return ele.ancho == 195;
//})console.log(llantas)

const buscarllantas = () => {
    const textoDiametro = document.getElementById('buscar-llantas').value.toUpperCase();  // Obtiene el valor de la búsqueda por diámetro
    const textoAncho = document.getElementById('ancho-llantas').value.toUpperCase();  // Obtiene el valor de la búsqueda por ancho

    const contenedorProductos = document.getElementById('contenedor-llantas');  // Contenedor de llantas
    const productos = contenedorProductos.querySelectorAll(".producto");  // Selecciona todas las tarjetas de productos

    productos.forEach(producto => {
        // Busca el diámetro y el ancho dentro de cada producto
        const diametro = producto.querySelector("h3");  // Diametro dentro de h3
        const ancho = producto.querySelector("h5");  // Ancho dentro de h5

        // Verifica si los valores coinciden con los criterios de búsqueda
        const coincideDiametro = diametro ? diametro.textContent.toUpperCase().includes(textoDiametro) : false;
        const coincideAncho = ancho ? ancho.textContent.toUpperCase().includes(textoAncho) : false;

        // Muestra el producto si coincide con ambos criterios de búsqueda o si alguno está vacío
        if ((textoDiametro === "" || coincideDiametro) && 
            (textoAncho === "" || coincideAncho)) {
            producto.style.display = "";  // Mostrar el producto
        } else {
            producto.style.display = "none";  // Ocultar el producto
        }
    });
};


