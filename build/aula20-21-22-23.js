"use strict";
class Conta {
    numero;
    titular;
    saldoConta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Numero: ${this.numero}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            this.saldoConta -= valor;
        }
        console.log(`Saldo insuficiente`);
    }
}
class contaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo....:PF`);
        super.info();
        console.log(`cpf.....${this.cpf}`);
        console.log("----------------------------------");
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log("Valor de deposito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
class contaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo....:pj`);
        super.info();
        console.log(`cnpj.....${this.cnpj}`);
        console.log("----------------------------------");
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log("Valor de deposito muito grande para este tipo de conta");
        }
        else {
            super.deposito(valor);
        }
    }
}
const cont1 = new contaPF(111, "bruno");
const cont2 = new contaPJ(222333, "Gustavo");
cont1.deposito(150);
console.log(cont1.saldo());
cont2.deposito(1000);
