const alunos = [
    { nome: 'Romário', sobrenome: 'Arruda', nota: 10 },
    { nome: 'Tatiane', sobrenome: 'Arruda', nota: 8 },
    { nome: 'Júlia', sobrenome: 'Arruda', nota: 7 },
    { nome: 'Teste 1', sobrenome: 'Arruda', nota: 5 },
    { nome: 'Teste 2', sobrenome: 'Arruda', nota: 4 }
]

const mediaMinima = 7
const aprovados = aluno => aluno.nota >= mediaMinima
const reprovados = aluno => aluno.nota < mediaMinima

console.log('Aprovados: ', alunos.filter(aprovados))
console.log('Reprovados: ', alunos.filter(reprovados))