function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + max)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('VALOR ERRADO BROW')
            return;
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
    }, tempo)
    })
}

//Promise.all Promise.race Promise.resolve Promise.reject

//Promise.all - Avalia todos primeiro
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise 1', 3000),
//     esperaAi('Promise 2', 500),
//     esperaAi('Promise 3', 1000),
//     esperaAi(3234221, 1000),
//     'Outro valor'
// ]

// Promise.all(promises)
//     .then(function(valor) {
//         console.log(valor)
// })
//     .catch(function(erro) {
//         console.log(erro)
//     })

//Promise.race - Mostra o primeiro valor / O mais rápido
// const promises = [
//     esperaAi('Promise 1', rand(1, 4)),
//     esperaAi('Promise 2', rand(1, 4)),
//     esperaAi(123, rand(1, 4)),
//     esperaAi('Promise 3', rand(1, 4))
// ]

// Promise.race(promises)
//     .then(function(valor) {
//         console.log(valor)
//     })
//     .catch(function(erro) {
//         console.log(erro)
//     })


//Promise.resolve - cai no then
// function baixaPagina() {
//     const emCache = true;

//     if(emCache) {
//         return Promise.resolve('Página em cache')
//     } else {
//         return esperaAi('Baixei a página', 3000)
//     }
// }

// baixaPagina()
//     .then(dadosPagina => {
//         console.log(dadosPagina)
//     })
//     .catch(e => console.log(e)
// )

//Promise.reject - cai no catch
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache')
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('ERRO', e)
)