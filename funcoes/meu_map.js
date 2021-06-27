Array.prototype.meuMap = function(fn) {
    const novoArray = []

    for(let i = 0; i < this.length; i++) {
        novoArray.push(fn(this[i], i, this))
    }

    return novoArray
}

const alunos = [
    { nome: 'Romário', sobrenome: 'Arruda' },
    { nome: 'Tatiane', sobrenome: 'Arruda' },
    { nome: 'Júlia', sobrenome: 'Arruda' }
]
const getNomeCompleto = (aluno) => `${aluno.nome} ${aluno.sobrenome}`

console.log(alunos.meuMap(getNomeCompleto))