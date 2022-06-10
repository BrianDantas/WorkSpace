const prompt = require('prompt-sync')();
/*
Crie um programa em Portugol que peça a nota do aluno, que deve ser um real entre 0.00 e 10.0
Se a nota for menor que 6.0, deve exibir a nota F.
Se a nota for de 6.0 até 7.0, deve exibir a nota D.
Se a nota for entre 7.0 e 8.0, deve exibir a nota C.
Se a nota for entre 8.0 e 9.0, deve exibir a nota B.
Por fim, se for entre 9.0 e 10.0, deve exibir um belo de um A.
     */   

    notaA = parseInt(prompt('Informe sua nota numerica: '));

  if(notaA > 10 || notaA < 0){
            console.log(`Valor informado esta fora dos limites. De 0 a 10 `)
 }else{

    if(notaA>=9){
    console.log(`A sua Nota é A`)

} else if(notaA >=8){
    console.log(`A sua nota é B`)

}else if(notaA >=7){
    console.log(`A sua nota é C`)

}else if(notaA >=6){
    console.log(`A sua nota é D`)

}else if(notaA <6){
    console.log(`A sua nota é F`)

}
 }
 
 