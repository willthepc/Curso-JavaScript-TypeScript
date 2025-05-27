const form = document.querySelector('#form')

form.addEventListener('submit', function recebeValor(e) {
    e.preventDefault()

    const nome = document.querySelector('.nome')
    const resultado = document.querySelector('.resultado')

    let peso = document.querySelector('.peso')
    let valorPeso = Number(peso.value)

    let altura = document.querySelector('.altura')
    let valorAltura = Number(altura.value)
    let formula = valorPeso / valorAltura**2
    let imc = ''
    if (formula < 17) {
        imc = 'Muito abaixo do peso'
    } else if (formula >= 17 && formula <= 18.49) {
        imc = 'Abaixo do peso'
    } else if (formula >= 18.5 && formula <= 24.99) {
        imc = 'Peso normal'
    } else if (formula >= 25 && formula <= 29.99) {
        imc = 'Acima do peso'
    } else if (formula >= 30 && formula <= 34.99) {
        imc = 'Obesidade I'
    } else if (formula >= 35 && formula <= 39.99) {
        imc = 'Obesidade II'
    } else {
        imc = 'Obesidade III'
    }
    
    resultado.innerHTML += `<p>Olá ${nome.value}, estamos aqui para te ajudar!</p> <p>Seu peso: ${valorPeso}</p> <p>Sua altura: ${valorAltura}</p> <p>Seu IMC: ${formula.toFixed(0)} ${imc}</p>`
    //console.log(`Olá ${nome.value}, estamos aqui para te ajudar! Seu peso é ${peso.value} e sua altura é ${altura.value}`)
})