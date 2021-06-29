function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function toStr(value) {
    return value.toString()
}

function toReplace(text) {
    return text.replace(/(\d{4})/g, "$1 ")
}

const compositor = composicao(toStr, toReplace)

const numero = 1234567891023145
console.log(compositor(numero))
