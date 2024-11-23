function soma(a: number, b: number) {
  return a + b;
}

const result = soma(5, 10);
console.log(result);

//---------------------------------------------------------------------

const cars: string[] = [
  "Ferrari",
  "Lamborghini",
  "Porsche",
  "Tesla",
  "BMW",
  "Mercedes",
];

// Passo 2: Criar a função que sorteia um carro aleatório
function getRandomCar(carList: string[]): string {
  const randomIndex = Math.floor(Math.random() * carList.length);
  return carList[randomIndex];
}

// Usar a função para sortear um carro
const chosenCar = getRandomCar(cars);
console.log(`O carro sorteado é: ${chosenCar}`);
