// Atividade 1
let num = document.getElementById('num1')
let btn = document.getElementById('math')
let result = document.querySelector('.result')

btn.addEventListener('click', () => {
    let n1 = Number(num.value)
    result.innerHTML = ' '
    for (let i = 1; i <= 10; i++) {
       result.innerHTML += `${n1} X ${i} = ${n1 * i} <br>`;
    }
})

