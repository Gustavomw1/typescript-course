class Computador {
  private id: number;
  public nome: string;
  private ram: number;
  private cpu: number;
  protected ligado: boolean;

  constructor(n: string, ram: number, cpu: number) {
    this.nome = n;
    this.ram = ram;
    this.cpu = cpu;
    this.ligado = false;
    this.id = 0;
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

  upRam(qtde: number): void {
    if (qtde >= 0 && qtde <= 1000) {
      this.ram = qtde;
    } else {
      console.log(`Quantidade ${qtde} não é permitifo`);
    }
  }
}

//Instanciar
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
