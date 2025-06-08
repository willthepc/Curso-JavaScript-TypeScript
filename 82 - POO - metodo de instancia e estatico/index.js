class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    //Método de instância
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    //Método de estático -> Só pode ser acessado pela classe pai
    static trocaPilha() {
        console.log('Ok, vou trocar.')
    }

    static soma(x, y) {
        return x + y
    }
}

const controle1 = new ControleRemoto('LG')
for (let i = 0; i < 15; i++) {
    controle1.aumentarVolume()
}
console.log(controle1)
ControleRemoto.trocaPilha()
console.log(ControleRemoto.soma(2,2))