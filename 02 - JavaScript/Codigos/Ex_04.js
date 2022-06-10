const prompt = require('prompt-sync')();
//Crie um programa onde o usuário possa digitar vários valores numéricos e cadastre-os em uma lista.
//Caso o número já esteja lá dentro, ele não será adicionado.
//No final, serão exibidos todos os valores únicos digitados, em ordem crescente.


let lista = []

do
{
  a = true
  raw = prompt("Insira um número:")
  num = parseInt(raw)

  if(isNaN(num)) {console.log(`Não é um número`)}
  
  else
  {
  for (let i = 0; i <= lista.length; i++)
    {
      if (num == lista[i]) {a = false}
    }
  if (a) {lista.push (num)}
  console.log(lista)
  }
}
while (raw.length > 0)

function compararNumeros(a, b)
{ 
  return a - b;
}

console.log(`Lista ordenada: ${lista}`)