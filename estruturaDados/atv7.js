const prompt = require("prompt-sync")();

let array1 = [];
let array2 = [];
const sizeArray = Number(
  prompt(`Informe o tamanho que deseja para os 2 arrays: `)
);

for (let i = 0; i < sizeArray; i++) {
  let number = Number(
    prompt(`1 array - Informe o valor na posição ${i + 1}: `)
  );
  array1.push(number);
}
console.log("\n");
for (let j = 0; j < sizeArray; j++) {
  let number = Number(
    prompt(`2 array - Informe o valor na posição ${j + 1}: `)
  );
  array2.push(number);
}

console.log(compareArrays(array1, array2));

function compareArrays(arr1, arr2) {
  for (let i = 0; i < sizeArray; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
