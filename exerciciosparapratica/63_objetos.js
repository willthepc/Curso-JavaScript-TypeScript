const veiculo = {
    tipo: 'generico',

    movimentar() {
        return `Movendo-se...`
    }
}

const bicicleta = Object.create(veiculo)

bicicleta.tipo = 'Bicicleta'
bicicleta.movimentar = function() {
    return `Pedalando...`
}

console.log(bicicleta.tipo)
console.log(bicicleta.movimentar())