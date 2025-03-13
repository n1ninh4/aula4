//Importar a calculadora
import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';
//Importar a lib moment
import moment from "moment"; 

console.log("Soma: ", soma(10, 5));
console.log("Subtração: ", subtracao(10, 5));
console.log("Multiplicação: ", multiplicacao(10, 5));
console.log("Divisão: ", divisao(10, 5));

//Criar lógica
function calcularIdade(anoNascimento) {
    return moment().year() - anoNascimento;
}

const anoNascimento = 1990;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);