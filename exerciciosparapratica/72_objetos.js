class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(porcentagem) {
        this.preco -= porcentagem
    }
}

const produtos = [
    new Produto('Lata', 12),
    new Produto('Plástico', 25),
    new Produto('Copo', 2)
]

function aplicarDescontoEmTodos(listaDeProdutos, porcentagem) {
    for(let produto of listaDeProdutos) {
        produto.aplicarDesconto(produto.preco * (porcentagem / 100))
        console.log(`${produto.nome}: R$${produto.preco}`)
    }
}

aplicarDescontoEmTodos(produtos, 10)