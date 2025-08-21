// Atividade 1
let btn = document.getElementById('math')
let nInput1 = document.getElementById('num1')
let nInput2 = document.getElementById('num2');
let result = document.querySelector('.result')

btn.addEventListener('click', () => {
        let n1 = Number(nInput1.value)
        let n2 = Number(nInput2.value)
        operacoes(n1, n2)
    }
)

function operacoes(n1, n2) {
    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2

    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${sub}`);
    console.log(`Multiplicação: ${mult}`);
    console.log(`Divisão: ${div}`);

    result.innerHTML = `
        <h3>Resultados das Operações</h3>
        <p>Soma: ${soma}</p>
        <p>Subtração: ${sub}</p>
        <p>Multiplicação: ${mult}</p>
        <p>Divisão: ${div}</p>
    `
}

// Atividade 2
function check() {
    let idade = document.getElementById('age').value
    const cnh = document.querySelector("input[name='cnh']:checked").value
    let result = document.querySelector('.res')

    if(idade >= 18 && cnh === "sim") {
        result.textContent = "Pode Dirigir"
        result.className = "verde"
    } else {
        result.textContent = "Não Pode Dirigir"
        result.className = "vermelho"
    }    
}

// Atividade 3
function show() {
    let result = document.querySelector('.rest')

    if(idade >= 18 && cnh === "sim") {
        result.textContent = "Pode Dirigir"
        result.className = "verde"
    } else {
        result.textContent = "Não Pode Dirigir"
        result.className = "vermelho"
    }    
}