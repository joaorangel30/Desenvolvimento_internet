function calcularLitros() {
    let gasolina = Number(document.querySelector("#gasolina").value);
    let valorPago = Number(document.querySelector("#valorPago").value);
    let resultado = document.querySelector("#resultado");

    if (gasolina > 0) {
        let litros = valorPago / gasolina;
        resultado.textContent = `Você comprou ${litros.toFixed(2)} litros de gasolina.`;

    } else {
        resultado.textContent = "Por favor, insira um valor válido para o preço da gasolina.";
    }



}