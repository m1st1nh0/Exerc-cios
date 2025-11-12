# 📒 Incantare Trainee — Lista de Exercícios

Bem-vindo à minha lista de exercícios do processo trainee na **Incantare**!

## Sobre o Projeto
Este é um projeto para praticar lógica de programação usando **JavaScript**. O foco inicial foi criar uma solução simples que simula um carrinho de compras: declarando uma lista de produtos, calculando o valor total, aplicando descontos condicionais e imprimindo uma mensagem com as informações organizadas.

## O que estou aprendendo
- **Manipulação de arrays de objetos** utilizando métodos como `map` e `reduce`
- **Operadores condicionais** para lógica de negócios simples
- **Interpolação de strings** com template literals
- Organização do código para favorecer clareza e futuras manutenções

## Funcionalidades 
- Recebe o nome do cliente
- Lista produtos de forma dinâmica
- Soma o valor da compra
- Aplica desconto de 10% para compras acima de R$100
- Exibe mensagem final formatada, mostrando tanto o valor sem desconto quanto com desconto (quando aplicável)

## Dificuldades e Atalhos
Durante o exercício, notei que começar somando valores usando for-loops tornava o código mais longo e menos legível. Por exemplo, meu primeiro impulso foi algo assim:

```js
let valorCompra = 0;
for (let i = 0; i < produtos.length; i++) {
  valorCompra += produtos[i].preco;
}
```

Refatorando com o método `.reduce()`, consegui simplificar bastante o cálculo:

```js
let valorCompra = produtos.reduce((sum, item) => sum + item.preco, 0);
```

Seguindo esse caminho, também deixei a montagem da mensagem mais flexível usando `map` para listar cada produto:

```js
const listaTexto = produtos.map(item => `- ${item.nome}: R$${item.preco}`).join('\n');
```

Assim, o código ficou mais limpo, reutilizável e fácil de expandir para casos futuros.

## Status do Projeto
- [x] Exercício 1 finalizado
- [ ] Novos desafios em breve!

## Progresso & Próximos Passos
Pretendo praticar mais métodos de array, tratamento de erros e talvez criar uma pequena interface para o exercício.


