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
            result += valorUm;
            result = Operadores.soma(result, valorNext);
            valorUm = 0;
            break;
        case "-":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result += valorUm;
            result = Operadores.subtracao(result, valorNext);
            valorUm = 0;
            break;
        case "*":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result += valorUm;
            result = Operadores.multiplicacao(result, valorNext);
            valorUm = 0;
            break;
        case "/":
            valorNext = rl.questionFloat(`Insira o proximo valor`);
            result += valorUm;
            result = Operadores.divisao(result, valorNext);
            valorUm = 0;
            break;
        default:
            console.log(`Esse não é um operador valor`)
            break;
    }
    valorNext = 0;
    
} while (change == "=");
console.log(result);