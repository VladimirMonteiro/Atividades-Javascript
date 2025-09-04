const prompt = require("prompt-sync")();

let number1 = Number(prompt("Informe o primeiro número: "));
let number2 = Number(prompt("Informe o segundo número: "));
let number3 = Number(prompt("Informe o terceiro número: "));

if (number1 > number2 && number1 > number3) {
  console.log(`O número maior é ${number1}`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`O número maior é ${number2}`);
} else {
  console.log(`O número maior é ${number3}`);
}
