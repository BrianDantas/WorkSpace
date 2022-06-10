
EXEMPLO 00 - Faça um script que peça um valor e mostre na tela se o valor é positivo ou negativo
 e implemente a funcionalidade de não aceitar o número 0.

 let number = parseInt(prompt("Informe um Numero:  "))


 if(number>0){
        console.log(`O numero ${number} é positivo`);
        number = 0;
  }else if(number == 0){
    console.log(`O numero 0, nao é admitido`)
}   else if (number<0){
      console.log(`O numero ${number} é Negativo:`)
      
}



Exercício 01 - E os 10% do garçom?
Defina uma variável para o valor de uma refeição que custou R$ 42,54;
Defina uma variável para o valor da taxa de serviço que é de 10%;
Defina uma variável que calcula o valor total da conta e exiba-o no console com essa formatação: R$ 9999.99.

let Vr= parseInt(prompt("Informe o Valor da Refeicao:  "));
let taxa= 0.1;
let valor= (Vr*taxa)+Vr;

console.log(`Escolhendo o prato: ${menu[escolha]}
             O valor da conta ficou em:    R$${Vr.toFixed(2)},
             Incluso a tava do garçom:     R$ ${valor.toFixed(2)}`)


Exercício 02 - Qual o valor do troco?
Defina uma variável para o valor de uma compra que custou R$100,98;
Defina uma variável para o valor que o cliente pagou R$150,00;
Defina uma variável que calcula o valor do troco e exiba-o no console com o valor final arredondado.

let vDado = parseInt(prompt("Informe o Valor Dado pelo Cliente:  R$"))
const preco = parseInt(prompt("Informe o Valor da Compra:  R$")); 
let paga= 0;

if(vDado<preco){
paga = preco - vDado;
console.log(`Faltam R$${paga.toFixed(2)} para completar o valor Cheio Da compra. `)

} else if(vDado>preco){ 
    paga = vDado-preco;
    console.log(`O troco eh de: R$${paga.toFixed(2)} `)
}else{
    console.log("compra efetuada com SUCESSO!!! ")
}

