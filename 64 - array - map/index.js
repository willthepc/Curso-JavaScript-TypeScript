// Map dobra os valores or altera os valores originais do array
//               0   1   2  3  4  5...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const numerosEmDobro = numeros.map(valor => valor * 2)

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada jogo

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const nomes = pessoas.map(valor => valor.nome)
const idades = pessoas.map(valor => {idade: valor.idade})

// const idades = pessoas.map(function(valor) {
//     delete valor.nome
//     return valor;
// })
const comIds = pessoas.map(function(valor,indice) {
    valor.id = (indice + 1) * 778
    return valor
})
console.log(pessoas)