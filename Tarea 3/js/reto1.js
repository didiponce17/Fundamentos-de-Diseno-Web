document.addEventListener("DOMContentLoaded", function () {
  const facturaForm = document.getElementById("facturaForm");
  const resultadosDiv = document.getElementById("resultados");
  const clienteInput = document.getElementById("cliente");
  const articuloInput = document.getElementById("articulo");
  const cantidadInput = document.getElementById("cantidad");
  const precioInput = document.getElementById("precio");
  const facturarBtn = document.getElementById("facturarBtn");
  const borrarBtn = document.getElementById("borrarBtn");
  const correoBtn = document.getElementById("correoBtn");
  const imprimirBtn = document.getElementById("imprimirBtn");

  facturaForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const cliente = clienteInput.value;
    const articulo = articuloInput.value;
    const cantidad = parseInt(cantidadInput.value);
    const precio = parseFloat(precioInput.value);
    const subtotal = cantidad * precio;
    const iva = subtotal * 0.13;
    const servicio = subtotal * 0.05;
    const total = subtotal + iva + servicio;

    resultadosDiv.innerHTML = `
      <h4>Factura Digital</h4>
      <p><strong>Cliente:</strong> ${cliente}</p>
      <table>
        <thead>
          <tr>
            <th>Artículo</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${articulo}</td>
            <td>${cantidad}</td>
            <td>₡${precio.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <div class="totales">
        <div class="total-item">
          <span><strong>Subtotal:</strong></span>
          <span>₡${subtotal.toFixed(2)}</span>
        </div>
        <div class="total-item">
          <span><strong>IVA 13%:</strong></span>
          <span>₡${iva.toFixed(2)}</span>
        </div>
        <div class="total-item">
          <span><strong>Servicio 5%:</strong></span>
          <span>₡${servicio.toFixed(2)}</span>
        </div>
        <div class="total-item">
          <span><strong>Total a pagar:</strong></span>
          <span>₡${total.toFixed(2)}</span>
        </div>
      </div>
    `;
  });

  borrarBtn.addEventListener("click", function () {
    facturaForm.reset();
    resultadosDiv.innerHTML = "";
  });

  correoBtn.addEventListener("click", function () {
    alert("Correo enviado.");
  });

  imprimirBtn.addEventListener("click", function () {
    alert("Imprimiendo...");
  });
});
