/* conexion con HTML usando el id bnt-login y cargando la funcion llamada login */
document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login */
function validation_alert(ptext) {
  Swal.fire({
    /* icon: "error", */
    title: "Validar Datos",
    text: ptext,
    confirmButtonText: "Reintentar",
    confirmButtonColor: "#8BC34A",

    width: "400px",

    html:
      '<iframe src="https://lottie.host/embed/9dc85b90-0c4b-4ce4-84e6-71c132aa8aab/CUgPgW832m.json"></iframe><br><p>' +
      ptext +
      "</p>",
  });
}

//funcion login
function login() {
  let user_input = document.getElementById("in-txt-user").value;
  let pass_input = document.getElementById("in-txt-pass").value;
  // declaracion de los datos usuario y password respectivamente
  let username = "cenfo";
  let password = "123";
  //identificadores de los campos username y password
  let input = [user_input, pass_input];
  let input_id = ["in-txt-user", "in-txt-pass"];
  let error_count = 0;
  let text = "";
  //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
  for (let i = 0; i < input.length; i++) {
    document.getElementById(input_id[i]).classList.remove("error");
    if (input[i] == "") {
      text = "¡Atención! No debe haber espacios vacíos.";
      validation_alert(text);
      document.getElementById(input_id[i]).classList.add("error");
      error_count++;
    }
  }

  //validacion si los campos username y password son iguales
  if (error_count == 0) {
    if (user_input == username && pass_input == password) {
      Swal.fire({
        //icon: success
        title: "Verificación Finalizada",
        showConfirmButton: false,
        width: "400px",
        //milisegundos equivalen a 5seg
        timer: "5000",
        html: '<iframe src="https://lottie.host/embed/95e00056-fd96-4405-b1ca-05bdde4b53d9/ReCuOymf6K.json"></iframe> <br><br><p>¡Aquí comienza la travesía, explorador!</p>',
      }).then(() => {
        (window.location.href = "inicio.html"), "blank";
      });
    } else {
      text = "Usuario o Contraseña Incorrectas";
      //carga la funcion de arriba
      validation_alert(text);
    }
  }
}
