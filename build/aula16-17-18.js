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
    Info() {
        console.log(`Nome..: ${this.nome}`);
        console.log(`ram...: ${this.ram}`);
        console.log(`cpu...: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "sim" : "nao"}`);
        console.log("-----------------------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    delisgar() {
        this.ligado = false;
    }
}
const C1 = new Computador("rapidao", 64, 10);
const C2 = new Computador("carao", 32, 5);
const C3 = new Computador("gamer", 128, 10);
C1.ligar();
C3.ligar();
C1.Info();
C2.Info();
C3.Info();
