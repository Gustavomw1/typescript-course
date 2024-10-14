function Logar(user: string, pass: string): void {
  console.log(user);
  console.log(pass);
}

Logar("bruno", "123");

function soma2(n1: number, n2: number): number {
  let r = n1 + n2;
  return r;
}

let n_res: number = soma2(10, 15);
let s_res: string;
console.log(n_res);
