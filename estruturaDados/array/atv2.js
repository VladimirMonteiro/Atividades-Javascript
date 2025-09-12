const prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];

for (let i = 0; i < 10; i++) {
  let element = prompt(`Informe o valor na posição ${i + 1}: `);
  array1.push(element);
}

console.log(`Primeiro array: ${array1}`);
array2 = array1.reverse();
console.log(`Segundo array: ${array2}`);
