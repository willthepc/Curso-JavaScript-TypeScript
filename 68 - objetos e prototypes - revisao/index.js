const pessoa = {
    nome: 'William',
    sobrenome: 'Rodrigues'
}

// console.log(pessoa.nome)
// console.log(pessoa.sobrenome)

// console.log(pessoa['nome'])
// console.log(pessoa['sobrenome'])

// const chave = 'sobrenome'
// console.log(pessoa[chave])

// const pessoa1 = new Object()
// pessoa1.nome = 'William'
// pessoa1.sobrenome = 'Rodrigues'

// delete pessoa1.nome;
// console.log(pessoa1)


const pessoa1 = new Object()
pessoa1.nome = 'William'
pessoa1.sobrenome = 'Rodrigues'
pessoa1.idade = 2
pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
}

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}

for (let chave in pessoa1) {
    console.log(pessoa1[chave])
}
