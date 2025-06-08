// defineProperty - defineProperties
//  define 1         define varias

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, //pode reconfigurar a chave? criar outra chave dessa diferente
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem')
            }
            estoquePrivado = valor
        }
    })
}

function criaProduto(nome) {
    return {
        get nome() { // get pega o valor
            return nome;e
        },

        set nome(valor) { // set seta o valor
            valor = valor.replace('coisa.', '')
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20, 3)
// //console.log(p1)
// p1.estoque = 23
// console.log(p1)
const p2 = criaProduto('Camiseta')
p2.nome = 'qualquer coisa.'
console.log(p2.nome)