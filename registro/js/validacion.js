function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
let botonRegistro = document.getElementById("regBtn");
botonRegistro.addEventListener("click", function(event) {
    event.preventDefault();
    let password = document.getElementById("password1").value;
    if (password.length < 6) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
});