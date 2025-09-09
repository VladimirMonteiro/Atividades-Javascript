const prompt = require("prompt-sync")();

let number = Number(prompt("Informe um número: "));

if (number % 2 == 0) {
  console.log(`O número ${number} é par!`);
} else {
  console.log(`O número ${number} é impar!`);
  
}
