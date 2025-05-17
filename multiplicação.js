const readline = require('readline-sync');

let numUm = readline.questionfloat("Digite o primeiro numero: ");
let numDois = readline.questionfloat("Digite o segundo numero: ");

function multiplicação (numUm, numDois) {
    return numUm * numDois;
}

let resultado = multiplicação(numDois,numUm);

console.log(resultado);