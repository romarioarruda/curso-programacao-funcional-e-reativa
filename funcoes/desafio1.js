function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}

const resultSoma = somar(3)(4)(5)

console.log(resultSoma)

// function calcular(a) {
//     return function(b) {
//         return function (fn) {
//             return fn(a, b)
//         }
//     }
// }