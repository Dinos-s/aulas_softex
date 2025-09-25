class Animal {
    falar() {
        return "som do animal"
    }
}

class Gato extends Animal {
    falar(): string {
        return "Miau"
    }
}

class Cachorro extends Animal {
    falar(): string {
        return "Au Au"
    }
}

const animais: Animal[] = [new Gato(), new Cachorro()]

animais.forEach((animal, i) => {
    console.log(animal.falar());
    
});