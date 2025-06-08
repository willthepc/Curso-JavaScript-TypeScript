const circulo = {
    raio: 5,
    get area() {
        return 3.14 * (this.raio ** 2)
    }
}

console.log(circulo.area)