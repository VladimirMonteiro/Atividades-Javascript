const prompt = require("prompt-sync")();

const array1 = [];
const array2 = [];

for (let i = 0; i < 5; i++) {
  let number = parseInt(
    prompt(`Informe o valor na posição ${i + 1} do primeiro array: : `)
  );
  array1.push(number);
}
console.log("\n");

for (let i = 0; i < 5; i++) {
  let number = parseInt(
    prompt(`Informe o valor na posição ${i + 1} do segundo array: : `)
  );
  array2.push(number);
}
const generateArray = (arr1, arr2, operation) => {
  let resultArray = [];
  for (let i = 0; i < 5; i++) {
    if (operation === "-") resultArray.push(arr1[i] - arr2[i]);
    else if (operation === "+") resultArray.push(arr1[i] + arr2[i]);
    else resultArray.push(arr1[i] * arr2[i]);
  }
  return resultArray;
};

const plusArray = generateArray(array1, array2, "+");
const minusArray = generateArray(array1, array2, "-");
const timesArray = generateArray(array1, array2, "*");

console.log(`Array soma: ${plusArray}`);
console.log(`Array subtração: ${minusArray}`);
console.log(`Array multiplicação: ${timesArray}`);
