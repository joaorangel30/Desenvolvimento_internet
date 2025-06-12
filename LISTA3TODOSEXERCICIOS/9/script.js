    function calcularDistancia() {
      let x1 = Number(document.querySelector("#x1").value);
      let y1 = Number(document.querySelector("#y1").value);
      let x2 = Number(document.querySelector("#x2").value);
      let y2 = Number(document.querySelector("#y2").value);
      let resultado = document.querySelector("#resultado");

      let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

      resultado.innerHTML = `A distância entre os pontos é: ${distancia.toFixed(2)}`;
    }