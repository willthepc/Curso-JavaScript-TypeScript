//Luis Otavio Miranda tem 30 AnalyserNode, pesa 84 
//tem 1.8 de altura e seu IMC é 25.934535341

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc;
imc = peso / (altura * altura)
let anoNascimento;
anoNascimento = 2025 - idade
console.log(nome, sobrenome , 'tem', idade, 'anos, pesa', peso, 'kg')
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(nome, sobrenome, 'nasceu em', anoNascimento)