const form = document.querySelector('#form')

form.addEventListener('submit', function recebeValor(e) {
    e.preventDefault();
    
    const celsius = document.querySelector('.celsius')
    const celsiusValor = Number(celsius.value)

    const formula = (celsiusValor * 1.8) + 32
    
    const fah = document.querySelector('.fah')
    fah.innerHTML = `<p>${formula.toFixed(2)}</p>`
})