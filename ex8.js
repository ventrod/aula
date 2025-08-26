const vendas = [
    { produto: "televisão", quantidade: 12, precoUnitario: 1000 },
    { produto: "computador", quantidade: 100, precoUnitario: 3500 },
    { produto: "cadeira", quantidade: 20, precoUnitario: 250 }
]
let soma = 0;

function totvenda(param) {
    soma += param.quantidade * param.precoUnitario;
}

vendas.forEach((valor, indice) => { 
    console.log(`Na posição ${indice} está o produto: ${valor.produto}`);
});

vendas.forEach(totvenda)
    console.log(`O total da compra é: ${soma}`)
    