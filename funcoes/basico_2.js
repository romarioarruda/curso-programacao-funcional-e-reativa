function bomDia() {
    console.log('Bom dia!!')
}

const boaTarde = function () {
    console.log('Boa tarde!!!')
}

function rodarFuncao(fn) {
    if (typeof fn !== 'function') throw new Error('O parâmetro deve ser uma função')
    fn()
}

rodarFuncao(bomDia)
rodarFuncao(boaTarde)