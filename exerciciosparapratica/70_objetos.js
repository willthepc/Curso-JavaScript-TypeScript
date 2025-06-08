class Aluno {
    constructor(nome, notas) {
        this.nome = nome
        this.notas = notas
    }

    calcularMedia() {
        let soma = 0
        for (let nota of this.notas) {
            soma += nota
        }

        const media = soma / this.notas.length

        if (media >= 6) {
            console.log(this.nome ,'APROVADO')
        } else {
            console.log(this.nome ,'REPROVADO')
        }
    }
}

const a1 = new Aluno('William', [7, 5, 8])
console.log(a1.calcularMedia())