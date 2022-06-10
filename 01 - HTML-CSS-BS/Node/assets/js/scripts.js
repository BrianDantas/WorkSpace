let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    log('Incrementado +1')
}
function decrements(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    log('Incrementado -1')
}