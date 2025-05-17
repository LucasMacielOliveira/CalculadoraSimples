const readline = require('readline-sync');

let numUm = parseFloat(readline.question("Digite o primeiro numero: "));
let numDois = parseFloat(readline.question("Digite o segundo numero: "));

function multiplicação (numUm, numDois) {
    return numUm * numDois;
}

let resultado = multiplicação(numDois,numUm);

console.log(resultado);