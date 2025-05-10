const numero = 1

if (numero >= 0 && numero <= 5) {
    console.log('Sim, o número está entre 0 e 5.')
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8')
} else if (1 === 1) //Verdadeiro -> O algoritmo para de ler aqui
{
    console.log('LITERAL')
} else if (numero >= 9 && numero <= 11) {
    console.log('O número está entre 9 e 11')
} else {
    console.log('O número não está entre 0 e 11')
}