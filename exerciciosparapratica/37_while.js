let dado = [12, 45, 6, 78, 213]
let maior = dado[0]
let i = 1

while (i < dado.length) {
    if (dado[i] > maior) {
        maior = dado[i]
    }
    i++;
}

console.log('O maior número é: ',maior)