const linhas = 50;
const colunas = 50;
const matriz = [];
let diagonal = [];

for (let i = 0; i < linhas; i++) {
  const linha = [];
  for (let j = 0; j < colunas; j++) {
    linha.push(Math.floor(Math.random() * 100));
    if (i === j) {
      diagonal.push(linha[i]);
    }
  }
  matriz.push(linha);
}
console.log(`Diagonal principal: ${diagonal}`);
