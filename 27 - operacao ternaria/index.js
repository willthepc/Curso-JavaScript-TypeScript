// ? 'Valor para verdadeiro' : 'Valor para falso'
const pontuacaoUsuario = 100
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'NORMAL'

const corUsuario = null
const corPadrao = corUsuario || 'Preta'
console.log(nivelUsuario, corPadrao)

/*
if (pontuacaoUsuario >= 1000) {
    console.log('vip')
} else {
    console.log('normal')
}
*/