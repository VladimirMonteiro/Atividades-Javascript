const prompt = require("prompt-sync")();

const numerosPorExtenso = [
  "",
  "um",
  "dois",
  "três",
  "quatro",
  "cinco",
  "seis",
  "sete",
  "oito",
  "nove",
  "dez",
  "onze",
  "doze",
  "treze",
  "quatorze",
  "quinze",
  "dezesseis",
  "dezessete",
  "dezoito",
  "dezenove",
  "vinte"
];

function mostrarNumeroPorExtenso(numero) {
  if (numero >= 1 && numero <= 20) {
    console.log(
      `O número ${numero} por extenso é "${numerosPorExtenso[numero]}".`
    );
  } else {
    console.log("Por favor, insira um número entre 1 e 20.");
  }
}

const numero = parseInt(prompt("Digite um número de 1 a 20:"));
mostrarNumeroPorExtenso(numero);
