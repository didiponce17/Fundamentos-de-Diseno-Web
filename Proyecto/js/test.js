document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("UL2-8B04fjNz0P3iH");

  const form = document.getElementById("reservacionForm");
  const btnCalcular = document.getElementById("btnCalcular");
  const btnFinalizar = document.getElementById("btnFinalizar");
  const btnLimpiar = document.getElementById("btnLimpiar");
  const carrito = document.getElementById("carrito");
  const tourSelect = document.getElementById("tourSelect");
  const tourOptions = document.getElementById("tourOptions");

  // Mostrar u ocultar opciones de tour dependiendo de la selección
  tourSelect.addEventListener("change", function () {
    if (tourSelect.value === "si") {
      tourOptions.style.display = "block";
    } else {
      tourOptions.style.display = "none";
    }
  });

  btnCalcular.addEventListener("click", function () {
    const nombre = document.getElementById("nombreTxt").value;
    const apellidos = document.getElementById("apellidosTxt").value;
    const correo = document.getElementById("correoTxt").value;
    const telefono = document.getElementById("telefonoTxt").value;
    const personas = document.getElementById("personasTxt").value;
    const fechaInicio = new Date(
      document.getElementById("fechaInicioTxt").value
    );
    const fechaFin = new Date(document.getElementById("fechaFinTxt").value);
    const hotel = document.getElementById("hotelTxt").value;
    const habitacion = document.getElementById("habitacionTxt").value;
    const cantidadEntradas = document.getElementById("cantidadEntradas")
      ? document.getElementById("cantidadEntradas").value
      : "";
    const fechaVisita = document.getElementById("fechaVisita")
      ? new Date(document.getElementById("fechaVisita").value)
      : "";
    const areaSilvestre = document.getElementById("areaSilvestre")
      ? document.getElementById("areaSilvestre").value
      : "";

    // Validación de fechas
    if (fechaInicio >= fechaFin) {
      Swal.fire({
        title: "Error",
        text: "La fecha de inicio debe ser anterior a la fecha de fin.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (fechaVisita && (fechaVisita < fechaInicio || fechaVisita > fechaFin)) {
      Swal.fire({
        title: "Error",
        text: "La fecha de visita debe estar dentro del rango de estancia en el hotel.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    // Calcular costo por noche basado en el tipo de habitación
    let costoPorNoche;
    if (habitacion === "Individual") {
      costoPorNoche = 150;
    } else if (habitacion === "Doble") {
      costoPorNoche = 250;
    } else {
      Swal.fire({
        title: "Error",
        text: "Tipo de habitación no válido.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    // Calcular total
    const cantidadDias = Math.ceil(
      (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)
    );
    const totalCostoHotel = cantidadDias * costoPorNoche * personas;

    // Calcular costo adicional por tour
    let costoTour = 0;
    if (tourSelect.value === "si") {
      // Supongamos un costo fijo por entrada
      const costoPorEntrada = 15; // Actualizado: cada entrada cuesta $15
      costoTour = costoPorEntrada * cantidadEntradas;
    }

    // Calcular total final
    const totalCosto = totalCostoHotel + costoTour;

    // Mostrar resultado
    carrito.innerHTML = `
      <h3>Resumen de Reservación</h3>
      <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Fechas:</strong> ${fechaInicio.toLocaleDateString()} a ${fechaFin.toLocaleDateString()}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
      <p><strong>Habitación:</strong> ${habitacion}</p>
      <p><strong>Cantidad de personas:</strong> ${personas}</p>
      <p><strong>Cantidad de noches:</strong> ${cantidadDias}</p>
      <p><strong>Costo por noche:</strong> $${costoPorNoche}</p>
      <p><strong>Total Costo Hotel:</strong> $${totalCostoHotel.toFixed(2)}</p>
    `;

    if (tourSelect.value === "si") {
      carrito.innerHTML += `
        <h4>Detalles del Tour</h4>
        <p><strong>Cantidad de Entradas:</strong> ${cantidadEntradas}</p>
        <p><strong>Fecha de la Visita:</strong> ${fechaVisita.toLocaleDateString()}</p>
        <p><strong>Área Silvestre:</strong> ${areaSilvestre}</p>
        <p><strong>Costo por Entrada:</strong> $15</p>
        <p><strong>Total Costo Tour:</strong> $${costoTour.toFixed(2)}</p>
      `;
    }

    carrito.innerHTML += `
      <h4>Total a Pagar:</h4>
      <p><strong>$${totalCosto.toFixed(2)}</strong></p>
    `;
  });

  btnFinalizar.addEventListener("click", function () {
    const nombre = document.getElementById("nombreTxt").value;
    const apellidos = document.getElementById("apellidosTxt").value;
    const correo = document.getElementById("correoTxt").value;
    const telefono = document.getElementById("telefonoTxt").value;
    const personas = document.getElementById("personasTxt").value;
    const fechaInicio = new Date(
      document.getElementById("fechaInicioTxt").value
    );
    const fechaFin = new Date(document.getElementById("fechaFinTxt").value);
    const hotel = document.getElementById("hotelTxt").value;
    const habitacion = document.getElementById("habitacionTxt").value;
    const cantidadEntradas = document.getElementById("cantidadEntradas")
      ? document.getElementById("cantidadEntradas").value
      : "";
    const fechaVisita = document.getElementById("fechaVisita")
      ? new Date(document.getElementById("fechaVisita").value)
      : "";
    const areaSilvestre = document.getElementById("areaSilvestre")
      ? document.getElementById("areaSilvestre").value
      : "";

    // Validación de fechas
    if (fechaInicio >= fechaFin) {
      Swal.fire({
        title: "Error",
        text: "La fecha de inicio debe ser anterior a la fecha de fin.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    if (fechaVisita && (fechaVisita < fechaInicio || fechaVisita > fechaFin)) {
      Swal.fire({
        title: "Error",
        text: "La fecha de visita debe estar dentro del rango de estancia en el hotel.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    // Calcular costo por noche basado en el tipo de habitación
    let costoPorNoche;
    if (habitacion === "Individual") {
      costoPorNoche = 150;
    } else if (habitacion === "Doble") {
      costoPorNoche = 250;
    } else {
      Swal.fire({
        title: "Error",
        text: "Tipo de habitación no válido.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    // Calcular total
    const cantidadDias = Math.ceil(
      (fechaFin - fechaInicio) / (1000 * 60 * 60 * 24)
    );
    const totalCostoHotel = cantidadDias * costoPorNoche * personas;

    // Calcular costo adicional por tour
    let costoTour = 0;
    if (tourSelect.value === "si") {
      // Supongamos un costo fijo por entrada
      const costoPorEntrada = 15; // Actualizado: cada entrada cuesta $15
      costoTour = costoPorEntrada * cantidadEntradas;
    }

    // Calcular total final
    const totalCosto = totalCostoHotel + costoTour;

    // Preparar datos para enviar a EmailJS
    const templateParams = {
      from_name: nombre,
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      telefono: telefono,
      personas: personas,
      fechaInicio: fechaInicio.toLocaleDateString(),
      fechaFin: fechaFin.toLocaleDateString(),
      hotel: hotel,
      habitacion: habitacion,
      cantidadEntradas: cantidadEntradas,
      fechaVisita: fechaVisita.toLocaleDateString() || "",
      areaSilvestre: areaSilvestre || "",
      costoPorEntrada: 15,
      totalCostoTour: costoTour.toFixed(2),
      totalCosto: totalCosto.toFixed(2),
    };

    emailjs
      .send("default_service", "reservacion_template", templateParams)
      .then(
        function (response) {
          Swal.fire({
            title: "Éxito",
            text: "La reservación se ha enviado exitosamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        },
        function (error) {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al enviar la reservación.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      );
  });

  btnLimpiar.addEventListener("click", function () {
    form.reset();
    carrito.innerHTML = "";
  });
});
