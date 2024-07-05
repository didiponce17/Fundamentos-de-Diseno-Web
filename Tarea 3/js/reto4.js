//evento que carga la funcion automaticamente
window.onload = function () {
  document.getElementById("output-img").innerHTML =
    "<img src = 'img/logo1reto4.jpg' class = 'img-fluid rounded' alt='logo1reto4'/>";

  //evento que permite cambiar el objeto onchange
  document.getElementById("wonders").onchange = function (e) {
    //variables que guarda el destino del valor seleccionado por el usuario
    let n = e.target.value;
    //expresiones que guardan las imagenes de los estadios y la infromacion de cada uno
    let imagen =
      "<img src = 'img/reto4/" +
      n +
      ".jpg'class='img-fluid img-thumbnail rounded' alt='estadio'/>";
    let text = [
      "Ubicación: Yucatán, México - Construcción: Remonta al siglo XII d.C.",
      "Ubicación: Roma, Italia - Construcción: Alrededor del año 71 d.C. bajo el emperador Vespasiano.",
      "Ubicación: Río de Janeiro, Brasil - Construcción: Este monumento fue inaugurado el 12 de octubre de 1931 después de aproximadamente 5 años de construcción.",
      "Ubicación: Huairou, China - Construcción: Alrededor del año 220 a.C. por el primer emperador Qin Shin Huang.",
      "Ubicación: Cuzco, Perú - Construcción: Se construyó en el siglo XV (es decir, hacia 1400).",
      "Ubicación: Petra, Jordania - Construcción: Fue levantada por los edomitas en el siglo VIII a.C.",
      "Ubicación: Agra, India - Construcción: Fue construido entre 1632 y 1654 por el emperador Shah Jahan en memoria de su esposa favorita, Mumtaz Mahal.",
    ];
    //salida de las imagenes y los textos informativos
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];
  };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function () {
  document.getElementById("output-img").innerHTML =
    "<img src = 'img/logo1reto4.jpg' class = 'img-fluid rounded' alt='logo1reto4'/>";
  //limpiar los textos informativos de los estadios...
  document.getElementById("output-txt").innerHTML = "";
  //dejar el select con el texto por defecto...
  document.getElementById("wonders").value = "";
};
