    function calcularVenda() {
      let p = Number(document.querySelector("#quantP").value);
      let m = Number(document.querySelector("#quantM").value);
      let g = Number(document.querySelector("#quantG").value);
      let resultado = document.querySelector("#resultado");

      let total = (p * 10) + (m * 12) + (g * 15);

      resultado.innerHTML = `Valor total arrecadado: R$ ${total.toFixed(2)}`;
    }