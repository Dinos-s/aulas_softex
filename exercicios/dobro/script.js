let inputNum = document.getElementById("numero");
let resultado = document.getElementById("resultado");

function calcularDobro() {
    let valor = parseFloat(inputNum.value);
    resultado.textContent = "O dobro de " + valor + " é " + (valor * 2);
    inputNum.value = "";
}