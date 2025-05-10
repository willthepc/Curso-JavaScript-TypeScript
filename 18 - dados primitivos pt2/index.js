/*
Primitivos - string, number, boolean, undefineed
null (bigint, symbol) - Valores copiados 

Referência (mutável) - array, object, function - Passados por referência
*/

/*
let a = 'A'
let b = a //Cópia
console.log(a, b)

a = 'Outra coisa' //Alterando o valor de A o b nao muda, pois é um valor de copia/primitivo
console.log(a, b)
*/

/*
let a = [1, 2, 3]
let b = a
//pós
let c = b

console.log(a, b)

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

c.push('Luiz')
console.log(c)
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

const b = {...a}
a.nome = 'João'
console.log(a)
console.log(b)