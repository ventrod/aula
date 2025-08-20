let alunos = [{nome: "Rodrigo", nota1: 8, nota2: 10},
            {nome: "Louise", nota1: 4, nota2: 8},
            {nome: "Lara", nota1: 3, nota2: 4}
];

let soma = 0
for(let i = 0; i< alunos.length; i++) {
    let mediaAluno = (alunos[i].nota1 + alunos[i].nota2) / 2;
    console.log("Aluno", alunos[i].nome, "-media", mediaAluno)   
};