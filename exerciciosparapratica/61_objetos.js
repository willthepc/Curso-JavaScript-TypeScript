function Carro(marca, modelo, ano) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
}

Carro.prototype.ligar = function() {
    return `${this.modelo} está ligando!`
}

const c1 = new Carro('Volsk', 'Fox', 2020)
const c2 = new Carro('Chevrolet', 'Camaro', 2014)
const c3 = new Carro('Ferrari', 'Itália', 2025)

function Moto(marca, modelo, ano) {
    Carro.call(this, marca, modelo, ano)
}

Moto.prototype = Object.create(Carro.prototype)
Moto.prototype.constructor = Moto;

Moto.prototype.empinar = function() {
    return `${this.modelo} vai empinar!`
}

const m1 = new Moto('Yamaha', 'r15', 2020)
console.log(m1.empinar())
console.log(m1.ligar())
console.log(m1 instanceof Moto)
console.log(m1 instanceof Carro)