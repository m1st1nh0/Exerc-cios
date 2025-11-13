// Informe o nome do cliente
const nome = "Lucas";

// Liste alguns produtos com nomes e preços

let produtos = [
  { nome: "Sucrilhos", preco: 10.99 },
  { nome: "Pão Fatiado", preco: 8.99 },
  { nome: "Patinho moído", preco: 32.9 },
  { nome: "Massa para Lasanha", preco: 12.9 },
  { nome: "Molho de tomate", preco: 5.9 },
  { nome: "Queijo Fatiado", preco: 12.9 },
  { nome: "Chantiy", preco: 27.8 },
  { nome: "Bolo para aniversário", preco: 35.9 },
];

//Percorra a lista e calcule o valor total da compra

let valorCompra = produtos.reduce((sum, item) => sum + item.preco, 0);

//Aplique desconto se o total for maior que R$100

let valorTotal = 0;

if (valorCompra > 100) {
  valorTotal = valorCompra * 0.9;
}

//Mostre o resultado final com uma mensagem amigável

const listaTexto = produtos.map(item => `- ${item.nome}: R$${item.preco}`).join('\n')

const mensagem = `Cliente: ${nome}
Produtos:
${listaTexto}
Total: R$${valorCompra}
Desconto Aplicado: 10%
Total com desconto: R$${valorTotal.toFixed(2)}
`;
console.log(mensagem);
