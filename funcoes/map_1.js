const alunos = [
    { nome: 'Romário', sobrenome: 'Arruda' },
    { nome: 'Tatiane', sobrenome: 'Arruda' },
    { nome: 'Júlia', sobrenome: 'Arruda' }
]
const getNomeCompleto = (aluno) => `${aluno.nome} ${aluno.sobrenome}`
console.log('Alunos: ', alunos)
console.log('Nomes completos: ', alunos.map(getNomeCompleto))