// Aqui, criaPessoa é uma fábrica de objetos. Toda vez que você chama essa função, 
// ela retorna um novo objeto personalizado.
//Função cosntrutora - Constructor Function
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
        },

        fala: function (assunto) {
            return `${this.nome} está falando ${this.assunto}` //This acessa a propriedade do prorprio objeto
        },

        altura: a,
        peso: p,

        //Getter
        get imc()
        /*imc()*/ {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 64)
const p2 = criaPessoa('Junior', 'Rodrigues', 1.50, 54)
const p3 = criaPessoa('Mario', 'Ricardo', 1.80, 264)
console.log(p1.imc)
console.log(p2.imc)
console.log(p3.imc)
// p1.nomeCompleto = 'Maria Oliveira Silva'
// console.log(p1.nome)
// console.log(p1.sobrenome)
//console.log(p1.imc())
//console.log(p1.imc) getter



