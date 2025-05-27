//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia']
//Push inicio
nomes.splice(0, 0, 'Luiz', 'Otávio')
console.log(nomes)

//Push final
nomes.splice(nomes.length, 0, 'Luiz', 'Otávio')
console.log(nomes)

//Push meio
nomes.splice(1, 0, 'Luiz', 'Otávio')
console.log(nomes)

//nomes.splice(indice, delete, elem1, elem2, elem3)
//pop
// const removidos = nomes.splice(3, 2, 'Liz', 'Otávio') //Ultimo elemento não é lido

// console.log(nomes, removidos)
