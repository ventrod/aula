let pessoa = [{nome: "Manoel", idade: "24", cidade: "São Paulo"},
{nome: "José", idade: "30", cidade: "Rio de Janeiro"}];

for(i = 0; i < pessoa.length; i++){

    console.log("Pessoa" + i+1)
    console.log("Nome: ", pessoa[i].nome)
    console.log("Idade: ", pessoa[i].idade)
    console.log("Cidade: ", pessoa[i].cidade)

}
