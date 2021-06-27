const valor = (valor) => {
    return new Promise((resolve, reject) => {
        if (typeof valor !== 'number') {
            reject('O valor precisa ser um número...')
        }
        resolve(valor)
    })
}

valor(123).then(console.log)
valor('ewewe').then(console.log).catch(err => console.log(err))