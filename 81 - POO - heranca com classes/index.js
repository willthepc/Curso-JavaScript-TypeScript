class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado')
            return
        }

        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado')
        }

        this.ligado = false
    }
}

const d1 = new DispositivoEletronico('Smartphone')


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome) //o que tem no constructor, os this que tem na classe pai
        this.cor = cor
        this.modelo = modelo
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome)
        this.temWifi = temWifi
    }

    // ligar() {
    //     console.log('Olha, você alterou o método ligar')
    // }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10')
const t1 = new Tablet('Tablet', true)
t1.ligar()
console.log(t1.ligar())