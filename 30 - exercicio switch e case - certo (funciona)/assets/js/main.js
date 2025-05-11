const data = new Date(2025,5,9,19,42,2)

let diaSemana = data.getDay()
let mes = data.getMonth()
let horas = data.getHours()
let min = data.getMinutes()

if (diaSemana === 0) {
    diaSemana = 'Domingo'
} else if (diaSemana === 1) {
    diaSemana = 'Segunda-Feira'
} else if (diaSemana === 2) {
    diaSemana = 'Terça-Feira'
} else if (diaSemana === 3) {
    diaSemana = 'Quarta-Feira'
} else if (diaSemana === 4) {
    diaSemana = 'Quinta-Feira'
} else if (diaSemana === 5) {
    diaSemana = 'Sexta-Feira'
} else {
    diaSemana = 'Sábado'
}

if (mes === 1) {
    mes = 'Janeiro'
} else if (mes === 2) {
    mes = 'Fevereiro'
} else if (mes === 3) {
    mes = 'Março'
} else if (mes === 4) {
    mes = 'Abril'
} else if (mes === 5) {
    mes = 'Maio'
} else if (mes === 6) {
    mes = 'Junho'
} else if (mes === 7) {
    mes = 'Julho'
} else if (mes === 8) {
    mes = 'Agosto'
} else if (mes === 9) {
    mes = 'Setembro'
} else if (mes === 10) {
    mes = 'Outubro'
} else if (mes === 11) {
    mes = 'Novembro'
} else {
    mes = 'Dezembro'
}

const h1 = document.querySelector('.container h1')
h1.innerHTML = `${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}`
h1.innerHTML += `<p>${horas}:${min}</p>`

console.log(`${diaSemana}, ${data.getDate()} de ${mes} de ${data.getFullYear()}`)
console.log(`${horas}:${min}`)
