function conta() {
    let _saldo = 0;

    return {
        depositar(valor) {
        _saldo += valor
        },
        verSaldo() {
            return _saldo;
        }
    }
}

const contaPoupanca = Object.create(conta())
contaPoupanca.renderJuros = function(taxa) {
    const juros = this.verSaldo() * taxa
    this.depositar(juros)
}

contaPoupanca.depositar(100)
contaPoupanca.renderJuros(0.1)
console.log(contaPoupanca.verSaldo())