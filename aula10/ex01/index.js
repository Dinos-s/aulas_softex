class Pessoa {
    constructor (nome, idade) {
        this.name = nome
        this.idade = idade
    }

    apresentar(){
        return `Olá eu sou ${this.name} e, tenho ${this.idade} anos`
    }
}

const aluno1 = new Pessoa()
aluno1.name = "Gabriel"
aluno1.idade = 23

console.log(aluno1.apresentar());
