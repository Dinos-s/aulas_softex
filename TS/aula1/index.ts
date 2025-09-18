class bicicleta {
    // atributos
    cor:string = "vermelho";
    aro:number = 29;
    tipoFreio:string = "disco";


    // metodos
    trocarMarcha()
    freiar()
}

// atividade 2

biblioteca

class livro {
    id:number
    titulo:string
    autor:string
    genero:string
    preco:number
    status:boolean      

    // metodo
    mudarStatus()
}

class pessoa {
    nome:string
    idade:number
    email:string
}

class aluno extends pessoa {
    matricula:number
    senha:string
}

class bibliotecario extends pessoa {
    matricula:number
    salario:number
    senha:string
}

class professor extends pessoa {
    matricula:number
    salario:number
    materia:string
}