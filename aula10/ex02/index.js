class Carro {
    constructor (marca, modelo, ano) {
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    detalhes(){
        return `Carro: ${this.marca}, ${this.modelo}, de ${this.ano}`
    }
}

const carro1 = new Carro()
carro1.marca = "VolkesWagen"
carro1.modelo = "GOL"
carro1.ano = 2003

const carro2 = new Carro()
carro2.marca = "Ford"
carro2.modelo = "GT40"
carro2.ano = 1965

const carro3 = new Carro()
carro3.marca = "BYD"
carro3.modelo = "Dolphin Mini"
carro3.ano = 2025

console.log(carro1.detalhes())
console.log(carro2.detalhes());
console.log(carro3.detalhes());