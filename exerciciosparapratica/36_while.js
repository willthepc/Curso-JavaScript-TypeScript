// let i = 1
// while (i < 6) {
//     console.log(`Passo ${i}`)
//     i++
// }

let dado = [1,2,3,4,5]

let soma = 0

let i = 0

do {
    soma += dado[i]
    i++
} while (i < dado.length)
console.log(soma)
console.log('Essa é sua média: ', soma/dado.length)
