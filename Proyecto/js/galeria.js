function menu() {
  let seleccion = document.getElementById("opciones").value;

  // Personalización de estilos para SweetAlert
  const swalCustomClass = {
    title: "swal-title", // Clase personalizada para el título
    htmlContainer: "swal-text", // Clase personalizada para el texto debajo del lottie file
    popup: "swal-popup", // Clase personalizada para el fondo de la alerta
  };

  // Estilos personalizados en CSS
  const style = document.createElement("style");
  style.innerHTML = `
    .swal-title {
      color: #3a6531;
    }
    .swal-text {
      color: #795548;
    }
    .swal-popup {
      background-color: #dcedc8;
    }
  `;
  document.head.appendChild(style);

  switch (seleccion) {
    case "A":
      swal
        .fire({
          title: "Playa",
          width: "400px",
          html: '<iframe src="https://lottie.host/embed/d1952809-ac34-4340-8c68-9c0bf29b12d3/JkgB2FVSFO.json"></iframe>',
          showConfirmButton: false,
          timer: 2000,
          customClass: swalCustomClass,
        })
        .then(() => {
          window.location.href = "playa.html";
        });
      return;

    case "B":
      swal
        .fire({
          title: "Montaña",
          width: "400px",
          html: '<iframe src="https://lottie.host/embed/68f3c2fb-19d5-4be8-a750-fdab8fcb1d05/33HxK1sQji.json"></iframe>',
          showConfirmButton: false,
          timer: 2000,
          customClass: swalCustomClass,
        })
        .then(() => {
          window.location.href = "montana.html";
        });
      return;

    case "C":
      swal
        .fire({
          title: "Ciudad",
          width: "400px",
          html: '<iframe src="https://lottie.host/embed/8bc47982-cc25-43c0-8d12-138e982d5fbc/yi2RoGeUop.json"></iframe>',
          showConfirmButton: false,
          timer: 2500,
          customClass: swalCustomClass,
        })
        .then(() => {
          window.location.href = "ciudad.html";
        });
      return;
  }
}
