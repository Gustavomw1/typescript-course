class Conta {
  public numero: number;
  public titular: string;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
  }

  gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }
}

class contaPF extends /*extendendo*/ Conta {
  cpf: number;

  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
}

class contaPJ extends Conta {
  cnpj: number;

  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
}

const cont1 = new contaPF(111, "bruno");
const cont2 = new contaPJ(222333, "Gustavo");

console.log(cont1);
console.log("------------------------------------------------");
console.log(cont2);
