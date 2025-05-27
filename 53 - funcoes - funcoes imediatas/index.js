// IIFE -> immediately invoked function expression

//Necessário estar em parenteses pt1
(function(idade, peso, altura) {
    const sobrenome = 'Miranda'
    function criaNome(nome) {
        return nome + ' ' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Luiz'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80); //Para fazer isso pt2

//Estrutrura:
(function exemplo(){
    return;
})(/*Dados do exemplo*/);