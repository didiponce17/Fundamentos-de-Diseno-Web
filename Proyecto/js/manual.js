// Manual de Uso
document
  .getElementById("manualBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón

    Swal.fire({
      title: "Manual de Uso",
      text: 'Haciendo clic en "Aceptar" abrirás el Manual de Uso en una nueva pestaña y también se descargará.',
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Abre el PDF en una nueva pestaña
        window.open("pdf/manual.pdf", "_blank");

        // Simula el clic en el enlace para descargar el PDF
        const link = document.createElement("a");
        link.href = "pdf/manual.pdf";
        link.download = "manual.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    });
  });
