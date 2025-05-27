let dado = [7, 9, 4, 11, 6]
let i = 0
while (i < dado.length) {
    if (dado[i] % 2 === 0) {
        console.log('O primeiro número par é',dado[i])
        break
    }
    i++
} 

// for (let i = 0; i < dado.length;i++) {
//     if (dado[i] % 2 === 0) {
//         console.log('O primeiro número par:',dado[i])
//         break
//     }
// }
