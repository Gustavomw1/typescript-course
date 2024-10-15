"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
    }
}
const C1 = new Computador("rapidao", 64, 10);
const C2 = new Computador("carao", 32, 5);
const C3 = new Computador("gamer", 128, 10);
console.log(C1.nome);
console.log(C2.nome);
console.log(C3.nome);
