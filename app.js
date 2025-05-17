const { Operadores } = require('./operadores.js');
const rl = require('readline-sync');


let valorUm = rl.questionFloat(`Insira o primeiro valor`);

let result = 0;
do {
    
    let change = rl.question(`Insira qual operador deseja utilizar: "+, -, *, /" \nCaso deseje mostrar o resultado insira "="`)
    let valorNext;
    switch (change) {
        case "+":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result = Operadores.soma(result, valorNext);
            break;
        case "-":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result = Operadores.subtracao(result, valorNext);
            break;
        case "*":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result = Operadores.multiplicacao(result, valorNext);
            break;
        case "/":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result = Operadores.divisao(result, valorNext);
            break;
        default:
            console.log(`Esse não é um operador valor`)
            break;
    }
    valorNext = 0;
    
} while (change == "=");
console.log(result);