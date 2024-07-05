function menu() {
  let seleccion = document.getElementById("opciones").value;

  switch (seleccion) {
    case "A":
      swal
        .fire({
          icon: "success",
          iconColor: "#FEC200",
          title: "Cartelera Escazu",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 2000,
        })
        .then(() => {
          window.location.href = "escazu.html";
        });
      return;

    case "B":
      swal
        .fire({
          icon: "success",
          iconColor: "#FEC200",
          title: "Cartelera Curridabat",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 2000,
        })
        .then(() => {
          window.location.href = "curridabat.html";
        });
      return;

    case "C":
      swal
        .fire({
          icon: "success",
          iconColor: "#FEC200",
          title: "Cartelera City Mall",
          text: "Un momento por favor...",
          showConfirmButton: false,
          timer: 2000,
        })
        .then(() => {
          window.location.href = "alajuela.html";
        });
      return;
  }
}
