/*Funções que operam em outra funcões, tornando-as como argumento
ou retornando-as são chamadas de 
higher-order-function => função de ordem superior 
*/

function executar(cb, ...params) {
    return cb(...params)
}

function somar(a, b, c) {
    return a + b + c
}

console.log(`Soma =  ${executar(somar, 5, 5, 5)}`)