window.onload = function () {
  let a; // Variable para almacenar el modelo seleccionado
  let n; // Variable para almacenar la versión seleccionada

  document.getElementById("hotel").onchange = function (e) {
    a = e.target.value;
    actualizarImagen(a);
  };

  document.getElementById("zona").onchange = function (es) {
    n = es.target.value;
  };
};

function actualizarImagen(hotelSeleccionado) {
  let imagen;
  switch (hotelSeleccionado) {
    case "Nayara Tented Camp":
      imagen = "img/img1.jpg";
      break;
    case "Hotel Punta Islita":
      imagen = "img/img2.jpg";
      break;
    case "Hotel Arenas del Mar":
      imagen = "img/img3.jpg";
      break;
    case "Hotel Harmony":
      imagen = "img/img4.jpg";
      break;
    case "Santa Juana Lodge":
      imagen = "img/img5.jpg";
      break;
    case "Luna Lodge":
      imagen = "img/img6.jpg";
      break;
    case "El Sabanero Eco Lodge":
      imagen = "img/img7.jpg";
      break;
    case "Los Cafetales Eco Lodge":
      imagen = "img/img8.jpg";
      break;
    default:
      imagen = "img/img9.jpg";
      break;
  }
  document.getElementById("imagen").src = imagen;
}

function calcular() {
  const lang = document.documentElement.lang || "es"; // Asume 'es' como predeterminado si no se ha seleccionado un idioma
  let hotelSeleccionado = document.getElementById("hotel").value;
  let zonaSeleccionada = document.getElementById("zona").value;

  if (
    hotelSeleccionado === translations[lang].selectHotel ||
    zonaSeleccionada === translations[lang].selectZone
  ) {
    Swal.fire({
      icon: "error",
      title: translations[lang].attention,
      text: translations[lang].selectBoth,
      confirmButtonColor: "#D30C15",
    });
    return; // Detiene la ejecución si falta alguno de los campos
  }

  // Lógica para calcular el monto de la cuota mensual
  let montoCuota = 0;
  let imagenDireccion = ""; // Variable para la imagen del tipo de habitación
  switch (hotelSeleccionado) {
    case "Nayara Tented Camp":
    case "Hotel Punta Islita":
    case "Hotel Arenas del Mar":
    case "Hotel Harmony":
    case "Santa Juana Lodge":
    case "Luna Lodge":
    case "El Sabanero Eco Lodge":
    case "Los Cafetales Eco Lodge":
      if (zonaSeleccionada === translations[lang].individual) {
        montoCuota = 150;
        imagenDireccion = "img/img127.jpg"; // Imagen para habitación individual
      } else if (zonaSeleccionada === translations[lang].doble) {
        montoCuota = 300;
        imagenDireccion = "img/img128.jpg"; // Imagen para habitación doble
      }
      break;
    default:
      break;
  }

  Swal.fire({
    imageUrl: imagenDireccion,
    html:
      "<p>" +
      hotelSeleccionado +
      "<br></br>" +
      " Habitación " +
      zonaSeleccionada +
      " " +
      "<br></br> <strong> " +
      translations[lang].costPerNight +
      "</strong></p>" +
      "$" +
      montoCuota,
    imageWidth: 600,
    imageHeight: 250,
    imageAlt: hotelSeleccionado,
    confirmButtonColor: "#8bc34a",
  });
}

function limpiar() {
  document.getElementById("hotel").selectedIndex = 0;
  document.getElementById("zona").selectedIndex = 0;
  document.getElementById("imagen").src = "img/img9.jpg";
}
