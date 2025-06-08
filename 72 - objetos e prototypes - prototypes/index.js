// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome
}

//Pessoa.prototype === pessoa1.__photo__

Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

//Instância
const p1 = new Pessoa ('William', 'Alkamim') // <- Pessoa = Função construtora
const p2 = new Pessoa ('Thiago', 'Silva') // <- Pessoa = Função construtora
const data = new Date()

console.log(p1)
console.log(p2)
console.log(data)