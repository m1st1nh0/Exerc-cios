const areaDisplay = document.getElementById("display");

document.getElementById("enviar").onclick = function batataMultiplicadora() {
  let menssagem = [];
  const batata = document.getElementById("input-string").value;
  if (Number(batata != isNaN && batata > 0 && batata < 10)) {
    document.getElementById("input-string").value = "";
    for (let i = 1; i < 11; i++) {
      menssagem.push(`${batata} X ${i} = ${batata * i}`);
    }
    areaDisplay.innerHTML = menssagem.join("<br>");
    return;
  }
  areaDisplay.innerHTML = "digite um número<br>até 10";
};
