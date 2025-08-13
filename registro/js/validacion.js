function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const registro = document.getElementById("registroForm");

registro.addEventListener("submit", function (event) {
  const password = document.getElementById("password1").value;
  const confirmPassword = document.getElementById("password2").value;

  if (password !== confirmPassword) {
    event.preventDefault();
    showAlertError();
  }
});