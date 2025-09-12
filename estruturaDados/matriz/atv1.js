const linhas = 10;
const colunas = 15;
const matriz = [];
let sumLines = 0;
let sumColumns = 0;

const checkNumber = (number) => {
  return number % 2 === 0 ? "Par" : "Impar";
};

const sumElementsArray = (array) => {
  return array.reduce((acc, index) => acc + index);
};

for (let i = 0; i < linhas; i++) {
  const linha = [];
  for (let j = 0; j < colunas; j++) {
    linha.push(Math.floor(Math.random() * 100));
  }
  matriz.push(linha);
  console.log(
    `Linha ${i}: soma = ${sumElementsArray(linha)} -> ${checkNumber(
      sumElementsArray(linha)
    )}`
  );
}

for (let i = 0; i < colunas; i++) {
  let coluna = [];
  for (let j = 0; j < linhas; j++) {
    coluna.push(matriz[j][i]);
  }
  console.log(
    `Coluna ${i}: soma = ${sumElementsArray(coluna)} -> ${checkNumber(
      sumElementsArray(coluna)
    )}`
  );
}

console.table(matriz);
