// defineProperty - defineProperties
//  define 1         define varias

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    

    Object.defineProperty(this, 'estoque', {
        enumerable: false, //mostra a chave
        value: estoque, // valor
        writable: true, // controla se o valor pode ser alterado
        configurable: true //pode reconfigurar a chave? criar outra chave dessa diferente
    })

//     Object.defineProperty(this, 'estoque', {
//         enumerable: false, //mostra a chave
//         value: estoque, // valor
//         writable: true, // controla se o valor pode ser alterado
//         configurable: false //pode reconfigurar a chave? criar outra chave dessa diferente
//     })

    Object.defineProperties(this, {
        nome: {
            enumerable: false, //mostra a chave
            value: estoque, // valor
            writable: true, // controla se o valor pode ser alterado
            configurable: true //pode reconfigurar a chave? criar outra chave dessa diferente

        },
        
        preco: {
            enumerable: false, //mostra a chave
            value: estoque, // valor
            writable: true, // controla se o valor pode ser alterado
            configurable: true //pode reconfigurar a chave? criar outra chave dessa diferente

        }
    })


}
const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = 50000
console.log(Object.keys(p1))

for (let chave in p1) {
    console.log(chave)
}

