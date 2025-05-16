function fizzBuzz (x) {
    if (typeof x !== 'number') return x;
    if (x % 3 === 0 && x % 5 === 0) return 'FizzBuzz';
    if (x % 3 === 0) return 'Fizz';
    if (x % 5 === 0) return 'Buzz';
    return x;
}

for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
}

// function fizzBuzz (x) {

//     if (x <= 0 || x >= 100) {
//         return ('Número acima do limite! Tente')
//     }

//     if (x % 3 === 0) {
//         console.log('Fizz')
//     }

//     if (x % 5 === 0) {
//         console.log('Buzz')
//     }

//     if (x % 5 === 0 && x % 3 ===0) {
//         console.log('FizzBuzz')
//     } else {
//         console.log(x)
//     }

//     if (x === Number) {
//         console.log('Sim, é um número.')
//     } else {
//         console.log('Foi digitado uma String.', x)
//     }

//     console.log(!isNaN(x))
// }


// console.log(fizzBuzz(300))