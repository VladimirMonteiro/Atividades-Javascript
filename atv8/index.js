const prompt = require("prompt-sync")();

let number1 = Number(prompt("Informe o primeiro número: "));
let number2 = Number(prompt("Informe o segundo número: "));
let number3 = Number(prompt("Informe o terceiro número: "));

let number4 = Number(prompt("Informe o quarto número: "));
let number5 = Number(prompt("Informe o quinto número: "));

console.log(`A média vale: ${(number1 + number2 + number3 + number4 + number5) / 5}`)