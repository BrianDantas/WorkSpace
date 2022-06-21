function comparaNumeros(num1, num2){
    if(!num1 || !num2) return "Defina Dois Numeros!!!"
    const primeiraFrase = criaPrimeiraFrase(num1,num2);   
    const segundaFrase = criaSegundaFrase(num1,num2)

    return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1,num2){
    let igual = ''
    if(num1 !== num2){
        igual = "Nao"
    }
    return `Os numeros ${num1} e ${num2} ${igual} sao iguais.`;
}
function criaSegundaFrase(num1,num2){
    const soma = num1 + num2;

    let menor10 = 'menor'
    let menor20 = 'menor'

    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        menor10 = 'Maior'
    }
    if(compara20){
        menor20 = 'Maior'
    }

    return `Sua soma é ${soma}, que é ${menor10} que 10 e ${menor20} que 20.`;
}

console.log(comparaNumeros(4, 12))
