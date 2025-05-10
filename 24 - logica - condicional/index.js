/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa Noite
*/

// If pode ser usado sozinho
//Else if não pode ser usado sozinho, precisa de um if antes
//Else if pode ser utilizado de forma ilimitado
//Só posso ter um else

const hora = 15

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite');
} else {
    console.log('Olá')
}

const tenhoGrana = false

if (tenhoGrana) {
    console.log('Vou sair')
} else {
    console.log('Não vou sair')
}