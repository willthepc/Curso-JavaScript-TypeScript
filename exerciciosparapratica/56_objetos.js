const contaBancaria = {
    saldo: 1000,

    depositar(valor) {
        this.saldo += valor
    }
}

contaBancaria.depositar(100)
contaBancaria.depositar(100)
contaBancaria.depositar(100)
contaBancaria.depositar(100)
contaBancaria.depositar(100)
contaBancaria.depositar(100)
console.log(contaBancaria.saldo)