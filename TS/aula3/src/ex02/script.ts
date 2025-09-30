class Calculadora {

    somar(n1: number, n2:number): number {
        return n1 + n2
    }

    subtrair(n1: number, n2:number): number {
        return n1 - n2
    }

    mulltiplicar(n1: number, n2:number): number {
        return n1 * n2
    }

    dividir(n1: number, n2:number): number | string {
        if (n2 === 0) {
            return "Erro: Divisão por zero!";
        }
        return n1 / n2;
    }
}

const calc = new Calculadora()

function valores(): [number, number]{
    let n1 = document.getElementById('num1') as HTMLInputElement
    let n2 = document.getElementById('num2') as HTMLInputElement

    const num1 = Number(n1.value);
    const num2 = Number(n2.value);

    return [num1, num2];
}


function exibirResultado(resultado: number | string, isError: boolean = false): void {
    const resultadoSpan = document.getElementById('resultado') as HTMLSpanElement;
    
    // Atualiza o conteúdo
    resultadoSpan.textContent = resultado.toString();

    // Aplica estilo de erro se for o caso
    if (isError) {
        resultadoSpan.style.color = '#dc3545'; // Vermelho
        resultadoSpan.style.fontWeight = '700';
    } else {
        resultadoSpan.style.color = '#007bff'; // Azul
        resultadoSpan.style.fontWeight = '900';
    }
}


document.getElementById('sum')?.addEventListener('click', () => {
    const valores = valores();
    if (valores) {
        const resultado = calc.somar(valores[0], valores[1]);
        exibirResultado(resultado);
    }
});

document.getElementById('sub')?.addEventListener('click', () => {
    const valores = valores();
    if (valores) {
        const resultado = calc.subtrair(valores[0], valores[1]);
        exibirResultado(resultado);
    }
});

document.getElementById('mul')?.addEventListener('click', () => {
    const valores = valores();
    if (valores) {
        const resultado = calc.multiplicar(valores[0], valores[1]);
        exibirResultado(resultado);
    }
});

document.getElementById('div')?.addEventListener('click', () => {
    const valores = valores();
    if (valores) {
        const resultado = calc.dividir(valores[0], valores[1]);
        
        // Verifica se o resultado é uma string de erro
        if (typeof resultado === 'string') {
            exibirResultado(resultado, true);
        } else {
            exibirResultado(resultado);
        }
    }
});