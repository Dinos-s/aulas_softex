let soma = 0
let resultado = document.getElementById("resultado");
let numero = (prompt("Digite um número (ou 0 para parar):"));

while (numero != 0) {
    soma += Number(numero)
    numero = (prompt("Digite outro número (ou 0 para parar):"));
}
resultado.innerHTML = `A soma total é: ${soma}`;