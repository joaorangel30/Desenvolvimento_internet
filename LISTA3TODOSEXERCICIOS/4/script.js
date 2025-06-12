function calcularDias() {
    let idade = Number(document.querySelector("#idade").value);
    let nome = document.querySelector("#nome").value;
    let resultado = document.querySelector("#resultado");

    let dias = idade * 365;
    resultado.innerHTML = `Olá, ${nome}! Você já viveu aproximadamente ${dias} dias.`;
}