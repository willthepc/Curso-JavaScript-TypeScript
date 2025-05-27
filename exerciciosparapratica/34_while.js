const prompt = require('prompt-sync')({sigint: true}); // Config extra

let user;
do {
    user = Number(prompt('Digite um número de 1 a 10: '))
    if (user >= 1 && user <= 10) {
        break
    }
    console.log('Número inválido! Tente novamente.');
} while (user < 1 || user > 10)

console.log('Número válido = 1 a 10')