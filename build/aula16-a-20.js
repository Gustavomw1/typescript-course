"use strict";
class Computador {
    id;
    nome;
    ram;
    cpu;
    ligado;
    constructor(n, ram, cpu) {
        this.nome = n;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        this.id = 0;
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
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000) {
            this.ram = qtde;
        }
        else {
            console.log(`Quantidade ${qtde} não é permitifo`);
        }
    }
}
const C1 = new Computador("rapidao", 64, 10);
const C2 = new Computador("carao", 32, 5);
const C3 = new Computador("gamer", 128, 10);
C1.delisgar();
C3.ligar();
C1.upRam(16);
C1.nome = "S rap";
C1.Info();
C2.Info();
C3.Info();
