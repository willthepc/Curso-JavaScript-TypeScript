const animal = {
    tipo: 'desconhecido',

    fazerSom() {
        console.log(`Fazendo som`)
    }
}

const cachorro = Object.create(animal)

cachorro.tipo = 'Cachorro'
cachorro.fazerSom = function() {
    return `Au Au`
}

const gato = Object.create(animal)
gato.tipo = 'gato'
gato.fazerSom = function() {
    return `Miau Miau`
}

gato.arranhar = function() {
    return `Gato está arranhando`
}

console.log(gato.fazerSom())
console.log(gato.arranhar())