"use strict";

window.addEventListener("load", init, false);

function init() {
  let nombre = document.getElementById("nombreTxt");
  let apellido = document.getElementById("apellidoTxt");
  let question1 = document.getElementById("question1Txt");
  let question2 = document.getElementById("question2Txt");
  let question3 = document.getElementById("question3Txt");
  let question4 = document.getElementById("question4Txt");
  let question5 = document.getElementById("question5Txt");
  let alerta = document.getElementById("mensajeAlert");
  let btnEnviar = document.getElementById("btnSend");

  btnEnviar.onclick = function () {
    nombre = nombreTxt.value;
    apellido = apellidoTxt.value;
    question1 = question1Txt.value;
    question2 = question2Txt.value;
    question3 = question3Txt.value;
    question4 = question4Txt.value;
    question5 = question5Txt.value;

    if (
      nombre === "" &&
      apellido === "" &&
      question1 === "" &&
      question2 === "" &&
      question3 === "" &&
      question4 === "" &&
      question5 === ""
    ) {
      alerta.textContent = "Debe llenar todos los campos";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (nombre === "") {
      alerta.textContent = "El campo nombre esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (apellido === "") {
      alerta.textContent = "El campo apellido esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question1 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question1 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question1 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question1 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question2 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question3 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question4 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question4 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else if (question5 === "") {
      alerta.textContent = "La campo respuesta esta vacío";
      alerta.classList.add("alertaRoja");
      alerta.classList.remove("alertaVerde");
    } else {
      //si NO existe error en los campos validados se envian los datos al servidor de correo
      alerta.textContent = "Mensaje enviado";
      alerta.classList.add("alertaVerde");
      alerta.classList.remove("alertaRoja");
      //service ID/template ID/ID form/public key cuenta
      //el id del formulario es #form
      //emailjs.sendForm('service_fp2hl18', 'template_xpu3kpr', '#form1', 'wptpEuD87H_TTMDE8');
      emailjs.sendForm(
        "service_q6cbub6",
        "template_w5n8t9e",
        "#encuestaForm",
        "UL2-8B04fjNz0P3iH"
      );
      //carga de la funcion limpiar
      limpiar();
    }
  };

  function limpiar() {
    nombreTxt.value = "";
    apellidoTxt.value = "";
    question1Txt.value = "";
    question2Txt.value = "";
    question3Txt.value = "";
    question4Txt.value = "";
    question5Txt.value = "";
  }
}
