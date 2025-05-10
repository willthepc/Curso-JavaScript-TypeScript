let num1 = 0.7; // number
let num2 = 0.1; // number

console.log(num1.toString() + num2)// -> Mudança temporaria
console.log(typeof num1)


num1 = num1.toString() //-> Conversão fixa
console.log(typeof num1)


console.log(num1.toString(2)) //-> Número binario


console.log(num1.toFixed(2)) //-> Numero de decimais pós virgula, sem alterar valor real


console.log(Number.isInteger(num1)) // -> Ve se o numero é inteiro


let temp = num1 * 'ola'
console.log(Number.isNaN(temp)) // -> Ve se a conta é valida

num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; //0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; //1.0

console.log(num1)