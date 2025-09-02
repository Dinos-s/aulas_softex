// Atividade 1
let notaAluno = [
    [7, 5, 9], //Aluno 1
    [1, 4, 6], //Aluno 2
    [2, 8, 9]  //Aluno 3
]
let materia = ["matemática", "história", "arte"]
let media
let soma = 0
const tabela = document.querySelector('#tableNotas')

for (let h = 0; h < notaAluno.length; h++) {
    let linha = document.createElement("tr")

    let celAluno = document.createElement("td")
    celAluno.textContent = `Aluno ${h+1}`
    linha.appendChild(celAluno)

    soma = 0
    for (let i = 0; i < notaAluno[h].length; i++) {
        let celNota = document.createElement("td")
        celNota.textContent = notaAluno[h][i]  
        linha.appendChild(celNota)
        soma = soma + notaAluno[h][i]    
    }
    media = (soma/notaAluno[h].length);
    let celMedia = document.createElement("td")
    celMedia.textContent = media.toFixed(2)
    linha.appendChild(celMedia)

    // let celSitua = document.createElement("td")
    // if (media >= 7) {        
        
    //     celSitua.textContent = "OK"
    // } else {
    //     celSitua.textContent = "Falha"
        
    // }
    // linha.appendChild(celSitua)

    tabela.appendChild(linha)
}

//Atividade 2
let notaAlunos = [
    [7, 5, 9], //Aluno 1
    [1, 4, 6], //Aluno 2
    [2, 8, 9], //Aluno 3
    [9, 5, 8]  //Aluno 4
]
let medi
let som = 0
let situacao
const tabel = document.querySelector('#tableNota')

for (let r = 0; r < notaAlunos.length; r++) {
    let line = document.createElement("tr")

    let celAlu = document.createElement("td")
    celAlu.textContent = `Aluno ${r+1}`
    line.appendChild(celAlu)

    som = 0
    for (let s = 0; s < notaAlunos[r].length; s++) {
        let celNot = document.createElement("td")
        celNot.textContent = notaAlunos[r][s]  
        line.appendChild(celNot)
        som = som + notaAlunos[r][s]    
    }
    medi = (som/notaAlunos[r].length);
    let celMedi = document.createElement("td")
    celMedi.textContent = medi.toFixed(2)
    line.appendChild(celMedi)

    let celSitua = document.createElement("td")
    if (medi >= 7) {        
        celSitua.classList.add("aprovado")
        celSitua.textContent = "Aprovado"
    } else {
        celSitua.classList.add("reprovado")
        celSitua.textContent = "Reprovou"
        
    }
    line.appendChild(celSitua)

    tabel.appendChild(line)
}