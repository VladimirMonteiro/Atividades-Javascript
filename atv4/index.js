const prompt = require("prompt-sync")();

let tempFahrenheit = Number(
  prompt("Informe o valor da temperatura em Fahrenheit: ")
);

let tempCelsius = (5 / 9) * (tempFahrenheit - 32);

console.log(`A temperatura em celsius equivale a: ${tempCelsius.toFixed(2)}`);
