const produtos = [
    { nome: 'Caneta', qtde: 3, preco: 2 },
    { nome: 'Lápis', qtde: 2, preco: 2 },
    { nome: 'Borracha', qtde: 5, preco: 3 }
]

const getTotal = produto => produto.qtde * produto.preco
const somaTotal = (anterior, atual) => anterior + atual

console.log(produtos.map(getTotal).reduce(somaTotal))