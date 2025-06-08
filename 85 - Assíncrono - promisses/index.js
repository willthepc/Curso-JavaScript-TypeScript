function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + max)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('VALOR ERRADO BROW')

        setTimeout(() => {
            resolve(msg)
    }, tempo)
    })
}

esperaAi('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(44444444, rand(1, 3))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAi('Frase 3', rand(1, 3))
    })
    
    .then(resposta => {
        console.log(resposta)
    }).then(() => {
        console.log('Eu serei o último a ser exibido.')
    })
    .catch( e => {
        console.log('ERRO: ', e)
    })

console.log('Pode ser')
