const produtos = [
    { nome: 'Caneta', qtde: 3, preco: 2 },
    { nome: 'Lápis', qtde: 2, preco: 2 },
    { nome: 'Borracha', qtde: 5, preco: 3 }
]

const getTotais = (produto) => `${produto.nome}: total de R$${produto.qtde * produto.preco} em produtos\n`

console.log(produtos.map(getTotais))