const verdadeira = true

//let tem escopo de bloco { ... bloco }
//var so tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz'

if (verdadeira) {
    let nome = 'Otavio' // criando
    //console.log(nome, nome2)

    if (verdadeira) {
        let nome = 'Outra coisa'
        console.log(nome, nome2) //sempre procura o mais proximo, nome
    }
}