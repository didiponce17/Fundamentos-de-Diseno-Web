document.getElementById("parquesOpciones").addEventListener("change", parques);

function parques() {
  var opciones = document.getElementById("parquesOpciones").value;
  switch (opciones) {
    case "guanacaste":
      document.querySelector(".parquesGuanacaste").style.display = "block";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "puntarenas":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "block";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "llanuras":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "block";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "sur":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "block";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "caribe":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "block";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "valle":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "block";
      document.querySelector(".parquesCentral").style.display = "none";
      break;
    case "central":
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "block";
      break;

    default:
      document.querySelector(".parquesGuanacaste").style.display = "none";
      document.querySelector(".parquesPuntarenas").style.display = "none";
      document.querySelector(".parquesLlanuras").style.display = "none";
      document.querySelector(".parquesSur").style.display = "none";
      document.querySelector(".parquesCaribe").style.display = "none";
      document.querySelector(".parquesValle").style.display = "none";
      document.querySelector(".parquesCentral").style.display = "none";
  }
}
