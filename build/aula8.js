"use strict";
let dados = {
    nome: "Gustavo",
    idade: 19,
    status: "A",
    ola: () => {
        console.log("oi");
    },
    info: (p) => {
        console.log(p);
    },
};
dados.nome = "heitor";
console.log(typeof dados);
console.log(dados);
dados.ola();
dados.info(dados.nome);
