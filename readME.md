# 📒 Incantare Trainee — Lista de Exercícios

Bem-vindo à minha lista de exercícios do processo trainee na **Incantare**!

## Sobre o Projeto
o Projeto inicialmente consiste em uma trilha Dev, inicio a jornada de estudos e práticas em JavaScript, com foco em lógica de programação, manipulação de dados e resolução de problemas.



## Exercício 1 -- 🛒 Batata no mercado



### O que aprendi/pratiquei
- **Manipulação de arrays de objetos** utilizando métodos como `map` e `reduce`
- **Operadores condicionais** para lógica de negócios simples
- **Interpolação de strings** com template literals
- Organização do código para favorecer clareza e futuras manutenções

### Funcionalidades 
- Recebe o nome do cliente
- Lista produtos de forma dinâmica
- Soma o valor da compra
- Aplica desconto de 10% para compras acima de R$100
- Exibe mensagem final formatada, mostrando tanto o valor sem desconto quanto com desconto (quando aplicável)

### Dificuldades e Atalhos
Durante o exercício, comecei somando valores usando for em uma array bidimensional. Meu primeiro impulso foi algo assim:

```js
let valorCompra = 0;
for (let i = 0; i < produtos.length; i++) {
  valorCompra += produtos[i][1]
}
```
Mas pensei em outra forma de chegar ao objetivo, mais simples e organizada, substituindo a array bidimensionai, por uma array de objetos, para cada produto e valor do array. Assim ultilizando o método `.reduce()`, consegui simplificar bastante o cálculo:

```js
let valorCompra = produtos.reduce((sum, item) => sum + item.preco, 0);
```

Seguindo esse caminho, também deixei a montagem da mensagem mais flexível usando `map` para listar cada produto:

```js
const listaTexto = produtos.map(item => `- ${item.nome}: R$${item.preco}`).join('\n');
```

Assim, o código ficou mais limpo, reutilizável e fácil de expandir.



## 📝 Exercício 2 -- 🥔 Batata Reversa


### O que aprendi/pratiquei

  - **Manipulação de `Strings`** em JavaScript.
  - **Laços de Repetição** (`for`) para iterar sobre caracteres e construir a *string* invertida.
  - **Indexação de strings** (`string[i]`) para acessar cada caractere individualmente.
  - **Concatenação de strings** (`+=`) para juntar os caracteres na ordem reversa.
  - **Encadeamento de Métodos** (`split`, `reverse`, `join`) como uma alternativa mais concisa e idiomática para manipular *strings* como se fossem *arrays*.
  - **Lógica de Trás para Frente:** Desenvolver um algoritmo que começa do último índice e termina no primeiro.


### Funcionalidades

  * Recebe uma *string* de entrada.
  * Inverte a ordem dos caracteres na *string*.
  * Oferece duas implementações:
    1.  Usando laço `for` (para prática de lógica e indexação).
    2.  Usando métodos de array encadeados (solução mais eficiente e idiomática em JS).
  * Exibe o resultado invertido.



```javascript
// A essência do primeiro método (inverterBatata):
let batataReversa = "";
// Começa do último índice (tamanho - 1) e vai até 0
for (let i = batata.length - 1; i >= 0; i--) {
  batataReversa += batata[i]; // Concatena o caractere atual à nova string
}
```

Tive essa primeira idéia que é uma solução simples que itera sobre cada indice da string iniciando da ultima e finalizando com a primeira.

Depois que finalizei o código tie outra ideia para inversão das letras, chamando vários métodos, que depois descobri que tem o nome de encadeamento rs

```javascript

const batataInvertida = batata.split("").reverse().join("");
```

Seguir esse caminho me permitiu ter duas soluções: uma que mostra o uso do loop e da lógica (Método 1) e outra que demonstra a utilização dos recursos nativos do JavaScript (Método 2).




## Status do Projeto

  * [x] Exercício 1 finalizado (Batata no mercado)
  * [x] Exercício 2 finalizado (Batata Reversa)
  * [ ] Novos desafios em breve\!





