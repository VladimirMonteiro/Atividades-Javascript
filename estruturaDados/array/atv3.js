const prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];

for (let i = 1; i <= 10; i++) {
  let number = parseInt(prompt(`Informe o valor na posição ${i}: `));
  if (number < 0) number = number * -1;
  array1.push(number);
  if (i % 2 == 0) {
    array2.push(number / 2);
  } else {
    array2.push(number * 3);
  }
}

console.log(`Valores do primeiro array: ${array1}`);
console.log(`Valores do segundo array: ${array2}`);
