    function converterTempo() {
      let totalDias = Number(document.querySelector("#diasSemAcidente").value);
      let resultado = document.querySelector("#resultado");

      let anos = Math.floor(totalDias / 360);
      let meses = Math.floor((totalDias % 360) / 30);
      let dias = totalDias % 30;

      resultado.innerHTML = `Tempo sem acidentes: ${anos} ano(s), ${meses} mês(es) e ${dias} dia(s).`;
    }