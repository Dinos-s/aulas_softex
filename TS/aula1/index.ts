class bicicleta {
    // atributos
    cor:string = "vermelho";
    aro:number = 29;
    tipoFreio:string = "disco";


    // metodos
    trocarMarcha(): void {
        console.log("Marcha trocada.");
    }

    freiar(): void {
        console.log("Bicicleta freiada.");
    }
}

// atividade 2

// biblioteca

class Livro {
    id:number = 0
    titulo:string = ""
    autor:string = ""
    genero:string = ""
    preco:number = 0.00
    status:boolean = true     

    emprestado?:Pessoa

    // metodo
    mudarStatus(): void {
        this.status = !this.status
    }
}

class Pessoa {
    nome:string = ""
    idade:number = 0
    email:string = ""
}

class Aluno extends Pessoa {
    matricula:number = 0
    senha:string = ""

    show(): string {
        return `
            --- Dados Do Aluno ---
            Matricula: ${this.matricula},
            Nome: ${this.nome},
            Idade: ${this.idade},
            E-mail: ${this.email}
        `
    }
}

class Bibliotecario extends Pessoa {
    matricula:number = 0
    salario:number = 0.00
    senha:string = ""

    show(): string {
        return `
            --- Dados Do Bibliotecário ---
            Matricula: ${this.matricula},
            Nome: ${this.nome},
            Idade: ${this.idade},
            E-mail: ${this.email},
            Salario: R$ ${this.salario.toFixed(2)}
        `
    }
}

class Professor extends Pessoa {
    matricula:number = 0
    salario:number = 0.00
    materia:string = ""

    show(): string {
        return `
            --- Dados Do Bibliotecário ---
            Matricula: ${this.matricula},
            Nome: ${this.nome},
            Idade: ${this.idade},
            Materia: ${this.materia},
            E-mail: ${this.email},
            Salario: R$ ${this.salario.toFixed(2)}
        `
    }
}

class Biblioteca {
    private acervo: Livro[] = []
    private users: Pessoa[] = []

    addLivro(livro: Livro): void {
        this.acervo.push(livro);
        console.log(`O liro: ${livro.titulo}, foi adicionado ao avervo`);        
    }

    addUser(user: Pessoa): void {
        this.users.push(user);
        console.log(`O usuário: ${user.nome}, foi cadastrado com sucesso`);
    }

    allUsers(): void {
        console.log("--- Users cadastrados ---");
        this.users.forEach(user=> {
            let Tipo: string;
            
            if (user instanceof Aluno) {
                Tipo = "Aluno"
            } else if (user instanceof Bibliotecario) {
                Tipo = "Bibliotecário"
            } else if (user instanceof Professor) {
                Tipo = "Professor"
            } else {
                Tipo = "Usuário generico"
            }

            console.log(`
                Nome: ${user.nome},
                Idade: ${user.idade},
                E-mail: ${user.email},
                Tipo de usuario: ${Tipo}
            `);
        })
    }

    allLivros(): void {
        console.log("--- Acervo da Biblioteca ---");
        this.acervo.forEach(livro => {
            console.log(`
                ID: ${livro.id},
                Título: ${livro.titulo},
                Autor: ${livro.autor},
                Genero: ${livro.genero},
                Preco: R$ ${livro.preco.toFixed(2)},
                Status: ${livro.status ? "Disponível" : "Emprestado"}
            `);
        })
    }

    livroPorTitulo(titulo: string): Livro | undefined {
        return this.acervo.find(livro => livro.titulo === titulo)
    }

    emprestarLivro(titulo: string, user: Pessoa): void {
        const livro = this.livroPorTitulo(titulo);
        if(livro && livro.status) {
            livro.mudarStatus()
            livro.emprestado = user
            console.log(`O livro: ${livro.titulo}, foi emprestado para o usuário: ${user.nome}`);
        } else if (livro) {
            console.log(`O livro: ${livro.titulo}, não está disponível no momento`);
        } else {
            console.log(`O livro com o título "${titulo}" não foi encontrado no acervo`);
        }
    }

    devolverLivro(titulo: string, user: Pessoa): void {
        const livro = this.livroPorTitulo(titulo);
        if(livro && !livro.status) {
            livro.mudarStatus()
            console.log(`O usuário: ${user.nome}, devolveu o livro: ${livro.titulo}`);
        } else if (livro) {
            console.log(`O livro: ${livro.titulo}, não está emprestado`);
        } else {
            console.log(`O livro com o título "${titulo}" não foi encontrado no acervo`);
        }
    }

    checkEmprestimo(titulo: string): void {
        const livro = this.livroPorTitulo(titulo);
        if(livro && !livro.status && livro.emprestado) {
            console.log(`O livro: ${livro.titulo}, está emprestado para o usuário: ${livro.emprestado.nome}`);
        } else if (livro) {
            console.log(`O livro: ${livro.titulo}, está disponível no acervo`);
        } else {
            console.log(`O livro com o título "${titulo}" não foi encontrado no acervo`);
        }
    }
}

const miniBiblioteca = new Biblioteca();

const livro1 = new Livro()
livro1.id = 1
livro1.titulo = "O Senhor dos Anéis"
livro1.autor = "J.R.R Tolkein"
livro1.genero = "Fantasia"
livro1.preco = 59.99

const livro2 = new Livro()
livro2.id = 2
livro2.titulo = "Biblia Sagrada"
livro2.autor = "Deus"
livro2.genero = "Religião"
livro2.preco = 10.00

miniBiblioteca.addLivro(livro1)
miniBiblioteca.addLivro(livro2)

const aluno = new Aluno()
aluno.nome = "Gabriel"
aluno.email = "gabriel@examplo.com"
aluno.idade = 23
aluno.matricula = 1234
aluno.senha = "senha123"
console.log(aluno.show());


const bibliotecario = new Bibliotecario()
bibliotecario.nome = "jorge"
bibliotecario.email = "jorel@examplo.com"
bibliotecario.idade = 23
bibliotecario.salario = 3500.00
bibliotecario.matricula = 57891
bibliotecario.senha = "Z3u5_25"
console.log(bibliotecario.show())

miniBiblioteca.addUser(bibliotecario)
miniBiblioteca.addUser(aluno)
console.log("------------");

miniBiblioteca.allLivros()
miniBiblioteca.allUsers()
miniBiblioteca.emprestarLivro("O Senhor dos Anéis", aluno)
console.log(`O livro "${livro1.titulo}" está ${livro1.status ? "Disponível" : "Emprestado"}`);
miniBiblioteca.devolverLivro("O Senhor dos Anéis", aluno)
console.log(`O livro "${livro1.titulo}" está ${livro1.status ? "Disponível" : "Emprestado"}`);

miniBiblioteca.checkEmprestimo("O Senhor dos Anéis")