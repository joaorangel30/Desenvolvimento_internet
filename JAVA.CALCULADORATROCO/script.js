document.getElementById('trocoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const valorCompra = parseFloat(document.getElementById('valorCompra').value);
    const valorPago = parseFloat(document.getElementById('valorPago').value);
    
    const troco = valorPago - valorCompra;
    
    const resultado = document.getElementById('resultado');

    if (troco < 0) {
        resultado.innerHTML = "Valor pago é insuficiente!";
        resultado.style.color = 'red';
    } else if (troco === 0) {
        resultado.innerHTML = "Não há troco necessário";
        resultado.style.color = 'green';
    } else {
        resultado.innerHTML = `Troco: R$ ${troco.toFixed(2)}`;
        resultado.style.color = 'black';
    }
});