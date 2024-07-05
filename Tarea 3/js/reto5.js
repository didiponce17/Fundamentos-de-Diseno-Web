window.onload = function () {
  let a; // Variable para almacenar el modelo seleccionado
  let n; // Variable para almacenar la versión seleccionada

  document.getElementById("modelo").onchange = function (e) {
    a = e.target.value;
    actualizarImagen(a);
  };

  document.getElementById("version").onchange = function (es) {
    n = es.target.value;
  };
};

function actualizarImagen(modeloSeleccionado) {
  let imagen;
  switch (modeloSeleccionado) {
    case "Vitara":
      imagen = "img/reto5/vitara.png";
      break;
    case "Jimny":
      imagen = "img/reto5/jimny.png";
      break;
    case "Swift":
      imagen = "img/reto5/swift.png";
      break;
    case "Fronx":
      imagen = "img/reto5/fronx.png";
      break;
    default:
      imagen = "img/reto5/autos.png";
      break;
  }
  document.getElementById("imagen").src = imagen;
}

function calcular() {
  let modeloSeleccionado = document.getElementById("modelo").value;
  let versionSeleccionada = document.getElementById("version").value;

  if (
    modeloSeleccionado === "Seleccione un modelo:" ||
    versionSeleccionada === "Seleccione una versión:"
  ) {
    Swal.fire({
      icon: "error",
      title: "Atención",
      text: "Debe seleccionar tanto el modelo como la versión del carro.",
    });
    return; // Detiene la ejecución si falta alguno de los campos
  }

  // Lógica para calcular el monto de la cuota mensual
  let montoCuota = 0;
  switch (modeloSeleccionado) {
    case "Vitara":
    case "Jimny":
    case "Swift":
    case "Fronx":
      if (versionSeleccionada === "4x2") {
        montoCuota = 800;
      } else if (versionSeleccionada === "4x4") {
        montoCuota = 1100;
      }
      break;
    default:
      break;
  }

  // Mostrar el Sweet Alert con la imagen y el monto de la cuota
  let imagenDireccion =
    "img/reto5/" + modeloSeleccionado.toLowerCase() + ".png";

  Swal.fire({
    imageUrl: imagenDireccion,
    html:
      "<p> La cuota mensual del " +
      modeloSeleccionado +
      " " +
      versionSeleccionada +
      "<br></br> <strong> Cuota Mensual: </strong></p>" +
      "$" +
      montoCuota,
    imageWidth: 600,
    imageHeight: 250,
    imageAlt: "Vehículo " + modeloSeleccionado,
  });
}

function limpiar() {
  document.getElementById("modelo").selectedIndex = 0;
  document.getElementById("version").selectedIndex = 0;
  document.getElementById("imagen").src = "img/reto5/autos.png";
}
