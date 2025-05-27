// return
// retorna um valor
// termina a funcao

// function soma(a, b) {
//     return a + b
// }

// console.log(soma())

// function soma2 (a,b) {
//     console.log(a + b)
// }

// soma2(5, 2)

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red'
// })

// function criaPessoa(nome,sobrenome) {
//     return {
//         nome, sobrenome
//     }
// }

// const p1 = criaPessoa('Luiz', 'Otávio')
// const p2 = {nome: 'João', sobrenome: 'Oliveira'
// }

// console.log(p1)
// console.log(p2)

// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }
// const fala = falaFrase('Olá');
// const resto = fala('mundo!');
// console.log(resto);

// function duplica(n) {
//     return n * 2
// }

// function triplica(n) {
//     return n * 3
// }

// function quadriplica(n) {
//     return n * 4
// }

// console.log(duplica(2))
// console.log(triplica(2))
// console.log(quadriplica(2))

function criaMulti(multiplicador) {
    return function(n) {
        return n * multiplicador
    }
}

const duplica = criaMulti(2)
const triplica = criaMulti(3)
const quadriplica = criaMulti(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))