function criarMultiplicador(n) {
    return function() {
        return 5 * n
    }
}

const duplicar = criarMultiplicador(2)
const triplicar = criarMultiplicador(3)

console.log(duplicar())
console.log(triplicar())