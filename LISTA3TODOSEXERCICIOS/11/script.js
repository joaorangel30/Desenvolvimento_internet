 function calcularReajuste() {
      let salario = Number(document.querySelector("#salario").value);
      let resultado = document.querySelector("#resultado");

      let salarioComAumento = salario * 1.15;
      let salarioFinal = salarioComAumento * 0.92;

      resultado.innerHTML = `
        Salário inicial: R$ ${salario.toFixed(2)}<br>
        Salário com aumento (15%): R$ ${salarioComAumento.toFixed(2)}<br>
        Salário final com desconto de 8%: R$ ${salarioFinal.toFixed(2)}
      `;
    }