function Carro(marca, modelo, ano) {
    this.marca = marca,
    this.modelo = modelo,
    this.ano = ano
}

const c1 = new Carro('Volsk', 'Fox', 2020)
const c2 = new Carro('Chevrolet', 'Camaro', 2014)
const c3 = new Carro('Ferrari', 'Itália', 2025)
console.log(c1.ano)
console.log(c2.marca)
console.log(c3.modelo)
console.log(c1.ligar())