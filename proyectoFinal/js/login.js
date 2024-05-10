

/**  declarar Variables */

const botonRegistro = document.getElementById("boton_registro");
const botonInicioSesion = document.getElementById("boton_inicio_sesion");
const formulariosUsuario = document.getElementById("formularios_opciones-usuario");


botonRegistro.addEventListener("click", () => {
  formulariosUsuario.classList.remove("Right");
  formulariosUsuario.classList.add("Left");
});


botonInicioSesion.addEventListener("click", () => {
  formulariosUsuario.classList.remove("Left");
  formulariosUsuario.classList.add("Right");
});

function navigarMember() {
  window.location.href = "http://127.0.0.1:5500/categorias/servicios.html";
}

function navigarAdmin() {
  window.location.href = "http://127.0.0.1:5500/admin/dashboard.html";
}

async function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("correo_electronico1").value;
  const password = document.getElementById("contraseña1").value;
  const emailError = document.getElementById("correoError");
  const passwordError = document.getElementById("contraseñaError");

  try {
    const formData = { email, password };
    const response = await fetch("http://localhost/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }

    const data = await response.json();

    if (data.status) {
      localStorage.setItem("user", JSON.stringify(data.user));
      if (data.user.role === "admin") {
        navigarAdmin();
      } else if (data.user.role === "member") {
        navigarMember();
      }
    } else {
      
    }
  } catch (error) {
    console.error("Error:", error);
    emailError.textContent = "Correo no encontrado";
    passwordError.textContent = "Contraseña incorrecta";
  }
}

document.getElementById("submitLogin").addEventListener("click", loginUser);



