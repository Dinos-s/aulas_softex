let btn = document.getElementById('showMe')
let message = document.getElementById('message')
let nomeInput = document.getElementById('nome')

// Atividade N°5
btn.addEventListener('click', showMessage);

function showMessage(){
    let nome = 'Gabriel'
    let hobby = 'programar e ovir música'
    message.innerText= `Olá me chamo ${nome} e gosto de ${hobby}!`;
}

// Atividade N°4
function saldacao(nome) {
    nome = nomeInput.value
    window.alert(`Olá ${nome}! Seja bem vindo`)
}
