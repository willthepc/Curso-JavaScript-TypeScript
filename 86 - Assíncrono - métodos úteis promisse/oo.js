function verificaNumero(n) {
    if (n > 10) {
        return Promise.resolve('Número válido!')
    } else {
        return Promise.reject('Número muito baixo!')
    }
}

verificaNumero(15)
    .then(msg => console.log('Sucesso:', msg))
    .catch(erro => console.log('Erro:', erro))

verificaNumero(5)
    .then(msg => console.log('Sucesso:', msg))
    .catch(erro => console.log('Erro:', erro))