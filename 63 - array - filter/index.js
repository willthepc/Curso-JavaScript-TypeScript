//Filter, map, reduce

// Filter -> Sempre retornar um array, com a mesma quantidade de elementos
// ou menos

//Retorne os números maiores que 10

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i]  >= 10) {
//         console.log(console.log(numeros[i]))
//     }
// }


const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
function callBackFilter(valor, indice, array) {
    if (valor > 10) {
        return true;
    } else {
        return false
    }
}

function callBackFilter(valor) {
    return valor > 10
}

const numerosFiltrados = numeros.filter(function callBackFilter(valor) {
    return valor > 10
})

const numerosFiltrados2 = numeros.filter(function(valor) {
    return valor > 10
})

const numerosFiltrados3 = numeros.filter(valor => {
    return valor > 10
})


//console.log(numerosFiltrados3)

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length >= 5)
const pessoasComMaisDeCinquenta = pessoas.filter(valor => valor.idade > 50)
const pessoasComFinalA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'))

console.log(pessoasComNomeGrande)
console.log(pessoasComMaisDeCinquenta)
console.log(pessoasComFinalA)