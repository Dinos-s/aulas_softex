"use strict";
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá eu sou ${this.nome} e, tenho ${this.idade} anos`;
    }
}
const aluno1 = new Pessoa("Gabriel", 23);
console.log(aluno1.apresentar());
