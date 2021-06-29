function toStr(value) {
    return value.toString()
}

function toReplace(text) {
    return text.replace(/(\d{4})/g, "$1 ")
}

const numero = 1234567891023145
console.log(toReplace(toStr(numero)))
