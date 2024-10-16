enum dias { //Criando um anum/objeto
  domingo = 0,
  segunda = 1,
  terça = 2,
  quarta = 3,
  quinta = 4,
  sexta = 5,
  sabado = 6,
}

//console.log(dias.domingo);
//console.log(dias["domingo"]);
//console.log(dias[1]);

const d = new Date();
//console.log(d.getDate());
//console.log(dias[d.getDay()]);

enum cores {
  branco = "#fff",
  preto = "#000",
  vermelho = "#f00",
  verde = "#0f0",
  azul = "#00f",
}

console.log(cores.branco);
console.log(cores["branco"]);

enum tipoUsuario {
  user = 10,
  admin = 100,
  sub = 1000,
}

console.log(tipoUsuario.sub);

const tp: tipoUsuario = tipoUsuario.user;
console.log(tp);
