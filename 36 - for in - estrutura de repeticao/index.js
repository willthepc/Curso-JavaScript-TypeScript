const frutas = ['Pera','Maça','Uva']


//for classico
// for (let i = 0; i < frutas.length; i++ ) {
//     console.log(frutas[i])
// }

//for in
// for (let index in frutas) {
//     console.log(frutas[index])
// }

let objetos = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 24
}


for (let index in objetos) {
    console.log(index, objetos[index])
}

    // console.log(objetos.nome)