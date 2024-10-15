class Computador {
  nome: string;
  ram: number;
  cpu: number;
  ligado: boolean;

  constructor(n: string, ram: number, cpu: number) {
    this.nome = n;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
  }

  Info(): void {
    console.log(`Nome..: ${this.nome}`);
    console.log(`ram...: ${this.ram}`);
    console.log(`cpu...: ${this.cpu}`);
    console.log(`ligado: ${this.ligado ? "sim" : "nao"}`);
    console.log("-----------------------------------------------");
  }

  ligar(): void {
    this.ligado = true;
  }

  delisgar(): void {
    this.ligado = false;
  }
}

//Instanciar
const C1 = new Computador("rapidao", 64, 10);
const C2 = new Computador("carao", 32, 5);
const C3 = new Computador("gamer", 128, 10);

C1.ligar();
C3.ligar();

C1.Info();
C2.Info();
C3.Info();
