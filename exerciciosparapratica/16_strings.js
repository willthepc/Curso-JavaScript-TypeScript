const prompt = require('prompt-sync')({sigint: true}); // Config extra

let nome = prompt('Digite seu nome: ')
let prof = prompt('Digite sua profissão: ')
let salario = prompt(`Quanto você ganha trabalhando como ${prof}: `)

console.log('Olá',nome,'você trabalha como',prof,'e ganha R$',salario,'por mês.')