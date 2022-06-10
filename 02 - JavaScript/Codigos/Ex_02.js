var prompt = require("prompt-sync")();
//Faça um programa de cadastro de clientes que mostre um menu de opções e permita
//com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

let menu = [];
let confirma = "";
let nome = prompt("Informe seu nome para o cadastro: ");

menu[1] = "1-Carne";

menu[2] = "2-Sushi";

menu[3] = "3-Miojo";

menu[4] = "4-Bife";

menu[5] = "5-Agua";

menu[6] = "6-Coco Ralado";

while (confirma != "Sim") {
  console.log(menu);
  escolha = parseInt(prompt("Deseja qual Opcao do Menu: "));
  confirma = prompt(
    `Voce ${nome}, deseja comer o prato ${menu[escolha]}, Sim ou Nao? `
  );
  if (confirma == "Sim") {
    console.log("O chefe ja vai preparar... ");
  }
}
