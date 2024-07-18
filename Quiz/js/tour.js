var panorama1 = new PANOLENS.ImagePanorama("img/img1.jpg");
//duracion del infospot para que no desaparezca en la panoramica
var duration = 1000;

var viewer = new PANOLENS.Viewer({
  container: document.querySelector("#panorama-container"),
});

//declaracion de variables infospot con radio
var infospot1_1 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_2 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot1_3 = new PANOLENS.Infospot(15, PANOLENS.DataImage.Info);
var infospot1_4 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot1_5 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_6 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot1_7 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_8 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
var infospot1_9 = new PANOLENS.Infospot(35, PANOLENS.DataImage.Info);
var infospot1_10 = new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);

//ubicacion de las zonas infospot XYZ
infospot1_1.position.set(100, 193, -500);
infospot1_2.position.set(-309, -84, -500);
infospot1_3.position.set(243, -110, -500);
infospot1_4.position.set(500, -121, 489);
infospot1_5.position.set(500, 100, -183);
infospot1_6.position.set(500, 9, 425);
infospot1_7.position.set(276, 22, 500);
infospot1_8.position.set(1, 126, 500);
infospot1_9.position.set(175, -356, 500);
infospot1_10.position.set(-427, 110, 500);

//agregar las zonas infospot
panorama1.add(infospot1_1);
panorama1.add(infospot1_2);
panorama1.add(infospot1_3);
panorama1.add(infospot1_4);
panorama1.add(infospot1_5);
panorama1.add(infospot1_6);
panorama1.add(infospot1_7);
panorama1.add(infospot1_8);
panorama1.add(infospot1_9);
panorama1.add(infospot1_10);

// contenido de los infospot1
infospot1_1.addHoverText("Zaanse Schans #2", -120);
infospot1_1.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 150px;">Zaanse Schans</div>';
panorama1.add(infospot1_1);

// contenido de los infospot2
infospot1_2.addHoverText("Zaanse Schans #3", -120);
infospot1_2.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 100px;">Casa #2</div>';
panorama1.add(infospot1_2);

// contenido de los infospot3
infospot1_3.addHoverText("Zaanse Schans #4", -215);
infospot1_3.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 100px;">Bote #3</div>';
panorama1.add(infospot1_3);

// contenido de los infospot4
infospot1_4.addHoverText("Zaanse Schans #5", -110);
infospot1_4.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 100px;">Muelle #4</div>';
panorama1.add(infospot1_4);

// contenido de los infospot5
infospot1_5.addHoverText("Zaanse Schans #6", -120);
infospot1_5.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 190px;">Pueblo #5</div>';
panorama1.add(infospot1_5);

// contenido de los infospot6
infospot1_6.addHoverText("Zaanse Schans #7", -140);
infospot1_6.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 150px;">Fabrica de Quesos #6</div>';
panorama1.add(infospot1_6);

// contenido de los infospot7
infospot1_7.addHoverText("Zaanse Schans #8", -120);
infospot1_7.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 190px;">Molino Aserradero #7</div>';
panorama1.add(infospot1_7);

// contenido de los infospot8
infospot1_8.addHoverText("Zaanse Schans #9", -120);
infospot1_8.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 190px;">Molino de las Especias #8</div>';
panorama1.add(infospot1_8);

// contenido de los infospot9
infospot1_9.addHoverText("Zaanse Schans #10", -120);
infospot1_9.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 100px;">Lago #9</div>';
panorama1.add(infospot1_9);

// contenido de los infospot10
infospot1_10.addHoverText("Zaanse Schans #1", -120);
infospot1_10.element.innerHTML =
  '<div style="background-color: #006691; color: ##fbfff4; text-align: center; border-radius: 3px; padding: 8px; font-size: 14px; width: 150px;">Molino Aceitero #10</div>';
panorama1.add(infospot1_10);

// Cambia el tamaño del Infospot (por ejemplo, al 50% del tamaño original)
//infospot1_4.scale = 3;

// desplazamiento de los infospots
infospot1_1.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_2
  viewer.tweenControlCenter(infospot1_2.position);
});

infospot1_2.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_3
  viewer.tweenControlCenter(infospot1_3.position);
});

infospot1_3.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_4
  viewer.tweenControlCenter(infospot1_4.position);
});

infospot1_4.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_5
  viewer.tweenControlCenter(infospot1_5.position);
});

infospot1_5.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_6
  viewer.tweenControlCenter(infospot1_6.position);
});

infospot1_6.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_7
  viewer.tweenControlCenter(infospot1_7.position);
});

infospot1_7.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_8
  viewer.tweenControlCenter(infospot1_8.position);
});

infospot1_8.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_9
  viewer.tweenControlCenter(infospot1_9.position);
});

infospot1_9.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_10
  viewer.tweenControlCenter(infospot1_10.position);
});

infospot1_10.addEventListener("click", function () {
  // Transición suave de la cámara hacia la posición de infospot1_1
  viewer.tweenControlCenter(infospot1_1.position);
});

//permiter mostrar/ocultar  la panoramica
viewer.add(panorama1);
