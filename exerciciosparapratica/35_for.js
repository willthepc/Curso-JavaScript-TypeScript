let lista = [1,2,3,4,5]
let soma = 0

for (const num of lista) {
    soma += num;
}

console.log('Soma: ', soma)
console.log('Média: ', soma / lista.length)
