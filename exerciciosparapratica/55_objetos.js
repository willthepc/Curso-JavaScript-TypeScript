const pessoa = {
    nome: 'will',
    idade: 18,
    profissao: 'Programador',

    //Método
    dizerOla() {
        console.log(`Olá meu amigo ${this.nome}`)
    }
}

pessoa.dizerOla()

