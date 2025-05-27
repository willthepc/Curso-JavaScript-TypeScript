// let coluna1 = ['*']
// let coluna2 = ['**']
// let coluna3 = ['***']
// let coluna4 = ['****']
// let coluna5 = ['*****']

// for (let index = 0; index < coluna1.length; index++) {
//     for (let index2 = 0; index2 < coluna2.length; index2++) {
//         for (let index3 = 0; index3 < coluna3.length; index3++) {
//             for (let index4 = 0; index4 < coluna4.length; index4++) {
//                 for (let index5 = 0; index5 < coluna5.length; index5++) {
//                     console.log(coluna1[index])
//                     console.log(coluna2[index2])
//                     console.log(coluna3[index3])
//                     console.log(coluna4[index4])
//                     console.log(coluna5[index5])
//                 }
//             }
//         }
//     }
// }

// Imprimir um quadrado de asteriscos 5x5
for (let linha = 1; linha <= 5; linha++) {
    let asteriscos = '';
    for (let coluna = 1; coluna <= linha; coluna++) {
        asteriscos += '* ';
    }
    console.log(asteriscos);
}