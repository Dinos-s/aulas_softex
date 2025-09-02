let numInput1 = document.getElementById('num1');
let numInput2 = document.getElementById('num2');
let resultado = document.getElementById('resultado');

function calcular() {
    let valor1 = parseFloat(numInput1.value);
    let valor2 = parseFloat(numInput2.value);

    let soma = valor1 + valor2;
    let subtracao = valor1 - valor2;
    let multiplicacao = valor1 * valor2;
    let divisao = valor1 / valor2;

    resultado.textContent = "Soma: " + soma + ", Subtração: " + subtracao + ", Multiplicação: " + multiplicacao + ", Divisão: " + divisao;
}