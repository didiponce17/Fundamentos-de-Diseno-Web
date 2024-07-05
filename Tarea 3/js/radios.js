function mostrar() {
  //checked es una propiedad que significa opcion seleccionada
  if (document.getElementById("radio1").checked) {
    estudiante1();
  }
  if (document.getElementById("radio2").checked) {
    estudiante2();
  }
  if (document.getElementById("radio3").checked) {
    estudiante3();
  }
  if (document.getElementById("radio4").checked) {
    estudiante4();
  }
}
