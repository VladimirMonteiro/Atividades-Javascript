const prompt = require("prompt-sync")();

let loop = true;
let matriz = [];
let option;
let again;

do {
  for (let i = 0; i < 4; i++) {
    let line = [];
    for (let j = 0; j < 4; j++) {
      let number = Number(
        prompt(`Informe os elementos da matriz [${i}][${j}]: `)
      );
      line.push(number);
    }
    matriz.push(line);
  }

  showMenu();

  option = parseInt(prompt("Informe a opção desejada: "));

  if (option === 1) {
    console.table(matriz);
  } else if (option === 2) {
    sumColumn(matriz);
  } else if (option === 3) {
    sumElementsInLineThree(matriz);
  } else if (option === 4) {
    sumDiagonal(matriz);
  } else if (option === 5) {
    sumELementWithIndexPar(matriz);
  } else {
    console.log("Opsção inválida.");
    again = prompt(`Deseja continuar [s/n]?`).trim().toLocaleLowerCase();
    if (again === "s") {
      loop = true;
      matriz = [];
    } else {
      loop = false;
    }
  }
  again = prompt(`Deseja continuar [s/n]?`).trim().toLocaleLowerCase();
  if (again === "s") {
    loop = true;
    matriz = [];
  } else {
    loop = false;
  }
} while (loop);

function showMenu() {
  console.log(`
1) Imprimir todos os elementos da matriz;\n
2) Somar os quadrados de todos os elementos da primeira coluna;\n
3) Somar todos os elementos da terceira linha;\n
4) Somar os elementos da diagonal principal; \n
5) Somar todos os elementos de índice par da segunda linha.\n`);
}

function sumColumn(matriz) {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    sum += Math.pow(matriz[i][0], 2);
  }
  console.log(sum);
}

function sumElementsInLineThree(matriz) {
  let sum = 0;
  for (let j = 0; j < 4; j++) {
    sum += matriz[2][j];
  }
  console.log(sum);
}

function sumDiagonal(matriz) {
  let sum = 0;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) sum += matriz[i][j];
    }
  }
  console.log(sum);
}

function sumELementWithIndexPar(matriz) {
  let sum = 0;
  for (let j = 0; j < 4; j++) {
    if (j % 2 === 0) sum += matriz[1][j];
  }
  console.log(sum);
}
