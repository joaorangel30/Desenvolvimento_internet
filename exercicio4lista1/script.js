let inputNum1 = document.querySelector("#inputNum1");
let inputNum2 = document.querySelector("#inputNum2");
let inputNum3 = document.querySelector("#inputNum3");
let h3resultado = document.querySelector("#h3resultado");
let btCalcular = document.querySelector("#btCalcular");

function calcularMedias() {
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let num3 = Number(inputNum3.value);

    let mediaAritmetica = (num1 + num2 + num3) / 3;

    let mediaPonderada = ((num1 * 3) + (num2 * 2) + (num3 * 5)) / (3 + 2 + 5);

    let somaMedias = mediaAritmetica + mediaPonderada;

    let mediaMedias = somaMedias / 2;

    h3resultado.innerHTML = "Media Aritmetica: " + mediaAritmetica.toFixed(2) + "<br>" + 
                            "Media Ponderada: " + mediaPonderada.toFixed(2) + "<br>" +
                            "Soma das Medias: " + somaMedias.toFixed(2) + "<br>" +
                            "Media das Medias: " + mediaMedias.toFixed(2);
}

btCalcular.addEventListener("click", calcularMedias);