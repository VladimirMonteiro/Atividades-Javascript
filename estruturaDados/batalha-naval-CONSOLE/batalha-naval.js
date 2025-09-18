import { generateMatrizShip } from "./generate-matrizes.js";
import { game } from "./game.js";
import promptSync from "prompt-sync";
const prompt = promptSync();

let playGame = true;
let player1, player2;

while (playGame) {
  showListDifficulty();
  let difficulty = parseInt(prompt("Dificuldade desejada: "));
  console.log();

  let size, ships, attempts;

  switch (difficulty) {
    case 1:
      size = 5;
      ships = 5;
      attempts = 10;
      break;
    case 2:
      size = 6;
      ships = 6;
      attempts = 9;
      break;
    case 3:
      size = 7;
      ships = 7;
      attempts = 8;
      break;
    case 4:
      playGame = false;
      console.log("Saindo do jogo...");
      continue;
    default:
      console.log("❌ Opção inválida");
      continue;
  }

  player1 = generateMatrizShip(size, ships);
  player2 = generateMatrizShip(size, ships);
  game(attempts, ships, player1, player2, size);
}

function showListDifficulty() {
  console.log(`🎮 Escolha o nível de dificuldade\n
     ➩ 1 - Fácil     (5x5, 5 navios, 10 tiros)
     ➩ 2 - Normal    (6x6, 6 navios, 9 tiros)
     ➩ 3 - Difícil   (7x7, 7 navios, 8 tiros)
     ➩ 4 - Sair
  `);
}
