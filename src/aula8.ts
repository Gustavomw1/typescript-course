let dados = {
  //Criando um objeto para armazenar dados
  nome: "Gustavo",
  idade: 19,
  status: "A",
  ola: () => {
    //Criando uma funcao
    console.log("oi");
  },
  info: (p: string) => {
    //Criando uma funcao
    console.log(p);
  },
};

dados.nome = "heitor"; //substitutindo o nome

console.log(typeof dados); //Usando o typeof para identificar o tipo
console.log(dados);

dados.ola(); //chamando a funcao
dados.info(dados.nome); //chamando a funcao
