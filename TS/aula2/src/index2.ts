class Produto {
    nome:string
    preco:number

    constructor(nome:string, preco:number) {
        this.nome = nome
        this.preco = preco
    }

    desconto(porcentagem: number) {
        let desconto = this.preco - ((this.preco * porcentagem) / 100)
        return `Valor do ${this.nome} com ${porcentagem}% de desconto: R$ ${desconto.toFixed(2)}`
    }
}

const produto = new Produto("Leite", 11.50)
console.log(produto.desconto(10));

const produto2 = new Produto("Frango", 9.43)
console.log(produto2.desconto(5));
