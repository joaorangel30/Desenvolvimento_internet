document.getElementById('somaForm').addEventListener('submit', function(e) {
    e.preventDefault();
    

    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    const soma = number1 + number2;
    
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Resultado: ${soma}`;
});
