// Geração de matriz da posiçoes dos navios
export const generateMatrizShip = (size, quantityShip) => {
  let matriz = [];
  for (let i = 0; i < size; i++) {
    const linha = [];
    for (let j = 0; j < size; j++) {
      if (quantityShip > 0) {
        linha.push(Math.floor(Math.random() * 2));
      } else {
        linha.push(0);
      }
    }
    matriz.push(linha);
  }
  return matriz;
};

// Geração matriz dos jogadores
export const generatePlayerMatriz = (size) => {
  let playerMatriz = [];
  for (let i = 0; i < size; i++) {
    const linha = [];
    for (let j = 0; j < size; j++) {
      linha.push("🌊");
    }
    playerMatriz.push(linha);
  }
  return playerMatriz;
};
// Função que compara as matrizes do jogador com a matriz de navio.
export const compareMatrizes = (
  player,
  matrizShip,
  playerMatriz,
  size,
  selected
) => {
  let x = parseInt(selected[0]);
  let y = parseInt(selected[1]);

  try {
    if (x >= size || y >= size) throw new Error();
    if (matrizShip[x][y] == 1) {
      if (playerMatriz[x][y] === "🚢") {
        return "";
      } else {
        playerMatriz[x][y] = "🚢";
        console.log(`\x1b[32m${player} acertou o navio!\x1b[0m`);
        return true;
      }
    } else {
      if (playerMatriz[x][y] === "❌") {
        return "";
      } else {
        playerMatriz[x][y] = "❌";
        console.log(`\x1b[31m${player} errou!\x1b[0m`);
        return false;
      }
    }
  } catch (error) {
    console.log("\x1b[31mPosição inválida!\x1b[0m");
    return "";
  }
};
