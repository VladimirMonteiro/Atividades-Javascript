const prompt = require("prompt-sync")();

let player1 = 0;
let player2 = 0;

player1 = Math.floor(Math.random() * 6) + 1;
console.log(`Jogador 1: ${player1}`);

player2 = Math.floor(Math.random() * 6) + 1;
console.log(`Jogador 2: ${player2}`);

if (player1 > player1) {
  console.log("Jogador 1 venceu!");
} else {
  console.log("Jogador 2 venceu!");
}
