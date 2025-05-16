// Escreva uma função que recebe dois números e retorne o maior deles

// function doisNumeros (x, y) {
//     if (x > y) {
//         return('X maior que Y')
//     } else {
//         return('Y maior que X')
//     }
// }

// function doisNumeros (x,y) {
//     return x > y ? x : y
// }

const doisNumeros = (x,y) => x>y ?x :y

console.log(doisNumeros(20,3));