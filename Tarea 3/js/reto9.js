function estudiante1() {
  Swal.fire({
    title: "Estudiante #1",
    icon: "success",
    iconColor: "#00FE81",
    text: "Técnico en Ingeniería del Software",
    imageUrl: "img/reto9/estudiante1.jpg",
    imageWidth: 256,
    imageHeight: 256,
    imageAlt: "Estudiante1 de Cenfotec",
    confirmButtonText: "Aceptar",
  });
}

function estudiante2() {
  Swal.fire({
    title: "Estudiante #2",
    icon: "success",
    iconColor: "#00FE81",
    text: "Ingeniería del Software",
    imageUrl: "img/reto9/estudiante2.jpg",
    imageWidth: 256,
    imageHeight: 256,
    imageAlt: "Estudiante2 de Cenfotec",
    confirmButtonText: "Aceptar",
  });
}

function estudiante3() {
  Swal.fire({
    title: "Estudiante #3",
    icon: "success",
    iconColor: "#00FE81",
    text: "Técnico en Ciberseguridad",
    imageUrl: "img/reto9/estudiante3.jpg",
    imageWidth: 256,
    imageHeight: 256,
    imageAlt: "Estudiante3 de Cenfotec",
    confirmButtonText: "Aceptar",
  });
}

function estudiante4() {
  Swal.fire({
    title: "Estudiante #4",
    icon: "success",
    iconColor: "#00FE81",
    text: "Técnico en Desarrollo y Diseño Web",
    imageUrl: "img/reto9/estudiante4.jpg",
    imageWidth: 256,
    imageHeight: 256,
    imageAlt: "Estudiante4 de Cenfotec",
    confirmButtonText: "Aceptar",
  });
}

function limpiar() {
  //desmarcar radios
  document.getElementById("radio1").checked = false;
  document.getElementById("radio2").checked = false;
  document.getElementById("radio3").checked = false;
  document.getElementById("radio4").checked = false;
}
