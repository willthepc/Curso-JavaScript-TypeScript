const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}
//const nome = pessoa.nome

// Atribuição por desestruturação
//const{nome, sobrenome, idade} = pessoa
//console.log(nome,sobrenome)

//const { nome: n, sobrenome} = pessoa
//console.log(n,sobrenome)

//const{endereco: {rua, numero}, endereco} = pessoa
//console.log(endereco)

const { nome, ...resto} = pessoa
console.log(resto)