"use strict";
class Animal {
    constructor(som) {
        this.som = som;
    }
    falar() {
        return this.som;
    }
}
class Gato extends Animal {
    constructor(som) {
        super(som);
        this.som = som;
    }
    falar() {
        return this.som;
    }
}
class Cachorro extends Animal {
    constructor(som) {
        super(som);
        this.som = som;
    }
    falar() {
        return this.som;
    }
}
const gato = new Gato("Miar");
const cao = new Cachorro("Latir");
console.log("Gato: ", gato.falar());
console.log("Cão: ", cao.falar());
