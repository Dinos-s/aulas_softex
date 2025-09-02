let matriz = [
    [5, 10, 15, 20],
    [20, 25, 30, 35],
    [35, 40, 45, 50],
    [50, 55, 60, 65]
];

let somaDiagonal = 0;

for (let i = 0; i < matriz.length; i++) {
    somaDiagonal += matriz[i][i];
}

console.log("A soma da diagonal principal é:", somaDiagonal);