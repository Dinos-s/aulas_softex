let notas = [
    [7, 8, 9],
    [6, 5, 8],
    [10, 9, 9]
];

let medias = [];

for (let i = 0; i < notas.length; i++) {
    let soma = 0;
    for (let j = 0; j < notas[i].length; j++) {
        soma += notas[i][j];
    }
    medias.push(soma / notas[i].length);
}

console.log("Médias das turmas:", medias);