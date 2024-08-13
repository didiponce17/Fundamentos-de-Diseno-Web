document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("UL2-8B04fjNz0P3iH");

  const form = document.getElementById("reservacionForm");
  const btnCalcular = document.getElementById("btnCalcular");
  const btnFinalizar = document.getElementById("btnFinalizar");
  const carrito = document.getElementById("carrito");

  btnCalcular.addEventListener("click", function () {
    const nombre = document.getElementById("nombreTxt").value;
    const apellidos = document.getElementById("apellidosTxt").value;
    const correo = document.getElementById("correoTxt").value;
    const telefono = document.getElementById("telefonoTxt").value;
    const personas = document.getElementById("personasTxt").value;
    const fechaInicio = document.getElementById("fechaInicioTxt").value;
    const fechaFin = document.getElementById("fechaFinTxt").value;
    const hotel = document.getElementById("hotelTxt").value;
    const habitacion = document.getElementById("habitacionTxt").value;

    // Validación simple
    if (
      !nombre ||
      !apellidos ||
      !correo ||
      !telefono ||
      !personas ||
      !fechaInicio ||
      !fechaFin ||
      !hotel ||
      !habitacion
    ) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
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
      // Si el tipo de habitación no coincide, puedes asignar un valor por defecto o mostrar un mensaje de error
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
      (new Date(fechaFin) - new Date(fechaInicio)) / (1000 * 60 * 60 * 24)
    );
    const totalCosto = cantidadDias * costoPorNoche * personas;

    // Mostrar resultado
    carrito.innerHTML = `
      <h3>Resumen de Reservación</h3>
      <p><strong>Nombre:</strong> ${nombre} ${apellidos}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Fechas:</strong> ${fechaInicio} a ${fechaFin}</p>
      <p><strong>Hotel:</strong> ${hotel}</p>
      <p><strong>Habitación:</strong> ${habitacion}</p>
      <p><strong>Cantidad de personas:</strong> ${personas}</p>
      <p><strong>Cantidad de noches:</strong> ${cantidadDias}</p>
      <p><strong>Costo por noche:</strong> $${costoPorNoche}</p>
      <p><strong>Total:</strong> $${totalCosto.toFixed(2)}</p>
    `;
  });

  btnFinalizar.addEventListener("click", function () {
    const nombre = document.getElementById("nombreTxt").value;
    const apellidos = document.getElementById("apellidosTxt").value;
    const correo = document.getElementById("correoTxt").value;
    const telefono = document.getElementById("telefonoTxt").value;
    const personas = document.getElementById("personasTxt").value;
    const fechaInicio = document.getElementById("fechaInicioTxt").value;
    const fechaFin = document.getElementById("fechaFinTxt").value;
    const hotel = document.getElementById("hotelTxt").value;
    const habitacion = document.getElementById("habitacionTxt").value;

    // Validación simple
    if (
      !nombre ||
      !apellidos ||
      !correo ||
      !telefono ||
      !personas ||
      !fechaInicio ||
      !fechaFin ||
      !hotel ||
      !habitacion
    ) {
      Swal.fire({
        title: "Error",
        text: "Por favor, completa todos los campos.",
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
      // Si el tipo de habitación no coincide, puedes asignar un valor por defecto o mostrar un mensaje de error
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
      (new Date(fechaFin) - new Date(fechaInicio)) / (1000 * 60 * 60 * 24)
    );
    const totalCosto = cantidadDias * costoPorNoche * personas;

    // Preparar datos para enviar a EmailJS
    const templateParams = {
      from_name: nombre,
      nombre: nombre,
      apellidos: apellidos,
      correo: correo,
      telefono: telefono,
      personas: personas,
      fechaInicio: fechaInicio,
      fechaFin: fechaFin,
      hotel: hotel,
      habitacion: habitacion,
      cantidadNoches: cantidadDias,
      costoPorNoche: costoPorNoche,
      totalCosto: totalCosto.toFixed(2), // Añadir el total al objeto de parámetros
    };

    // Enviar datos a EmailJS
    emailjs.send("service_a1me03l", "template_il1g4qs", templateParams).then(
      function (response) {
        Swal.fire({
          title: "Éxito",
          text: "Tu reservación ha sido enviada con éxito.",
          icon: "success",
          confirmButtonText: "Aceptar",
        }).then(() => {
          // Redirigir a la página de inicio de sesión después de la alerta de éxito
          window.location.href = "login.html";
        });
        form.reset(); // Reset the form
        carrito.innerHTML = ""; // Clear reservation summary
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

  // Evento para el botón de limpiar
  btnLimpiar.addEventListener("click", function () {
    form.reset(); // Limpiar los campos del formulario
    carrito.innerHTML = ""; // Limpiar el resumen de reservación
  });
});
