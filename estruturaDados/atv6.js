const prompt = require("prompt-sync")();

let arrayNumber = [];
let arrayAux = [];
const quantityNumbers = parseInt(
  prompt("Informe a quantidade de número que deseja informar: ")
);

for (let i = 0; i < quantityNumbers; i++) {
  let number = parseInt(prompt(`Informe o número da posição ${i + 1}: `));
  arrayAux.push(number);
}

let filtredParNumbers = arrayAux.filter((item) => item % 2 == 0).sort();
let filtredImparNumbers = arrayAux
  .filter((item) => item % 2 !== 0)
  .sort()
  .reverse();
arrayNumber = [...filtredParNumbers, ...filtredImparNumbers];
console.log(arrayNumber);
