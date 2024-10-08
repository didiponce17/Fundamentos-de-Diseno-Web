"use extrict";

window.addEventListener("load", init, false);

function init() {
  let email = document.getElementById("inscriptionTxt");
  let btnEnviar = document.getElementById("btnSend");
  let expressionEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let alerta = document.getElementById("mensajeAlert");

  btnEnviar.onclick = function () {
    email = inscriptionTxt.value;

    if (email === "") {
      alerta.textContent =
        translations[document.documentElement.lang || "es"].emailVacio; // "El campo email está vacío"
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (expressionEmail.test(email) === false) {
      alerta.textContent =
        translations[document.documentElement.lang || "es"].emailInvalido; // "Email inválido"
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else {
      alerta.textContent =
        translations[document.documentElement.lang || "es"].registroExitoso; // "Su registro fue exitoso"
      alerta.classList.add("alertaVerde");
      alerta.classList.remove("alertaRoja");

      // Enviar el formulario con EmailJS
      emailjs.sendForm(
        "service_g9yebvl",
        "template_8hwmunm",
        "#inscription",
        "cE2PsQHyz3CkYrtWX"
      );
      cleanInputs();
    }
  };

  function cleanInputs() {
    inscriptionTxt.value = "";
  }
}
