const contador = {
    valor: 0,

    incrementar() {
        contador.valor++
    }
}

const contadorSeguro = Object.create(contador)

contadorSeguro.incrementar = function() {
    if (this.valor < 10) {
        this.valor++
    }
    else {
        console.log('Valor máximo atingido.')
    }
}

// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())
// console.log(contadorSeguro.incrementar())

for(let i = 0; i < 18; i++) {
    contadorSeguro.incrementar()
}

console.log(contadorSeguro.valor)