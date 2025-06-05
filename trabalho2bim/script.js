function verificarTriangulo() {
    let x = Number(document.querySelector("#ladoX").value);
    let y = Number(document.querySelector("#ladoY").value);
    let z = Number(document.querySelector("#ladoZ").value);
    let resultado = document.querySelector("#resultado1");

    if (x < y + z && y < x + z && z < x + y) {
        if (x === y && y === z) {
            resultado.innerHTML = "O triângulo é: equilátero.";
        } else if (x === y || y === z || x === z) {
            resultado.innerHTML = "O triângulo é: isósceles.";
        } else {
            resultado.innerHTML = "O triângulo é: escaleno.";
        }
    } else {
        resultado.textContent = "Os valores informados não formam um triângulo.";
    }
}

function calcularIMC() {
    let peso = Number(document.querySelector("#peso").value);
    let altura = Number(document.querySelector("#altura").value) / 100;
    let resultado = document.querySelector("#resultado2");

    if (peso <= 0 || altura <= 0) {
        resultado.textContent = "Peso e altura devem ser maiores que zero.";
        return;
    }

    let imc = peso / (altura * altura);
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}.`;

    if (imc < 18.5) {
        resultado.textContent += " Você está abaixo do peso.";
    } else if (imc < 24.9) {
        resultado.textContent += " Seu peso está normal.";
    } else if (imc < 29.9) {
        resultado.textContent += " Você está com sobrepeso.";
    } else {
        resultado.textContent += " Você está obeso.";
    }
}

function calcularJuros() {
    let valorInicial = Number(document.querySelector("#valorInicial").value);
    let taxaJuros = Number(document.querySelector("#taxaJuros").value) / 100;
    let tempo = Number(document.querySelector("#tempo").value);
    let resultado = document.querySelector("#resultado3");

    if (valorInicial <= 0 || taxaJuros <= 0 || tempo <= 0) {
        resultado.textContent = "Todos os valores devem ser maiores que zero.";
        return;
    }

    let montante = valorInicial * Math.pow(1 + taxaJuros, tempo);
    resultado.textContent = `O montante após ${tempo} meses será de R$ ${montante.toFixed(2)}.`;
}

function calcularSalario() {
  let salario = Number(document.querySelector("#salarioAtual").value);
  let cargo = document.querySelector("#codigoCargo").value;
  let resultado = document.querySelector("#resultado4");

  let percentual = 0;

  if (cargo === "101") {
    percentual = 0.10;
  } else if (cargo === "102") {
    percentual = 0.20;
  } else if (cargo === "103") {
    percentual = 0.30;
  } else {
    percentual = 0.40;
  }

  let aumento = salario * percentual;
  let novoSalario = salario + aumento;

  resultado.innerHTML = `
    Salário antigo: R$ ${salario.toFixed(2)}<br>
    Novo salário: R$ ${novoSalario.toFixed(2)}<br>
    Diferença: R$ ${aumento.toFixed(2)}
  `;
}

function calcularCredito() {
      let saldo = Number(document.querySelector("#saldoMedio").value);
      let resultado = document.querySelector("#resultado5");

      let percentual = 0;

      if (saldo >= 201 && saldo <= 400) {
        percentual = 0.20;
      } else if (saldo >= 401 && saldo <= 600) {
        percentual = 0.30;
      } else if (saldo > 600) {
        percentual = 0.40;
      }

      let credito = saldo * percentual;

      if (percentual === 0) {
        resultado.textContent = `Saldo médio: R$ ${saldo.toFixed(2)} - Nenhum crédito disponível.`;
      } else {
        resultado.innerHTML = `
          Saldo médio: R$ ${saldo.toFixed(2)}<br>
          Crédito disponível: R$ ${credito.toFixed(2)}
        `;
      }
    }
    function calcularPedido() {
      let preco = Number(document.querySelector("#precoItem").value);
      let quantidade = Number(document.querySelector("#quantidade").value);
      let resultado = document.querySelector("#resultado6");

      if (isNaN(preco) || isNaN(quantidade) || quantidade <= 0) {
        resultado.innerHTML = "Por favor, informe uma quantidade válida.";
        return;
      }

      let total = preco * quantidade;

      resultado.innerHTML = `Valor total a pagar: R$ ${total.toFixed(2)}`;
    }
     function calcularPagamento() {
      let preco = Number(document.querySelector("#precoEtiqueta").value);
      let condicao = document.querySelector("#codigoPagamento").value;
      let resultado = document.querySelector("#resultado7");

      let valorFinal = 0;

      if (condicao === "a") {
        valorFinal = preco * 0.90;
      } else if (condicao === "b") {
        valorFinal = preco * 0.85;
      } else if (condicao === "c") {
        valorFinal = preco;
      } else if (condicao === "d") {
        valorFinal = preco * 1.10;
      }

      resultado.innerHTML = `Valor a pagar: R$ ${valorFinal.toFixed(2)}`;
    }

    function calcularSalarioProfessor() {
      let nivel = document.querySelector("#nivelProfessor").value;
      let aulas = Number(document.querySelector("#qtdAulas").value);
      let resultado = document.querySelector("#resultado8");

      let valorHora = 0;

      if (nivel === "1") {
        valorHora = 12.00;
      } else if (nivel === "2") {
        valorHora = 17.00;
      } else if (nivel === "3") {
        valorHora = 25.00;
      }

      let salario = valorHora * aulas * 4.5;

      resultado.innerHTML = `Salário mensal: R$ ${salario.toFixed(2)}`;
    }