const container = document.querySelector('.container')

const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')



const soma = document.querySelector('.soma')
const subtrair = document.querySelector('.subtrair')
const multiplicar = document.querySelector('.multiplicar')
const dividir = document.querySelector('.dividir')

const resultado = document.getElementById('resultado')


// function capturarValores(a, b) {
//   const a = num1.value;
//   const b = num2.value;
// }

container.addEventListener('submit',  function calcular(e) {
  e.preventDefault()
  let a = Number(num1.value);
  let b = Number(num2.value);

  const operador = document.querySelector('#operador')
  const operadorValor = operador.value

  function operacao(operadorValor) {
    if (operadorValor === '+') {
      return a + b;
    } else if (operadorValor === '-') {
      return a - b;
    } else if (operadorValor === '*') {
      return a * b;
    } else {
      return a / b;
    }
  }

  const calico = operacao(operadorValor)

  resultado.innerHTML = `${calico}`
})



