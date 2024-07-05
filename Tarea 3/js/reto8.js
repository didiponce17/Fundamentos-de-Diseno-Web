const empleados = [];

function agregarEmpleado() {
  const nombre = document.getElementById("nombre").value,
    apellidoEmpleado = document.getElementById("apellidos").value,
    csat1 = parseFloat(document.getElementById("csat1").value),
    csat2 = parseFloat(document.getElementById("csat2").value),
    csat3 = parseFloat(document.getElementById("csat3").value);

  if (
    nombre === "" ||
    apellidoEmpleado === "" ||
    isNaN(csat1) ||
    isNaN(csat2) ||
    isNaN(csat3)
  ) {
    Swal.fire({
      icon: "error",
      title: "Debe llenar todos los campos",
      showClass: {
        popup: `
                animate__animated
                animate__fadeIn
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOut
                `,
      },
    });
  } else {
    const csat = (csat1 + csat2 + csat3) / 3;

    empleados.push({ nombre, apellidoEmpleado, csat });

    const selectEmpleados = document.getElementById("seleccionarEmpleado");

    const option = document.createElement("option");

    option.value = nombre + " " + apellidoEmpleado;

    option.text = nombre + " " + apellidoEmpleado;

    selectEmpleados.appendChild(option);

    limpiarDatos();

    Swal.fire({
      icon: "success",
      title: "Empleado agregado",
      showClass: {
        popup: `
                animate__animated
                animate__fadeIn
                `,
      },
      hideClass: {
        popup: `
                animate__animated
                animate__fadeOut
                `,
      },
    });
  }
}

function calcularCSATSeleccionado() {
  const nombreSeleccionado = document.getElementById(
    "seleccionarEmpleado"
  ).value;

  const resultado = document.getElementById("resultado");

  let empleadoSeleccionado = null;

  for (let i = 0; i < empleados.length; i++) {
    const empleado = empleados[i];

    const nombreCompleto = empleado.nombre + " " + empleado.apellidoEmpleado;

    if (nombreCompleto === nombreSeleccionado) {
      empleadoSeleccionado = empleado;

      break;
    }
  }

  if (empleadoSeleccionado) {
    const csatEmpleado = empleadoSeleccionado.csat;

    resultado.textContent =
      "El CSAT de: " +
      nombreSeleccionado +
      "  es de: " +
      csatEmpleado +
      "% de satisfacción";
  } else {
    resultado.textContent = "";
  }
}

// Función que almacena código para limpiar los campos
function limpiarDatos() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellidos").value = "";
  document.getElementById("csat1").value = "";
  document.getElementById("csat2").value = "";
  document.getElementById("csat3").value = "";
}
