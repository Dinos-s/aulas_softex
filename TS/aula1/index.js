"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bicicleta {
    // atributos
    cor = "vermelho";
    aro = 29;
    tipoFreio = "disco";
}
// atividade 2
// biblioteca
class Livro {
    id = 0;
    titulo = "";
    autor = "";
    genero = "";
    preco = 0.00;
    status = true;
    // metodo
    mudarStatus() {
        this.status = !this.status;
    }
}
class Pessoa {
    nome = "";
    idade = 0;
    email = "";
}
class Aluno extends Pessoa {
    matricula = 0;
    senha = "";
}
class Bibliotecario extends Pessoa {
    matricula = 0;
    salario = 0.00;
    senha = "";
    show() {
        this.nome;
    }
}
class Professor extends Pessoa {
    matricula = 0;
    salario = 0.00;
    materia = "";
}
class Biblioteca {
    acervo = [];
    users = [];
    addLivro(livro) {
        this.acervo.push(livro);
        console.log(`O liro: ${livro.titulo}, foi adicionado ao avervo`);
    }
    addUser(user) {
        this.users.push(user);
        console.log(`O usuário: ${user.nome}, foi cadastrado com sucesso`);
    }
    allUsers() {
        console.log("--- Users cadastrados ---");
        this.users.forEach(user => {
            console.log(`
                Nome: ${user.nome},
                Idade: ${user.idade},
                E-mail: ${user.email}
            `);
        });
    }
    allLivros() {
        console.log("--- Acervo da Biblioteca ---");
        this.acervo.forEach(livro => {
            console.log(`
                ID: ${livro.id},
                Título: ${livro.titulo},
                Autor: ${livro.autor},
                Genero: ${livro.genero},
                Preco: ${livro.preco}    
            `);
        });
    }
    livroPorTitulo(titulo) {
        return this.acervo.find(livro => livro.titulo === titulo);
    }
}
const miniBiblioteca = new Biblioteca();
const livro1 = new Livro();
livro1.id = 1;
livro1.titulo = "O Senhor dos Anéis";
livro1.autor = "J.R.R Tolkein";
livro1.genero = "Fantasia";
livro1.preco = 59.99;
const livro2 = new Livro();
livro2.id = 2;
livro2.titulo = "Biblia Sagrada";
livro2.autor = "Deus";
livro2.genero = "Religião";
livro2.preco = 10.00;
miniBiblioteca.addLivro(livro1);
miniBiblioteca.addLivro(livro2);
const aluno = new Aluno();
aluno.nome = "Gabriel";
aluno.email = "gabriel@examplo.com";
aluno.idade = 23;
aluno.matricula = 1234;
aluno.senha = "senha123";
const bibliotecario = new Bibliotecario();
bibliotecario.nome = "jorge";
bibliotecario.email = "jorel@examplo.com";
bibliotecario.idade = 23;
bibliotecario.salario = 3500.00;
bibliotecario.matricula = 1234;
bibliotecario.senha = "senha123";
console.log(bibliotecario.show());
miniBiblioteca.addUser(bibliotecario);
miniBiblioteca.addUser(aluno);
console.log("------------");
miniBiblioteca.allLivros();
miniBiblioteca.allUsers();
//# sourceMappingURL=index.js.map