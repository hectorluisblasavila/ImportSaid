// Lista de combinaciones de DNI y claves válidas
const vendedores = [
    { dni: "12345678", clave: "clave123" },
    { dni: "miguelhuaman", clave: "said710" },
    { dni: "hectorblas", clave: "locotes" }
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
      
      // Muestra los precios para vendedores
      const precios = document.querySelectorAll(".precioProductoAfiliado");
      precios.forEach((precio) => {
        precio.style.display = "block"; // Muestra los precios ocultos
      });

      // Oculta el formulario automáticamente
      const formulario = document.querySelector(".vendedor");
      formulario.style.display = "none";
    } else {
      alert("DNI o clave incorrectos. Intenta nuevamente.");
    }
  }

  // Ocultar el formulario al hacer clic fuera de él
  document.addEventListener("click", (e) => {
    const formulario = document.querySelector(".vendedor");
    const iconoPerfil = document.querySelector(".iconoPerfil");

    // Verifica que el clic no sea en el formulario o en el ícono de perfil
    if (
      formulario.style.display === "block" &&
      !formulario.contains(e.target) &&
      !iconoPerfil.contains(e.target)
    ) {
      formulario.style.display = "none";
    }
  });