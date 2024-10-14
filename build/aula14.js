"use strict";
const teste = (txt) => {
    console.log(txt);
};
const Fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numer = [10, 20, 30, 40];
teste("gugu");
console.log(Fsoma2(numer));
