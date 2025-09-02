let numeros = [5, 10, 15, 20, 25];
let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

console.log("O maior número é:", maior);
console.log("O menor número é:", menor);