function calcularValor(){
    let peso = Number(document.querySelector("#pesoPrato").value);
    let resultado = document.querySelector("#resultado");

    let precoPorKg = 12.00;
    let valorTotal = peso * precoPorKg;

    resultado.textContent = `O valor total é R$ ${valorTotal.toFixed(2)}`;
}