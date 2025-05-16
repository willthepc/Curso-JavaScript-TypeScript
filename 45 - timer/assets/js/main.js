function criaHoraDosSegundos (segundos) {
    const data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}
const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer;

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000);
}

document.addEventListener('click', function(e){
    console.log(e.target)

    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        relogio.classList.remove('pausado')
        segundos = 0
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.classList.remove('pausado')
        iniciaRelogio()
    }
    if (el.classList.contains('zerar')) {
        clearInterval(timer)
        relogio.classList.remove('pausado')
    }
});

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    iniciaRelogio();
})

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00'    
    segundos = 0
})