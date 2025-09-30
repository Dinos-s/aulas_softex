let nome = document.getElementById('nome') as HTMLInputElement
let resposta = document.getElementById('res') as HTMLElement

function apresentar():void {
    resposta.innerText = `Olá, me chamo ${nome.value}.`
}