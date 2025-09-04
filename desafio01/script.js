let nomeInput = document.getElementById("nome");
let notaInput = document.getElementById("nota1");
let nota2Input = document.getElementById("nota2");
let nota3Input = document.getElementById("nota3");
let situa
const tabela = document.querySelector(".tabela")

function show() {
    let nome = nomeInput.value;
    let nota1 = Number(notaInput.value);
    let nota2 = Number(nota2Input.value);
    let nota3 = Number(nota3Input.value);

    if (nome === "" || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        situa = "Aprovado";
    } else if (media >= 5 && media < 7) {
        situa = "Recuperação";
    } else {
        situa = "Reprovado";
    }

    let linha = document.createElement("tr");
    let celulaNome = document.createElement("td");
    celulaNome.textContent = nome;
    linha.appendChild(celulaNome)

    let celulaNota1 = document.createElement("td");
    celulaNota1.textContent = nota1;
    linha.appendChild(celulaNota1)

    let celulaNota2 = document.createElement("td");
    celulaNota2.textContent = nota2
    linha.appendChild(celulaNota2)

    let celulaNota3 = document.createElement("td");
    celulaNota3.textContent = nota3
    linha.appendChild(celulaNota3)

    let celulaMedia = document.createElement("td");
    celulaMedia.textContent = media.toFixed(2)
    linha.appendChild(celulaMedia)

    let celulaSituacao = document.createElement("td");
    celulaSituacao.textContent = situa
    linha.appendChild(celulaSituacao)

    tabela.appendChild(linha)

    nomeInput.value = "";
    notaInput.value = "";
    nota2Input.value = "";
    nota3Input.value = "";
}