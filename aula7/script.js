// Atividade 1
let saudacao = document.querySelector('#saudacao')

function saldacao(nome) {
    saudacao.classList.remove('hidden') // remove a classe hidden
    saudacao.innerHTML = `<p>Olá <strong>${nome}</strong>! Seja bem vindo!</p>`
}


// Atividade 2
let numInput = document.querySelector('#num1')
let result = document.querySelector('.result')

function dobro(num) {
    num = Number(num.value)
    if (num == 0 || isNaN(num)        ) {
        result.classList.remove('hidden')
        result.classList.add('error')
        result.innerHTML = `<p>Por favor, digite um número válido.</p>`
    } else {
        result.classList.remove('hidden')
        result.classList.remove('error')
        result.innerHTML = `<p>O dobro de ${num} é ${num * 2}!</p>`
    }
}

// Atividade 3
let numero1 = document.querySelector('#nu1')
let numero2 = document.querySelector('#nu2')
let result2 = document.querySelector('.result2')

function operacoes(n1, n2) {
    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2


    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${sub}`);
    console.log(`Multiplicação: ${mult}`);
    console.log(`Divisão: ${div}`);

    result2.classList.remove('hidden')
    result2.innerHTML = `
        <h3>Resultados das Operações</h3>
        <p>Soma: ${soma}</p>
        <p>Subtração: ${sub}</p>
        <p>Multiplicação: ${mult}</p>
        <p>Divisão: ${div.toFixed(2)}</p>
    `
}