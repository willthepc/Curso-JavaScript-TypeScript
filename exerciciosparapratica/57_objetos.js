const objetos = {
    nome: 'William',
    sobrenome: 'Alkamim',
    idade: 12
}

function lolo(obj) {
    for(let i in obj) {
        console.log(i, obj[i])
    }
}

console.log(lolo(objetos))