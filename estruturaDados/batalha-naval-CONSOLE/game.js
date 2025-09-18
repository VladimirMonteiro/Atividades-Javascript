import PromptSync from "prompt-sync";
import { compareMatrizes, generatePlayerMatriz } from "./generate-matrizes.js";

const prompt = PromptSync();

export const game = (
  attempts,
  quantityShip,
  MatrizShipPlayer1,
  MatrizShipPlayer2,
  size
) => {
  // Reset de jogadas da máquina a cada nova partida
  let plays = new Set();

  let scorePlayer1 = 0;
  let scoreMachine = 0;
  let matrizPlayer1 = generatePlayerMatriz(size);
  let matrizPlayer2 = generatePlayerMatriz(size);
  let machineQuantityShip = quantityShip;

  // While onde a partida ocorre
  while (attempts > 0) {
    console.log("*********************************************");
    console.log(`Quantidade de tiros: ${attempts}`);
    console.log(`Pontuação Jogador: ${scorePlayer1}`);
    console.log(`Pontuação Máquina: ${scoreMachine}`);
    console.log("*********************************************");

    try {
      console.log("Jogador 1: ");
      console.table(matrizPlayer1);

      console.log("Máquina: ");
      console.table(matrizPlayer2);

      // Jogada do jogador
      let selected = prompt("Informe a posição que deseja atirar (ex: 02): ");

      // Validação robusta de input (deve ser dois dígitos numéricos)
      if (!/^\d{2}$/.test(selected)) {
        throw new Error("Input inválido! Use duas posições numéricas, ex: 02");
      }

      let result = compareMatrizes(
        "Você: ",
        MatrizShipPlayer1,
        matrizPlayer1,
        size,
        selected
      );

      // verifica o resultado do jogador
      if (result === "") {
        console.log("\x1b[31mVocê já atirou nesta posição!\x1b[0m");
      } else if (result === true) {
        quantityShip--;
        scorePlayer1++;

        if (quantityShip === 0) {
          console.log("\x1b[32mVocê ganhou!\x1b[0m");
          break;
        }
      } else if (result === false) {
        attempts--;

        if (attempts === 0) {
          compareScore(scorePlayer1, scoreMachine);
          break;
        }
      }

      // Jogada da máquina (somente se o jogador jogou em uma posição válida)
      if (result !== "") {
        let machineResult = playMachinePLayer(
          MatrizShipPlayer2,
          matrizPlayer2,
          size,
          plays
        );

        if (machineResult === true) {
          scoreMachine++;

          if (scoreMachine === machineQuantityShip) {
            console.log("\x1b[31mA máquina ganhou!\x1b[0m");
            break;
          }
        }
      }
    } catch (error) {
      console.log("\x1b[31m" + error.message + "\x1b[0m");
    }
  }
};

// Turno da máquina
function playMachinePLayer(matrizShip, machineMatriz, size, plays) {
  let x, y, play;


  do {
    x = Math.floor(Math.random() * size);
    y = Math.floor(Math.random() * size);
    play = `${x}${y}`;
  } while (plays.has(play));

  plays.add(play);

  console.log(`Jogada da máquina: (${x}, ${y})`);

  return compareMatrizes("Máquina:", matrizShip, machineMatriz, size, play);
}

// Comparação de pontuação em caso de fim por tentativas
function compareScore(score1, score2) {
  if (score1 > score2) {
    console.log("\x1b[32mVocê tem mais pontos, parabéns!\x1b[0m");
  } else if (score2 > score1) {
    console.log("\x1b[31mA máquina tem mais pontos, você perdeu!\x1b[0m");
  } else {
    console.log("Empate!");
  }
}
