const prompt = require("prompt-sync")();
/*EConversor de moedas: Crie um programa que solicite um valor em real ao usuário e converta esse valor, para:
DOLAR
EURO
LIBRA ESTERLINA
DÓLAR CANADENSE
PESO ARGENTINO
PESO CHILENO
Para esse exercício você precisará realizar uma pesquisa para saber a cotação de cada moeda em real.
 Mostrar o resultado no formato U$9999.99
*/
const valorD = 4.6;
const valorL = 6.02;
const valorDC = 3.68;
const valorPA = 0.041;
const valorC = 0.0059;
const valorE = 5.04;

let valorR = parseInt(prompt("Informe o Valor em Reais: R$"));
let moeda = prompt(
  "Informe A moeda para Conversao: Dolar Libra DolarC PesoA PesoC Euro: "
);

switch (moeda) {
  case "Dolar":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Dolar eh: $${(
        valorR / valorD
      ).toFixed(2)}`
    );
    break;

  case "Libra":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Libra eh: $${(
        valorR / valorL
      ).toFixed(2)}`
    );
    break;

  case "DolarC":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Dolar Canadense eh: $${(
        valorR / valorDC
      ).toFixed(2)}`
    );
    break;

  case "PesoA":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Peso Argentino eh: $${(
        valorR / valorPA
      ).toFixed(2)}`
    );
    break;

  case "PesoC":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Peso Chileno eh: $${(
        valorR / valorC
      ).toFixed(2)}`
    );
    break;

  case "Euro":
    console.log(
      `O seu dinheiro R$${valorR.toFixed(2)}, em Euro eh: $${(
        valorR / valorE
      ).toFixed(2)}`
    );
    break;
}
