function convertirDolaresAColones() {
  var montoDolares = document.getElementById("montoDolares").value;
  var tipoCambio = document.getElementById("tipoCambio1").value;

  if (montoDolares === "" || tipoCambio === "") {
    Swal.fire({
      title: "Error",
      text: "Ingresar monto y tipo de cambio",
      icon: "error",
    });
  } else {
    var resultado = montoDolares * tipoCambio;
    document.getElementById("resultado1").value = resultado.toFixed(2);
  }
}

function convertirColonesADolares() {
  var montoColones = document.getElementById("montoColones").value;
  var tipoCambio = document.getElementById("tipoCambio2").value;

  if (montoColones === "" || tipoCambio === "") {
    Swal.fire({
      title: "Error",
      text: "Ingresar monto y tipo de cambio",
      icon: "error",
    });
  } else {
    var resultado = montoColones / tipoCambio;
    document.getElementById("resultado2").value = resultado.toFixed(2);
  }
}

function limpiarCampos1() {
  document.getElementById("montoDolares").value = "";
  document.getElementById("tipoCambio1").value = "";
  document.getElementById("resultado1").value = "";
}

function limpiarCampos2() {
  document.getElementById("montoColones").value = "";
  document.getElementById("tipoCambio2").value = "";
  document.getElementById("resultado2").value = "";
}
