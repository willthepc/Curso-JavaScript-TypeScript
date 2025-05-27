function retornaFuncao() {
    const nome = 'Luiz'; // Closure - habilidade em acessar variavel do seu escopo lexico
    return function() {
        return nome + 'o'
    }
}

const funcao = retornaFuncao('Luiz')
const funcao2 = retornaFuncao('João')
console.dir(funcao)
console.dir(funcao2)

console.log(funcao(), funcao2())