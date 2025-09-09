const prompt = require("prompt-sync")();

let loopOption;
let notExit;
let option;

do {
  console.log("1 - Calcular área do retangulo e seu perimetro.");
  console.log("2 - Calcular área do quadrado e seu perimetro.");
  console.log("3 - Calcular a área de um circulo e seu perimetro.");
  console.log("4 - Calcular o perimetro de um triângulo.\n");

  option = Number(prompt("Informe A opção desejada: "));

  if (option === 1) {
    let x = Number(prompt("Informe o valor da base do retangulo: "));
    let h = Number(prompt("Informe o valor da altura do retangulo: "));
    console.log(`Área: ${areaRetangulo(x, h)}`);
    console.log(`Perimetro: ${perimetroRetangulo(x, h)}`);
  } else if (option === 2) {
    let x = Number(prompt("Informe o valor da base do quadrado: "));
    console.log(`Área: ${areaQuadrado(x)}`);
    console.log(`Perimetro: ${perimetroQuadrado(x)}`);
  } else if (option === 3) {
    let r = Number(prompt("Informe o valor do raio do circulo: "));
    console.log(`Área: ${areaCirculo(r)}`);
    console.log(`Perimetro: ${perimetroCirculo(r)}`);
  } else if (option === 4) {
    let x = Number(prompt("Informe primeiro lado do triângulo: "));
    let y = Number(prompt("Informe segundo lado do triângulo: "));
    let z = Number(prompt("Informe terceiro lado do triângulo: "));
    console.log(`Perimetro: ${perimetroTriangulo(x, y, z)}`);
  } else {
    console.log("Opsção inválida!");
  }

  loopOption = prompt("Deseja continuar?[s/n]: ").trim().toLowerCase();
  if (loopOption === "s") {
    notExit = true;
  } else {
    notExit = false;
  }
} while (notExit);

function areaRetangulo(x, h) {
  return x * h;
}

function perimetroRetangulo(x, h) {
  return 2 * x + 2 * h;
}

function areaQuadrado(x) {
  return Math.pow(x, 2);
}

function perimetroQuadrado(x) {
  return 4 * x;
}

function areaCirculo(r) {
  return 3.14 * Math.pow(r, 2);
}

function perimetroCirculo(r) {
  return 2 * 3.14 * r;
}

function perimetroTriangulo(x, y, z) {
  return x + y + z;
}
