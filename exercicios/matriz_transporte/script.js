let secMatriz = document.getElementById("matriz");
let secMatrizTransposta = document.getElementById("transposta");

let matriz = [
    [5, 9, 50],
    [10, 8, 60]
]

let transposta = []

for (let i = 0; i < matriz[0].length; i++) {
    transposta[i] = []
    for (let j = 0; j < matriz.length; j++) {
        transposta[i][j] = matriz[j][i]
    }
}

console.log("Matriz original:");
console.log(matriz);
console.log("Matriz transposta:");
console.log(transposta);
