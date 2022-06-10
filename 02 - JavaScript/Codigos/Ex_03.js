const prompt = require('prompt-sync')();
/*EXERCICIO - Reajuste salarial: As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, 
baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
*/
let salario= parseFloat(prompt(`Informe Seu Salario: `))
let result=0;
 if(salario>1500){    
     result = 0.05;
}else if(salario>700){    
     result = 0.10;
}else if(salario>280){    
     result = 0.15;
}else if(salario<280){    
     result = 0.20;
}
 
let salario2 = (salario*result)+salario;

console.log(`Seu salario hoje é R$${salario.toFixed(2)}, com aumento fica: R$${salario2.toFixed(2)}, teve um aumento de R$${salario2-salario.toFixed(2)} ou seja ${result*100}%`);
