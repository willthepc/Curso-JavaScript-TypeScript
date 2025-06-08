// Factory function / Constructor functions / Classes

// function criaPessoa(nome, sobrenome) {
//     return {
//         nome,
//         sobrenome,
//         get nomeCompleto(){ //ou sem get e no console com ()
//             return `${this.nome} ${this.sobrenome}`
//         }
//     }
// }

// const p1 = criaPessoa('William', 'Rodrigues')
// console.log(p1.nomeCompleto)

// Constructor functions

function Pessoa(nome, sobrenome) {
    this.nome = nome,
    this.sobrenome = sobrenome

    Object.freeze(this) // Bloqueia mudanças
}

const p1 = new Pessoa('Will', 'Rodrigues')
console.log(p1)
const p2 = new Pessoa('Marisa', 'Alkamim')
p2.nome = 'Ednei'
console.log(p2)