//capturando os inputs displays
const display = document.querySelector('input#display')
const display2 = document.querySelector('input#display2')
display.disabled = true
display2.disabled = true



//criando um array para guardar os numeros e operações
let array = []


//capturando os numeros e fazendo um loop 
let numeros = document.querySelectorAll('.num')
for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', (e) => {
        display.value += e.target.value
    })
}

//capturando os operadores e usando um switch case das operaçoes
let operadores = document.querySelectorAll('.operador')
for (let i = 0; i < operadores.length; i++) {
    operadores[i].addEventListener('click', (e) => {
        array[1] = e.target.value

        switch (array[1]) {
            case '+':
                array[0] = display.value;
                display2.value = array[0] + ' ' + array[1];
                display.value = ''
                break;
            case '-':
                array[0] = display.value;
                display2.value = array[0] + ' ' + array[1];
                display.value = ''
                break;
            case 'x':
                array[0] = display.value;
                display2.value = array[0] + ' ' + array[1];
                display.value = ''
                break;
            case '÷':
                array[0] = display.value;
                display2.value = array[0] + ' ' + array[1];
                display.value = ''
                break;
            default:
                display.value = 'ERROR'
                display.style.color = 'red'
                error()
        }
    })
}


//capturando a igualdade
function igual() {

    let resultado = 0
    if (array[1] == '+') {
        resultado = Number(array[0]) + Number(display.value)
        array[2] = display.value
        display2.value = array[0] + ' ' + array[1] + ' ' + array[2] + ' ='
        display.value = resultado
    } else if (array[1] == '-') {
        resultado = Number(array[0]) - Number(display.value)
        array[2] = display.value
        display2.value = array[0] + ' ' + array[1] + ' ' + array[2] + ' ='
        display.value = resultado
    } else if (array[1] == 'x') {
        resultado = Number(array[0]) * Number(display.value)
        array[2] = display.value
        display2.value = array[0] + ' ' + array[1] + ' ' + array[2] + ' ='
        display.value = resultado
    } else if (array[1] == '÷') {
        if (display.value == 0) {
            display.value = 'ERROR'
            display.style.color = 'red'
            error()
        } else {
            resultado = Number(array[0]) / Number(display.value)
            array[2] = display.value
            display2.value = array[0] + ' ' + array[1] + ' ' + array[2] + ' ='
            display.value = resultado
        }
    } else if (array[1] == '' || array[1] == undefined) {

    } else {
        display.value = 'ERROR'
        display.style.color = 'red'
        error()
    }
    if (resultado >= 1000000000000) {
        display.value = 'ERROR'
        display.style.color = 'red'
        error()
    }

}

function error() {
    if (display.value == 'ERROR') {
        setTimeout(() => {
            apagarTudo()
        }, 1000)
    }
}

//creando evento para o c e o ce
document.querySelector('#c').addEventListener('click', apagarTudo)
document.querySelector('#ce').addEventListener('click', apagaUltimoValor)

function apagarTudo() {
    apagaUltimoValor()
    display2.value = ''
    display.style.color = 'rgb(1, 138, 35)'
}

function apagaUltimoValor() {
    display.value = ''
}

//criando eventos para os botoes especiais
document.querySelector('#ponto').addEventListener('click', () => {

    if (display.value == '' || display.value == undefined) {
        display.value = '0.'

    }
    if (display.value.indexOf('.') == -1) {
        display.value += '.'
    }
})

document.querySelector('#mais-menos').addEventListener('click', () => {
    display.value *= -1
})

let porcentagem = document.querySelector('#porcento')
porcentagem.addEventListener('click', () => {
    if (array[0] != '' && array[0] != undefined) {
        let resultado2 = (display.value * array[0]) / 100
        display.value = resultado2
        igual()
    } else {
        display.value = display.value / 100
    }
})