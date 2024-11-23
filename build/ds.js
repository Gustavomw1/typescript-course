"use strict";
function soma(a, b) {
    return a + b;
}
const result = soma(5, 10);
console.log(result);
const cars = [
    "Ferrari",
    "Lamborghini",
    "Porsche",
    "Tesla",
    "BMW",
    "Mercedes",
];
function getRandomCar(carList) {
    const randomIndex = Math.floor(Math.random() * carList.length);
    return carList[randomIndex];
}
const chosenCar = getRandomCar(cars);
console.log(`O carro sorteado é: ${chosenCar}`);
