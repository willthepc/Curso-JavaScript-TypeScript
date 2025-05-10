//Curto-Circuito é tipo uma estrutura de condição mais simples e eficiente

/*
&& -> false && true - um false, ja da tudo falso
|| -> 

FALSY
false
0
' '
null / undefined
*/

const corUsuario = null
const corPadrao = corUsuario || 'preto'
console.log(corPadrao)

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log(a || b || c || d || e)








/*
function falaOi() {
    return 'Oi'
}

const vaiExecutar = 'João'

console.log(vaiExecutar && falaOi())
*/