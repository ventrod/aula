let alunos = [{nome: "Rodrigo", nota: [8, 10, 12]},
            {nome: "Louise", nota: [4, 8, 7]},
            {nome: "Lara", nota: [3, 4, 8]}
];

for(let i = 0; i< alunos.length; i++) {
    let notas = alunos[i].nota;
    let soma = 0;
    
    for (let item = 0; item < notas; item++){
        soma += notas[item];
    }

let media = soma / notas.length

console.log("O aluno" + alunos[i].nome + "teve a media de: " + media)
}