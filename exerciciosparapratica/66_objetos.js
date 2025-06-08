const pessoa = {
    cumprimentar() {
        return `Olá!`
    }
}

const estudante = Object.create(pessoa)

estudante.cumprimentar = function() {
const saudacao = Object.getPrototypeOf(this).cumprimentar.call(this)

return `Sou estudante. ${saudacao}`
}

console.log(estudante.cumprimentar())