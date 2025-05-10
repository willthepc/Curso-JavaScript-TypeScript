//               0123456789
let umaString = 'Um "texto"'

//Forma de pedir letra pela posição
console.log(umaString[1])
console.log(umaString.charAt(6))

// Formas de juntar textos com variaveis
console.log(umaString.concat(' em um lindo dia.'))
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia`)

console.log(umaString.indexOf('texto')) //Número da posição - Indice
console.log(umaString.lastIndexOf('texto'))

console.log(umaString.match(/[a-z]/g)) //quebrar a palavra em letras
console.log(umaString.search(/x/)) //procurar letra
console.log(umaString.replace('Um', 'Outra')) //trocar palavra
console.log(umaString.includes('palavra')) //Verifica se existe

console.log(umaString.length) //Contador de letras
console.log(umaString.slice(4, 9)) //Cortar pela posição das letras

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())

console.log(umaString.split(' ', 2)) //Divisor de palavras / Escolher quantidade de palavras