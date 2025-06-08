function criarPessoa(nome, idade) {
    return {
        nome, 
        idade,
    }
}

const p1 = criarPessoa ('Will', 13)
console.log(p1)