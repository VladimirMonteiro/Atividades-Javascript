let matriz1 = [];
let matriz2 = [];
let sumMatrizes = [];

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(Math.floor(Math.random() * 100));
  }
  matriz1.push(linha);
}

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(Math.floor(Math.random() * 100));
  }
  matriz2.push(linha);
}

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    let result = matriz1[i][j] + matriz2[i][j];
    linha.push(result);
  }
  sumMatrizes.push(linha);
}

console.log("Matriz A");
console.table(matriz1);

console.log("Matriz B");
console.table(matriz2);

console.log("A + B");
console.table(sumMatrizes);
