function calcularFerraduras() {
    let cavalo = Number(document.querySelector("#cavalo").value);
    let resultado = document.querySelector("#resultado");
    
    if (cavalo <= 0) {
        resultado.innerHTML = "Número de cavalos inválido.";
    }
    else {
        let ferraduras = cavalo * 4;
        resultado.innerHTML = `Você precisará de ${ferraduras} ferraduras para ${cavalo} cavalo(s).`;
    }
}