const vendedores = [
  { dni: "miguelhuaman", clave: "said710" },
  { dni: "hectorblas", clave: "locotes" },
  { dni: "douglasblas", clave: "pollo123" },
  { dni: "favioblas", clave: "123pollo" },
  { dni: "astridblas", clave: "mocosita" },
  { dni: "shirleyblas", clave: "blas123" },
  { dni: "Cecy", clave: "hco25" },
  { dni: "luisblas", clave: "matienzo" },
  { dni: "claudiaes", clave: "escobar123" },
  { dni: "andreaes", clave: "123escobar" },
  { dni: "claudiaza", clave: "ilusa123" }
];

// Función para mostrar u ocultar el formulario de vendedor
function mostrarFormulario() {
  const formulario = document.querySelector(".vendedor");
  formulario.style.display = formulario.style.display === "block" ? "none" : "block";
}

// Función para validar el acceso del vendedor
function validarAcceso() {
  const dniIngresado = document.getElementById("dni").value;
  const claveIngresada = document.getElementById("clave").value;

  // Verifica si la combinación DNI y clave es válida
  const vendedorValido = vendedores.find(
    (vendedor) => vendedor.dni === dniIngresado && vendedor.clave === claveIngresada
  );

  if (vendedorValido) {
    alert("Acceso permitido. Mostrando precios para vendedores.");

    // Guardar sesión en localStorage
    localStorage.setItem("usuarioAutenticado", JSON.stringify(vendedorValido));


    mostrarPreciosVendedor();
  } else {
    alert("DNI o clave incorrectos. Intenta nuevamente.");
  }
}

// Función para verificar si hay una sesión activa
function verificarSesion() {
  const usuarioGuardado = localStorage.getItem("usuarioAutenticado");

  if (usuarioGuardado) {
    mostrarPreciosVendedor();
  }
}

// Función para mostrar los precios de vendedores y ocultar el formulario
function mostrarPreciosVendedor() {
  const precios = document.querySelectorAll(".precioProductoAfiliado");
  precios.forEach((precio) => {
    precio.style.display = "block"; // Muestra los precios ocultos
  });

  // Ocultar el formulario si existe
  const formulario = document.querySelector(".vendedor");
  if (formulario) {
    formulario.style.display = "none";
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  localStorage.removeItem("usuarioAutenticado");
  alert("Sesión cerrada.");
  location.reload(); // Recargar la página para aplicar los cambios
}

// Verificar sesión al cargar la página
window.onload = verificarSesion;

// Ocultar el formulario al hacer clic fuera de él
document.addEventListener("click", (e) => {
  const formulario = document.querySelector(".vendedor");
  const iconoPerfil = document.querySelector(".iconoPerfil");

  if (
    formulario &&
    formulario.style.display === "block" &&
    !formulario.contains(e.target) &&
    (!iconoPerfil || !iconoPerfil.contains(e.target))
  ) {
    formulario.style.display = "none";
  }
});
