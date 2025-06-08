/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

//Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
Object.
*/

// const produto = {
//     nome: 'Caneca',
//     preco: 1.8
// }
// // const caneca = {...produto,
// //     material: 'Porcelana'
// // }

// const caneca = Object.assign({}, produto, {material: 'Porcelana'}) **

// caneca.nome = 'Outro nome'
// caneca.preco = 2.5

// console.log(produto)
// console.log(caneca)

///////////////////////////////////////////////////////////////

// const produto = {
//     nome: 'Caneca',
//     preco: 1.8
// }

// const caneca = {...produto,
//     material: 'Porcelana'
// }

// caneca.nome = 'Outro nome'
// caneca.preco = 2.5

// console.log(Object.keys(caneca)) // Mostra as chaves
// console.log(produto)
// console.log(caneca)

////////////////////////////////////////////////////////////////

// const produto = {
//     nome: 'Caneca',
//     preco: 1.8
// }
// Object.freeze(produto) //Não altera

// produto.nome = 'outro'

// console.log(produto)

///////////////////////////////////////////////////////////////

// const produto = {
//     nome: 'Caneca',
//     preco: 1.8
// }
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa'
// })

// // console.log(Object.getOwnPropertyDescriptor(produto, 'nome')) //Retorne os define Properti...
// produto.preco = 'Outra coisa'
// console.log(produto)

///////////////////////////////////////////////////////////////

const produto = {
    nome: 'Caneca',
    preco: 1.8
}

//console.log(Object.values(produto)) //Retorna os valores
// console.log(Object.entries(produto))

for (let entry of Object.entries(produto)) {
    console.log(entry)
}