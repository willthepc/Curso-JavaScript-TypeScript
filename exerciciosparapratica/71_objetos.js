
const produtos = [
    p1 = {
        nome: 'P1',
        estoque: 1
    },
    p2 = {
        nome: 'p2',
        estoque: 4
    },
    p3 = {
        nome: 'p3',
        estoque: 6
    },
    p4 = {
        nome: 'p4',
        estoque: 3
    },
    p5 = {
        nome: 'p5',
        estoque: 6
    }
]

function contarEstoque() {
    let total = 0
    for (let produto of produtos) {
        total += produto.estoque
    }
    return `Estoque: ${total}`
}

console.log(contarEstoque())

