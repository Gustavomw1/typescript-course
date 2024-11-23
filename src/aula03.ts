// Uma classe permite criar objetos com propriedades.
class curso {
  canal = null; //Essa variavel começara como nula e recebera algo depois
  curso = null; //Essa variavel começara como nula e recebera algo depois

  // Constructor é chamado quando uma class é criada
  constructor(canal: any, curso: any) {
    // Recebendo os parametros curso e canal ambos com o any podendo receber qualquer tipo de dado

    this.canal = canal;
    this.curso = curso;
  }
}

let c1 = new curso("CFBcursos", "Typescript"); // criando uma variavel recebendo a class curso
console.log(c1.canal); //criada e atribuída à variável c1. O new curso(...) invoca o construtor da classe e passa os valores 'CFBcursos'
console.log(c1.curso);
