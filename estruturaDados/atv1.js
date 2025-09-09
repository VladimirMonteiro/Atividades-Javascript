const prompt = require("prompt-sync")();

const array = [];

for (let i = 0; i < 10; i++) {
    let number = parseInt(prompt(`Informe ${i + 1} número: `));
    array.push(number);
}

console.log(`Sentido normal do array: [${array}]`)
console.log(`Sentido inverso do array: [${array.reverse()}]`)
