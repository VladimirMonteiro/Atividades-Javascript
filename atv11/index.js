const prompt = require("prompt-sync")();

let peso = Number(prompt("Informe o seu peso: "));
let altura = Number(prompt("Informe sua altura: "));

let imc = peso / Math.pow(altura, 2);

console.log(`Seu IMC é de: ${imc.toFixed(2)}`)
