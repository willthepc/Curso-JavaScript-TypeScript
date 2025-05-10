const prompt = require('prompt-sync')({sigint: true}); // Config extra

let nome = prompt('Digite seu nome: ')
console.log(nome.toUpperCase())
console.log(nome.length)
console.log(nome[0])