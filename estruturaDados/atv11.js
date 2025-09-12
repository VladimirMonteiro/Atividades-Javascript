let matriz1 = [];
let matriz2 = [];
let matrizResult = [];

function generaneMatriz(matriz) {
  for (let i = 0; i < 3; i++) {
    const linha = [];
    for (let j = 0; j < 3; j++) {
      linha.push(Math.floor(Math.random() * 9));
    }
    matriz.push(linha);
  }
  return matriz;
}

matriz1 = generaneMatriz([]);
matriz2 = generaneMatriz([]);

for (let i = 0; i < 3; i++) {
  let line = [];
  for (let j = 0; j < 3; j++) {
    line.push(getElement(i, j));
  }
  matrizResult.push(line);
}

console.table(matriz1);
console.table(matriz2);
console.table(matrizResult);

function getColunm(index) {
  let column = [];
  for (let k = 0; k < 3; k++) {
    column.push(matriz2[k][index]);
  }
  return column;
}

function getElement(indexLine, indexColumn) {
  let line = matriz1[indexLine];
  let column = getColunm(indexColumn);
  let sum = 0;
  for (let w = 0; w < 3; w++) {
    sum += line[w] * column[w];
  }
  return sum;
}
