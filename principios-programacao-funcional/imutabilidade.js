function ordenarValores(array, cb) {
    return [...array].sort(cb)
}

const doMaiorProMenor = (a, b) => b - a
const doMenorProMaior = (a, b) => a - b

const numeros = [10, 1, 23, 2, 3, 7, 9]

const ordenados = ordenarValores(numeros, doMenorProMaior)
console.log(ordenados)