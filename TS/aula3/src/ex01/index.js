var nome = document.getElementById('nome');
var resposta = document.getElementById('res');
function apresentar() {
    resposta.innerText = "Ol\u00E1, me chamo ".concat(nome.value, ".");
}
