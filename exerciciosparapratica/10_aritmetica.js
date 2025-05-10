const prompt = require('prompt-sync')({sigint: true}); // Config extra

let user = prompt('Digite um número: ')
console.log(typeof user)

user = parseInt(user)
console.log(typeof user)

user = parseFloat(user)
console.log(typeof user)