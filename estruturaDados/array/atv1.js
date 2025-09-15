const prompt = require("prompt-sync")();

const array = [];

for (let i = 0; i < 10; i++) {
  let number = parseInt(prompt(`Informe ${i + 1} número: `));
  if (!isNaN(number)) {
    array.push(number);
  } else {
    console.log("Número inválido, informe outro número: ");
    i--;
  }
}

console.log(`Sentido normal do array: [${array}]`);
console.log(`Sentido inverso do array: [${array.reverse()}]`);
