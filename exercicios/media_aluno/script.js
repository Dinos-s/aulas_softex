let aluno1 = [5, 3, 7]
let aluno2 = [6, 4, 8]
let aluno3 = [7, 5, 9]

let soma = 0
let soma2 = 0
let soma3 = 0

let media = 0

for (let i = 0; i < aluno1.length; i++) {
    soma += aluno1[i]
    console.log(soma);
}
for (let i = 0; i < aluno2.length; i++) {
    soma2 += aluno2[i]
    console.log(soma2);
}
for (let i = 0; i < aluno3.length; i++) {
    soma3 += aluno3[i]
    console.log(soma3);
}

media = soma / aluno1.length
console.log("A média das notas do aluno 1 é:", media)
media = soma2 / aluno2.length
console.log("A média das notas do aluno 2 é:", media)
media = soma3 / aluno3.length
console.log("A média das notas do aluno 3 é:", media)
