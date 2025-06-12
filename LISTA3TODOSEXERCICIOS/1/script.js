function calcularArea() {
    let comprimento = Number(document.querySelector("#comprimento").value);
    let largura = Number(document.querySelector("#largura").value);
    let resultado = document.querySelector("#resultado");

    if (comprimento <= 0 || largura <= 0) {
        resultado.textContent = "Por favor, insira valores válidos para comprimento e largura.";
    }
    else {
        let area = comprimento * largura;
        resultado.textContent = `A área do retângulo é: ${area} unidades quadradas.`;
    }
}
