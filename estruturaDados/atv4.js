const prompt = require("prompt-sync")();

let arrayOfNames = [];

for (let i = 0; i < 3; i++) {
  let name = prompt(`Informe o nome da posição ${i + 1}: `)
    .trim()
    .toLocaleLowerCase();
  arrayOfNames.push(name);
}

const searchName = prompt("Informe um nome de uma pessoa: ")
  .trim()
  .toLocaleLowerCase();
const namefiltred = arrayOfNames.filter((name) => name === searchName);
if (namefiltred.length > 0) {
  console.log("Achei!");
} else {
  console.log("Não achei!");
}
