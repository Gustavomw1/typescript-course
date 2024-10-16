let numeros: number[] = [20, 30, 40]; // Variavel recebendo tipo 'number' recebendo parametros no array

//Adiciona o numero no final
numeros.push(50);

//Adiciona o numero no começo
numeros.unshift(10);

//remove o primeiro numero
numeros.pop();

//remove o primeiro numero-
numeros.shift();

console.log(numeros);

let numeros_ro: ReadonlyArray<number> = [100, 200, 300];
console.log(numeros_ro);
