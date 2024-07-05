function comprobar() {
  if (document.form1.c3.checked == true) {
    if (
      document.form1.c1.checked == true &&
      document.form1.c2.checked == false
    ) {
      Swal.fire({
        title: "Falta el requisito #2",
        icon: "error",
        iconColor: "#860808",
        text: "NO puede continuar con la matrícula!",
        imageWidth: 400,
        imageHeight: 200,
      });
    } else if (
      document.form1.c2.checked == true &&
      document.form1.c1.checked == false
    ) {
      Swal.fire({
        title: "Falta el requisito #1",
        icon: "error",
        iconColor: "#860808",
        text: "NO puede continuar con la matrícula!",
        imageWidth: 400,
        imageHeight: 200,
      });
    } else if (
      document.form1.c1.checked == true &&
      document.form1.c2.checked == true
    ) {
      Swal.fire({
        title: "Excelente.",
        icon: "success",
        iconColor: "#006691",
        text: "SI puede continuar con la matrícula!",
        imageWidth: 400,
        imageHeight: 200,
      });
      // Aquí eliminas la línea que muestra el mensaje
      document.getElementById("demo").innerHTML = "";
      document.form1.c3.checked = false;
      document.form1.c2.checked = false;
      document.form1.c1.checked = false;
    }
  } else {
    // En caso de que no esté marcado el checkbox c3, limpia el mensaje
    document.getElementById("demo").innerHTML = "";
  }
}
function desactivarCheckboxes() {
  document.form1.c1.checked = false;
  document.form1.c2.checked = false;
  document.form1.c3.checked = false;
}
