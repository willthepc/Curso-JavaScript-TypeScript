const retangulo = {
    largura: 12,
    altura: 2,

    get area() {
        return this.largura * this.altura
    }
}

console.log(retangulo.area)