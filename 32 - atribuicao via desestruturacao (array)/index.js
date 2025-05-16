// ... rest, ... spread

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
const [um, , tres, ,cinco,, sete, ...resto] = numeros
console.log(um, tres, cinco, sete)
console.log(resto)



//                   0       1       2
//                 0 1 2   0 1 2   0 1 2
const numeros2 = [ [1,2,3],[4,5,6],[7,8,9] ];
//console.log(numeros[1][0])
const [,[,,seis]] = numeros2
console.log(seis)


const numeros3 = [ [1,2,3],[4,5,6],[7,8,9] ];
const [lista1, lista2, lista3] = numeros3
console.log(lista2)
