 function calcularDiasPassados() {
      let dia = Number(document.querySelector("#dia").value);
      let mes = Number(document.querySelector("#mes").value);
      let resultado = document.querySelector("#resultado");

      if (dia >= 1 && dia <= 30 && mes >= 1 && mes <= 12) {
        let diasTotais = (mes - 1) * 30 + dia;
        resultado.innerHTML = `Já se passaram ${diasTotais} dias desde o início do ano.`;
      } else {
        resultado.innerHTML = "Digite valores válidos para dia (1 a 30) e mês (1 a 12).";
      }
    }