const prompt = require('prompt-sync')({sigint: true}); // Config extra

let nome = prompt("Digite seu nome completo: ");
const primeiroNome = nome.split(' ')[0];
let idade = prompt(`Olá ${primeiroNome}, qual a sua idade: `)

let estudando = true;
let estudo = prompt(`Atualmente você está estudando? True para Sim e False para Não: : `)

let altura = prompt(`${primeiroNome} qual sua altura? Em metros: `)

console.log(`O ${nome} tem ${idade} anos e atualmente ele ${estudo} e tem ${altura} metros.`)