//Primeiro método de inversão
// Crio uma função chamada inverterBatata que recebe uma batata para ser invertida
const areaDisplay = document.getElementById("display");
document.getElementById("enviar").onclick = function inverterBatata() {
  // Crio uma váriável para guardar cada letra da nossa batata invertida
  let batataReversa = "";
  const batata = document.getElementById("input-string").value;
  //Faço ima iteração em cada letra de nossa batata, começando da última letra e terminando na primeira
  for (let i = batata.length - 1; i >= 0; i--) {
    //A cada iteração concateno a letra iterada a váriavel batataReversa
    batataReversa += batata[i];
  }
  areaDisplay.innerHTML = batataReversa
};

//Segunda resolução

// Crio uma função chamada inverterBatata2 que recebe uma batata para ser invertida
function inverterBatata2(batata) {
  /*
    Utilizo métodos encadeados para inverter a string:
    1. split(""): divide a string em um array de caracteres
    2. reverse(): inverte a ordem dos elementos no array
    3. join(""): junta os caracteres novamente em uma string
  */
  const batataInvertida = batata.split("").reverse().join("");

  // Retorno a batata invertida
  return batataInvertida;
}

console.log(inverterBatata("batatosa"));
console.log(inverterBatata2("papas fritas"));
