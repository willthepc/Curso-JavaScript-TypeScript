// try { // tente isso, se nao der certo exibe o catch
// console.log(naoExisto)
// } catch(err) {
//     console.log('naoExisto não existe')
//     console.log(err)
// }

function soma(x,y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('X e Y precisam ser números.');
    }

    return x + y;
}

try {
    console.log(soma('1',2))
} catch(error) {
    console.log('Algo mais agradavel')
}

