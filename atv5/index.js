const prompt = require("prompt-sync")();

let number = Number(prompt("Informe um número: "));
let count = 0;

for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    count++;
  }
}

if (count > 1) {
  console.log(`O número ${number} não é primo.`);
} else {
  console.log(`O número ${number} é primo!`);
}
