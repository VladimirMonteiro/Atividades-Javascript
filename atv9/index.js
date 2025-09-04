const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Informe a nota 1: "));
let nota2 = Number(prompt("Informe a nota 2: "));
let nota3 = Number(prompt("Informe a nota 3: "));

let media = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if (media >= 7) {
  console.log(`Media ${media}. Aluno APROVADO!`);
} else {
  console.log(`Media ${media}. Aluno REPROVADO!`);
}
