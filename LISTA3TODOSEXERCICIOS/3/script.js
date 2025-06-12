function calcularVendas() {
    let pao = Number(document.querySelector("#pao").value);
    let broa = Number(document.querySelector("#broa").value);
    let resultado = document.querySelector("#resultado");

    let totalPao = pao * 0.12;
    let totalBroa = broa * 1.50;
    let total = totalPao + totalBroa;
    let poupanca = total * 0.10;

    resultado.textContent = `Total de vendas: R$ ${total.toFixed(2)}\n` +
                             `Poupança: R$ ${poupanca.toFixed(2)}`;

}