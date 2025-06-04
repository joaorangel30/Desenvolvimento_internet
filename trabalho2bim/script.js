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