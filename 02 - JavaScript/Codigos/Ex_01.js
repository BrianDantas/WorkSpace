// Exercício - Utilizando laço, imprima a tabuada na tela.*/
//var prompt = require("prompt-sync")();

const numero = parseInt(prompt("Informe um Numero: "));
let inter = 0;
for (let i = 0; i <= 10; i++) {
  inter = numero * i;
  console.log(` ${numero}x${i}=${inter}`);
}
