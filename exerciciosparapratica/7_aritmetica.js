const prompt = require('prompt-sync')({sigint: true}); // Config extra

let nota1 = parseFloat(prompt('Digite a primeira nota: '))
let nota2 = parseFloat(prompt('Digite a segunda nota: '))
let nota3 = parseFloat(prompt('Digite a terceita nota: '))

let media = nota1 + nota2 + nota3 / 3

console.log('Essa é a média das notas: ', media.toFixed(1))