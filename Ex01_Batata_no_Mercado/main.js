// Armazena o nome do cliente e a lista de produtos
let nomeCliente = "";
let produtos = [];

// Elemento onde o nome será exibido
const areaNome = document.getElementsByClassName("nome")[0];
// HTML inicial dessa área (para restaurar depois)
const hmtlInicialNome = areaNome.innerHTML;

// Elemento onde o carrinho será exibido
const areaCarrinho = document.getElementsByClassName("carrinho")[0];
const hmtlInicialCarrinho = areaCarrinho.innerHTML;

// Evento para escrever o nome do cliente
document.getElementById("nomebtn").onclick = function escreverNome() {
  const nome = document.getElementById("nome").value;

  // Valida se o nome não é vazio e não é um número
  if (nome.trim() && isNaN(nome.trim())) {
    areaNome.innerHTML = `<h2>Olá ${nome}</h2>
    <button id="btn-sair">Sair</button>`;

    // Associa o botão "Sair" à função sair()
    document.getElementById("btn-sair").onclick = sair;
  }
};

// Restaura a área do nome ao estado inicial
function sair() {
  areaNome.innerHTML = hmtlInicialNome;

  // Reativa o botão que escreve o nome
  document.querySelector(".nomesbt").onclick = escreverNome;
}

// Limpa os campos de entrada dos produtos
function limparCampos() {
  document.getElementById("item-input").value = "";
  document.getElementById("preco-input").value = "";
}

// Evento para adicionar produtos ao carrinho
document.getElementById("itemsbtn").onclick = function () {
  const nomeProduto = document.getElementById("item-input").value;
  const precoProduto = Number(document.getElementById("preco-input").value);

  // Valida nome e preço
  if (nomeProduto.trim() && precoProduto > 0) {
    produtos.push({ nome: nomeProduto, preco: precoProduto });
    atualizarCarrinho();
  }

  limparCampos();
};

// Calcula total, aplica desconto e mostra o resumo final
document.getElementById("total").onclick = function atualizarResultado() {
  let valorCompra = produtos.reduce((sum, item) => sum + item.preco, 0);
  let valorTotal = 0;
  let valorDesconto = 0;

  // Aplica desconto se valor > 100
  if (valorCompra > 100) {
    valorDesconto = 10;
    valorTotal = valorCompra * 0.9;
  }

  const listaTexto = produtos
    .map((item) => `-${item.nome}:         R$${item.preco}<br>`)
    .join("\n");

  const mensagem = `Cliente: ${nomeCliente}<br>
Produtos:<br>
${listaTexto || "Nenhum produto adicionado"}
Total: R$${valorCompra}<br>
Desconto Aplicado: ${valorDesconto}%<br>
Total com desconto: R$${valorTotal.toFixed(2)}<br>
<button id="btn-sair2">Sair</button>`;

  // Exibe o resultado no carrinho
  document.getElementById("output-carrinho").innerHTML = mensagem;

  // Ativa o botão "sair"
  document.getElementById("btn-sair2").onclick = sair2;
};

// Restaura o carrinho ao estado inicial
function sair2() {
  areaCarrinho.innerHTML = hmtlInicialCarrinho;
}

// Atualiza visualmente o carrinho conforme produtos são adicionados
function atualizarCarrinho() {
  let valorCompra = produtos.reduce((sum, item) => sum + item.preco, 0);

  const listaTexto = produtos
    .map((item) => `<li>${item.nome}:         R$${item.preco}</li>`)
    .join("\n");

  document.getElementById("output-carrinho").innerHTML = listaTexto
    ? `<ul>${listaTexto}</ul>
      Total: ${valorCompra}`
    : "minhas compras vão aqui";

  limparCampos();
}