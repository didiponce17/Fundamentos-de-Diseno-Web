document.addEventListener("DOMContentLoaded", function () {
  const buscadorForm = document.getElementById("buscadorForm");
  const cedulaInput = document.getElementById("cedula");
  const resultadoContainer = document.getElementById("resultado");

  buscadorForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const cedula = cedulaInput.value.trim();
    if (cedula.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Atención",
        iconColor: "#860808",
        text: "Por favor ingresa una cédula antes de buscar.",
      });
    } else if (isNaN(cedula)) {
      Swal.fire({
        icon: "error",
        title: "Error",
        iconColor: "#860808",
        text: "La cédula NO es válida",
      });
    } else if (validarCedula(cedula)) {
      mostrarInformacionCiudadano(cedula);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        iconColor: "#860808",
        text: "La cédula NO es válida",
      });
    }
  });

  function validarCedula(cedula) {
    return /^\d{9}$/.test(cedula);
  }

  function mostrarInformacionCiudadano(cedula) {
    const ciudadanos = {
      109110338: {
        nombre: "Sergio Hidalgo Baleares",
        foto: "../img/reto10/ciudadano1.jpg",
        identificacion: "109110338",
        regimen: "Régimen de Capitalización Colectiva",
      },
      209110338: {
        nombre: "Amelia Faerron Ferrer",
        foto: "../img/reto10/ciudadano2.jpg",
        identificacion: "209110338",
        regimen: "Régimen de Capitalización Individual",
      },
      309110338: {
        nombre: "Daniel Leiva Quesada",
        foto: "../img/reto10/ciudadano3.jpg",
        identificacion: "309110338",
        regimen: "Régimen de Capitalización Compuesta",
      },
      409110338: {
        nombre: "Roberto Cruz Rojas",
        foto: "../img/reto10/ciudadano4.jpg",
        identificacion: "409110338",
        regimen: "Régimen de Capitalización Provisional",
      },
      509110338: {
        nombre: "Christian Solano Salas",
        foto: "../img/reto10/ciudadano5.jpg",
        identificacion: "509110338",
        regimen: "Régimen de Capitalización General",
      },
    };

    if (ciudadanos[cedula]) {
      const ciudadano = ciudadanos[cedula];
      mostrarResultado(ciudadano);
    } else {
      Swal.fire({
        icon: "error",
        title: "Atención",
        iconColor: "#860808",
        text: "El usuario NO existe.",
      });
    }
  }

  function mostrarResultado(ciudadano) {
    resultadoContainer.innerHTML = `
      <div class="card">
        <img src="${ciudadano.foto}" class="card-img-top pt-3" alt="Foto del ciudadano">
        <div class="card-body">
          <p class="card-title"><strong>Nombre </strong></p>
          <p class="card-text"> ${ciudadano.nombre}</p>
          <p class="card-text"><strong>Identificación</strong> ${ciudadano.identificacion}</p>
          <p class="card-text"><strong>Régimen al cual pertenece</strong>  ${ciudadano.regimen}</p>
        </div>
      </div>
    `;
  }
});

function borrar() {
  document.getElementById("cedula").value = "";
  document.getElementById("resultado").innerHTML = "";
}
