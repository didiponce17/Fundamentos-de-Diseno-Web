//evento que carga la funcion automaticamente
window.onload = function () {
  document.getElementById("output-img").innerHTML =
    "<img src = 'img/alojamiento/logo_alojamiento.jpg' class = 'img-fluid rounded' alt='logo alojamiento'/>";

  //evento que permite cambiar el objeto onchange
  document.getElementById("alojamientos").onchange = function (e) {
    //variables que guarda el destino del valor seleccionado por el usuario
    let n = e.target.value;
    //expresiones que guardan las imagenes de los estadios y la infromacion de cada uno
    let imagen =
      "<img src = 'img/alojamiento/" +
      n +
      ".jpg'class='img-fluid img-thumbnail rounded' alt='alojamiento'/>";
    let text = [
      "Ubicación: La Fortuna, San Carlos, Alajuela - Campamento de lujo con vistas al volcán Arenal y experiencias en la naturaleza.",
      "Ubicación: Punta Islita, Nandayure, Guanacaste - Resort boutique en la costa con vistas panorámicas y enfoque en sostenibilidad.",
      "Ubicación: Manuel Antonio, Quepos, Puntarena - Hotel frente a la playa con acceso directo al Parque Nacional Manuel Antonio.",
      "Ubicación: Nosara, Guanacaste - Eco-chic cerca de playas famosas para surfistas, rodeado de selva tropical.",
      "Ubicación: Santa Juana, Quepos, Puntarenas - Lodge de ecoturismo en una finca de montaña con actividades al aire libre.",
      "Ubicación: Carate, Osa, Puntarenas. - Retiro de lujo en la Península de Osa, cerca del Parque Nacional Corcovado.",
      "Ubicación: Tamarindo, Santa Cruz, Guanacaste - Eco-lodge rústico cerca de las playas de Tamarindo.",
      "Ubicación: Cachí, La Unión, Cartago - Eco-lodge en una plantación de café con paisajes montañosos.",
    ];
    //salida de las imagenes y los textos informativos
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n - 1];
  };
};

//funcion del boton reiniciar
document.getElementById("btn-clean").onclick = function () {
  document.getElementById("output-img").innerHTML =
    "<img src = 'img/alojamiento/logo_alojamiento.jpg' class = 'img-fluid rounded' alt='logo alojamiento'/>";
  //limpiar los textos informativos de los estadios...
  document.getElementById("output-txt").innerHTML = "";
  //dejar el select con el texto por defecto...
  document.getElementById("alojamientos").value = "";
};
