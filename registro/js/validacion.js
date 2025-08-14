function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function EsVacio(){

    let inputs = document.querySelectorAll("input");
    let esVacio = false;

    inputs.forEach(function(input) {
        if (input.value === "") {
            esVacio = true;
        }
    });

    if (hayVacio) {
        showAlertError();
    } else {
        showAlertSuccess();
    }
}