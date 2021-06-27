function exec(fn, a, b) {
    return fn(a, b)
}

const somar = (a, b) => a + b
const dividir = (a, b) => a / b

console.log(`Soma = ${exec(somar, 2, 5)}`)
console.log(`Divisao = ${exec(dividir, 10, 2)}`)