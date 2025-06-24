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

// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase 2', rand())
//     })
//     .then(valor => {
//         console.log(valor)
//         return esperaAi('Fase', rand())
//     })
//     .then(fase => {
//         console.log(fase)
//         return fase
//     })
//     .then(fase => {
//         console.log('Terminamos na fase: ',fase)
//     })
//     .catch(e => console.log(e))

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', rand(1,3))
        console.log(fase1)
        const fase2 = await esperaAi('Fase 2', rand(1, 3))
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3', rand(1, 3))
        console.log(fase3)

        console.log('Terminamos na fase: ', fase3)
    } catch (e) {
        console.log(e)
    }
}

executa()
//pending - pendente