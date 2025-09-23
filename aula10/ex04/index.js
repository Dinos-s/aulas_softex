class ContaBancaria {
    #saldo = 0

    // constructor (saldo) {
    //     this.#saldo = saldo
    // }

    depositar(valor){
        this.#saldo += valor
        return `O valor de ${valor} foi depositado;
        Saldo na conta: ${this.#saldo}`
    }

    sacar(valor) {
        if(this.#saldo > valor) {
            this.#saldo -= valor
            return `O valor de ${valor} foi retirado da conta;
            Saldo na conta ${this.#saldo}`
        } else {
            return `A conta não possui saldo sufiuciente, saldo na conta: ${this.#saldo}, valor que seria retirado ${valor}`
        }
        
    }

    verSaldo(){
        return `Saldo atual: ${this.#saldo}`
    }
}

const conta1 = new ContaBancaria()
// conta1.saldo = 50

console.log(conta1.depositar(100));
console.log(conta1.sacar(30))
console.log(conta1.sacar(80));
console.log(conta1.verSaldo());
