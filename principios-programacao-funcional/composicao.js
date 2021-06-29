function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function tranformaEmString(value) {
    return value.toString()
}

function separarPor4(text) {
    return text.replace(/(\d{4})/g, "$1 ")
}

function removerEspacos(value) {
    return value.replace(/(\s)/g, "")
}

const compositor = composicao(tranformaEmString, separarPor4)

const numero = 1234567891023145
console.log(compositor(numero))
