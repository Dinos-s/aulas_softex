let numero = document.getElementById('numero')
let resultado = document.getElementById('resultado')

function calcularTabuada() {
    let n = Number(numero.value)
    resultado.innerHTML = ""

    for (let i = 1; i <= 10; i++) {
        resultado.innerHTML += `${n} x ${i} = ${n * i}<br>`
    }
}