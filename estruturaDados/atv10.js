let matriz = [];
let transposta = [];

for (let i = 0; i < 3; i++) {
  const linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(Math.floor(Math.random() * 100));
  }
  matriz.push(linha);
}

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(matriz[j][i]);
  }
  transposta.push(linha);
}

console.log("Matriz: ");
console.table(matriz);
console.log("Transposta: ");
console.table(transposta);
