const prompt = require('prompt-sync')({sigint: true}); // Config extra

let user = Number(prompt('Digite um número: '))

for (let i = 1; i <= 10; i++) {
    let resultado = i * user
    console.log(`${String(i)} x ${user} = ${resultado}`)
}