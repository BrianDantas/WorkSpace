const prompt = require('prompt-sync')();
/*EXERCICIO 2 - Faça um programa que peça dois números, imprima o maior deles ou imprima "Números iguais"
 se os números forem iguais*/

 let number1 = parseInt(prompt(`Informe o numero 1:  `))
 let number2 = parseInt(prompt(`Informe o numero 2:  `))

        if(number1>number2){
            console.log(`O numero ${number1} é maior que o ${number2} `)
        } else if(number1<number2){
            console.log(`O numero ${number2} é maior que o ${number1} `)
        } else if(number1=number2){
            console.log(`O numero ${number2} é igual o ${number1} `)
        }else{
            console.log(`Algum numero nao foi processado, verifique e tente novamente. `)
        }
 
 