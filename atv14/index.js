const prompt = require("prompt-sync")();

let str = prompt("Insira uma frase: ");
let reverseStr = str.split("").reverse().join("");

console.log(`Sua frase invertida: ${reverseStr}`);
