function criaContador() {
    let contador =  0;

    return function () {
        return ++contador
    }
}

const soma = criaContador()
console.log(soma())
console.log(soma())
console.log(soma())
console.log(soma())