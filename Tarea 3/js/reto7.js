$("#r0").click(function () {
  Swal.fire({
    icon: "info",
    iconColor: "#689F38",
    title: "El Tallo",
    showClass: {
      popup: "animated zoomIn",
    },
    hideClass: {
      popup: "animated zoomOut",
    },
    text: "El tallo es la parte aérea de la planta que entre sus funciones tiene la de dar soporte y estructura a la misma, sosteniendo sus otros órganos vegetales aéreos, como las hojas y las flores. ",
    footer:
      '<a href="https://www.ecologiaverde.com/partes-de-una-planta-y-sus-funciones-2651.html#anchor_1" target="blank">Leer más</a>',
  });
});

$("#r1").click(function () {
  Swal.fire({
    title: "La Raíz",
    text: "Las raíces son el primer órgano que las plantas desarrollan cuando germinan, y podría decirse que el más importante.",
    imageUrl: "img/img1reto7.jpg",
    imageWidth: 500,
    imageHeight: 400,
    imageAlt: "Raiz",
  });
});
