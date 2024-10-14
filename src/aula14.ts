const teste = (txt?: string): void => {
  console.log(txt);
};

const Fsoma2 = (n: number[]): number => {
  let s: number = 0;
  n.forEach((e) => {
    s += e;
  });
  return s;
};

let numer: number[] = [10, 20, 30, 40];

teste("gugu");
console.log(Fsoma2(numer));
