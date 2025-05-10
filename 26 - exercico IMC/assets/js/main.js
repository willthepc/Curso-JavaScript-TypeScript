    const form = document.querySelector('.form')

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const inputPeso = evento.target.querySelector('#peso')
        const inputAltura = evento.target.querySelector('#altura')

        const peso = Number(inputPeso.value)
        const altura = Number(inputAltura.value)

        const imc = peso / altura ** 2

        console.log(`Seu peso é ${peso} e sua altura é ${altura}. Seu IMC fica em: ${imc.toFixed(2)}`)

        if (imc < 18.5) {
            console.log('Abaixo do peso')
        } else if (imc >= 18.5 && imc <= 24.9) {
            console.log('Peso normal')
        } else if (imc >= 25 && imc <= 29.9) {
            console.log('Sobrepeso')
        } else if (imc >= 30 && imc <= 34.9) {
            console.log('Obesidade grau 1')
        } else if (imc >= 35 && imc <= 39.9) {
            console.log('Obesidade grau 2')
        } else {
            console.log('Obesidade grau 3')
        }

    })