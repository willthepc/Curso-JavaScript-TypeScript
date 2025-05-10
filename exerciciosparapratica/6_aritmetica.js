const prompt = require('prompt-sync')({sigint: true}); // Config extra

let num1 = parseFloat(prompt('Digite um número: '))
let num2 = parseFloat(prompt('Digite outro número: '))
console.log('Resultado da soma: ', num1 + num2)
console.log('Resultado da subtrção: ', num1 - num2)
console.log('Resultado da multiplicação: ', num1 * num2)
console.log('Resultado da divisão: ', num1 / num2)