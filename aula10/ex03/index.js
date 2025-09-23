class Retangulo {
    constructor (largura, altura) {
        this.largura = largura
        this.altura = altura
    }

    area(){
        return "Area: ", this.largura * this.altura
    }

    perimetro() {
        return "Perimetro: ", 2*(this.largura + this.altura)
    }
}

const retangulo1 = new Retangulo()
retangulo1.largura = 5
retangulo1.altura = 3

console.log(retangulo1.area(), retangulo1.perimetro());
