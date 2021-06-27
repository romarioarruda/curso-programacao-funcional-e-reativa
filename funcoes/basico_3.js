const somar = (...numeros) => {
    let total = 0

    for (let numero of numeros) {
        total += numero
    }

    return total
}

console.log(somar(1, 2, 3, 4, 5))