let numeros = [1, 2, 3]
let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let index = 0; index < numeros.length; index++) {
    for (let indexMulti = 0; indexMulti < multiplicadores.length; indexMulti++) {
        console.log(`${numeros[index]} x ${multiplicadores[indexMulti]} = ${numeros[index]*multiplicadores[indexMulti]}`)
    }
}