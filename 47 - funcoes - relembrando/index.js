//Declaração de função - Lembrando que por conta do function hoisting
// Não importa se ta emcima ou embaixo
falaOi()
function falaOi() {
    console.log('Oi')
}

// First-class objects (objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('Sou um dado')
}
souUmDado()

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

//Dentro de um objeto
const obj = {
    falar: function () {
        console.log('Estou falando...')
    },
    //ou

    falar2() {
        console.log('Outra forma')
    }
}

obj.falar()
