const verdadeira = true

//let tem escopo de bloco { ... bloco }
//var so tem escopo de função

let nome = 'Luiz' // criando
var nome2 = 'Luiz' //criando

if (verdadeira) {
    //let nome = 'Otavio' // criando
    var nome2 = 'Rogerio' //Redeclarando
    //console.log(nome, nome2)

    if (verdadeira) {
        var nome2 = 'Ronaldo' //Redeclarando
        //let nome = 'Outra coisa'
        //console.log(nome, nome2) //sempre procura o mais proximo, nome
    }
}

console.log(nome, nome2) //nesse caso utiliza o nome fora do escopo, e o nome2 foi redeclarado, o que muda o nome totalmente


function falaOi(){
    //var nome = 'Luiz'
}
console.log(nome) //Erro poid o que esta dentro de uma função pé 'especial'

falaOi()



//var nome = 'Luiz'
function falaOi(){
    console.log(nome) //Permitido, porem todos podem usar essa var
}
falaOi()


