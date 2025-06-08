const animal = {
    respirar() {
        return `Respitando...`
    }
}

const mamifero = Object.create(animal)
mamifero.amamentar = function() {
    return `Amamentando...`
}

const cachorro = Object.create(mamifero)
cachorro.amamentar = function() {
    return `Agora é do cachorro`
}

console.log(animal.respirar())
console.log(mamifero.amamentar())
console.log(cachorro.amamentar())