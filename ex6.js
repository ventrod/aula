const produtos = [
    { nome: "celular", preco: 2990},
    { nome: "computador", preco: 3900},
    { nome: "bateria", preco: 2200},
    { nome: "teclado", preco: 15},
    { nome: "mouse", preco: 7.5}
]

produtos.forEach(item => {
    if(item.preco > 10) {
        console.log(`O produto ${item.nome} tem o preco(R$): ${item.preco}`)
    }
})