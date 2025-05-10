// Tudo perimitido
/*
const array = [1,2,3]
array.push(4)
array[0] = 'Luiz'
console.log(array)
*/


//Algo desnecessário
/*
const nome01 = 'Luiz'
const sobrenome01 = 'Miranda'
const idade01 = 25

const nome2 = 'Maria'
const sobrenome02 = 'Oliveira'
const idade02 = 55
*/

//Algo bom porém ainda da pra melhorar
/*
const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade: 34
}

console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)

console.log(pessoa2.nome)
*/


//Algo eficiente e profissional
/*
function criaPessoa (nome,sobrenome,idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    } //Se ficar igual pra igual ex nome e nome, pode tirar um que o JS ja vai reconhecer
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 25)
const pessoa2 = criaPessoa('Lucas', 'Miranda', 55)
const pessoa3 = criaPessoa('Roberto', 'Silva', 35)
const pessoa4 = criaPessoa('Maria', 'Rodrigues', 65)
const pessoa5 = criaPessoa('Jonathan', 'Oliveira', 35)

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome)
*/

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala () {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()