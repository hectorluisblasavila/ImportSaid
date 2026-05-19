


function aplicarEstadoVendedor(estaLogueado, rol = "") {
  const formulario = document.querySelector(".vendedor");
  
  // Limpiamos TODAS las clases anteriores
  document.body.classList.remove("vendedor-activo", "soy-admin", "soy-plata", "soy-admin2");

  if (estaLogueado) {
    document.body.classList.add("vendedor-activo");
    
    if (rol === "admin") {
      document.body.classList.add("soy-admin");
    } else if (rol === "admin2") {
      document.body.classList.add("soy-admin2");
      // OPCIONAL: Reproducir música al entrar
      let audio = new Audio('url_de_tu_musica.mp3'); 
      audio.play().catch(e => console.log("El navegador bloqueó el audio inicial"));
    } else if (rol === "plata") {
      document.body.classList.add("soy-plata");
    }

    if (formulario) formulario.style.display = "none";
  } else {
    localStorage.removeItem("usuarioAutenticado");
  }
}

// También actualiza esta parte en tu verificarSesion:
function verificarSesion() {
  const usuarioGuardado = localStorage.getItem("usuarioAutenticado");
  if (usuarioGuardado) {
    const datos = JSON.parse(usuarioGuardado);
    // Aplicamos el rol que rescatamos del localStorage
    aplicarEstadoVendedor(true, datos.rol);
  }
}

async function validarAcceso() {
  const dniIngresado = document.getElementById("dni").value;
  const claveIngresada = document.getElementById("clave").value;
  const urlScript = "https://script.google.com/macros/s/AKfycbxLE5hogEbgQvNRO_sf70liV3qQYBTVPEee_yp2oPw-geMKRBBsduMqodhb_gW9rDwPpQ/exec";
  
  // Referencia al loader
  const loader = document.getElementById('loader-container'); // <--- NUEVO

  if (dniIngresado === "" || claveIngresada === "") {
    alert("Por favor, ingresa tus datos.");
    return;
  }

  // 1. Mostrar el GIF de carga justo antes del fetch
  if (loader) loader.style.display = 'flex'; // <--- NUEVO

  try {
    const respuesta = await fetch(urlScript, {
      method: "POST",
      body: JSON.stringify({
        accion: "login",
        dni: dniIngresado,
        clave: claveIngresada
      })
    });

    const resultado = await respuesta.json();

    if (resultado.status === "success") {
      // 2. Si es exitoso, el loader se quita al aplicar el estado o redireccionar
      const datosUsuario = { dni: dniIngresado, rol: resultado.rol };
      localStorage.setItem("usuarioAutenticado", JSON.stringify(datosUsuario));
      aplicarEstadoVendedor(true, resultado.rol);
    } else {
      alert("Usuario o clave incorrectos.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Error de conexión con la base de datos.");
  } finally {
    // 3. Ocultar el loader SIEMPRE, ya sea que salga bien o mal
    if (loader) loader.style.display = 'none'; // <--- NUEVO
  }
}

// Función para cerrar sesión
function cerrarSesion() {
  aplicarEstadoVendedor(false);
  alert("Sesión cerrada.");
  location.reload(); 
}

// --- 2. INTERFAZ Y EVENTOS ---

// Función para mostrar u ocultar el formulario de login (al presionar el icono)
function mostrarFormulario() {
  const formulario = document.querySelector(".vendedor");
  if (formulario) {
    const estaVisible = formulario.style.display === "block";
    formulario.style.display = estaVisible ? "none" : "block";
  }
}

// Cerrar el formulario si se hace clic fuera de él
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

// Ejecutar verificación al cargar
window.addEventListener("DOMContentLoaded", verificarSesion);


// Al final de tu archivo JS
document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se refresque
    validarAcceso();
});
