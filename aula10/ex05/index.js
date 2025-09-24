class Funcionario {
    nome
    salario

    constructor(nome, salario) {
        this.nome = nome
        this.salario = salario
    }

    descricao() {
        return `Funcionario ${this.nome} recebe R$ ${this.salario.toFixed(2)}`   
    }
}

class Gerente extends Funcionario {
    departamento
    constructor(nome, salario, departamento) {
        super(nome, salario)
        this.departamento = departamento
    }

    descricao() {
        return `Gerente ${this.nome} do departamento ${this.departamento} recebe R$ ${this.salario.toFixed(2)}`
    }
}

const fun1 = new Funcionario()
const ger1 = new Gerente()
fun1.nome = "João"
fun1.salario = 2000.00

ger1.nome = "Maria"
ger1.salario = 5000.00
ger1.departamento = "Vendas"

console.log(fun1.descricao());
console.log(ger1.descricao());
