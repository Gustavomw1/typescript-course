class Conta {
  //public acessado de qualquer lugar
  //private Acessado somente na sua propria classe
  //protected Acessado somente na sua propria classe e nas classes filhos
  protected numero: number;
  protected titular: string;
  private saldoConta: number;

  constructor(titular: string) {
    this.numero = this.gerarNumeroConta();
    this.titular = titular;
    this.saldoConta = 0;
  }

  private gerarNumeroConta(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }
  protected info() {
    console.log(`Titular: ${this.titular}`);
    console.log(`Numero: ${this.numero}`);
  }
  public saldo(): number {
    return this.saldoConta;
  }
  protected deposito(valor: number) {
    this.saldoConta += valor;
  }
  protected saque(valor: number) {
    if (valor >= this.saldoConta) {
      this.saldoConta -= valor;
    }
    console.log(`Saldo insuficiente`);
  }
}

class contaPF extends /*extendendo*/ Conta {
  cpf: number;

  constructor(cpf: number, titular: string) {
    super(titular);
    this.cpf = cpf;
  }
  info() {
    console.log(`Tipo....:PF`);
    super.info();
    console.log(`cpf.....${this.cpf}`);
    console.log("----------------------------------");
  }
  public deposito(valor: number) {
    if (valor > 1000) {
      console.log("Valor de deposito muito grande para este tipo de conta");
    } else {
      super.deposito(valor);
    }
  }
}

class contaPJ extends Conta {
  cnpj: number;

  constructor(cnpj: number, titular: string) {
    super(titular);
    this.cnpj = cnpj;
  }
  info() {
    console.log(`Tipo....:pj`);
    super.info();
    console.log(`cnpj.....${this.cnpj}`);
    console.log("----------------------------------");
  }
  public deposito(valor: number) {
    if (valor > 10000) {
      console.log("Valor de deposito muito grande para este tipo de conta");
    } else {
      super.deposito(valor);
    }
  }
}

const cont1 = new contaPF(111, "bruno");
const cont2 = new contaPJ(222333, "Gustavo");

cont1.deposito(150);
console.log(cont1.saldo());

cont2.deposito(1000);

//cont1.info();
//cont2.info();
