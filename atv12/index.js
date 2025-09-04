const prompt = require("prompt-sync")();

let loop = true;
let x;
let y;

//Calculadora
while (loop) {
  let option = prompt("Digite a operação que deseja(+, -, *, /): ").trim();

  if (option === "+") {
    getNumbers();
    sum(x, y);
  } else if (option === "-") {
    getNumbers();
    subtraction(x, y);
  } else if (option === "*") {
    getNumbers();
    multiplicate(x, y);
  } else if (option === "/") {
    getNumbers();
    divide(x, y);
  } else {
    console.log("Opção invalida.");
    return;
  }

  let optionExit = prompt("Deseja sair?[s/n]: ").trim();
  if (optionExit == "s") {
    loop = false;
  } else if (optionExit == "n") {
    loop = true;
  } else {
    console.log("Opção invalida, tente mais tarde.");
  }
}

// Features
function sum(x, y) {
  return console.log(`${(x + y).toFixed(2)}`);
}

function multiplicate(x, y) {
  return console.log(`${(x * y).toFixed(2)}`);
}

function divide(x, y) {
  if (y == 0) {
    return console.log(`Denominador ${y} inválido para a divisão.`);
  }
  return console.log(`${(x / y).toFixed(2)}`);
}

function subtraction(x, y) {
  return console.log(`${(x - y).toFixed(2)}`);
}

function validateNumber(number) {
  while (isNaN(number)) {
    console.log("Valor inválido!");
    number = Number(prompt("Informe o valor adequado: "));
  }
  return number;
}

function getNumbers() {
  x = Number(prompt("Informe o valor de x: "));
  x = validateNumber(x);

  y = Number(prompt("Informe o valor de y: "));
  y = validateNumber(y);
}
