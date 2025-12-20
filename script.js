const botaoCalc = document.querySelector('#botao-calc');

botaoCalc.addEventListener('click', calculeOIMC);

function calculeOIMC() {
    let peso = document.querySelector('#peso-v').value.replace(',', '.');
    let altura = document.querySelector('#altura-v').value.replace(',', '.');

    const pesov = parseFloat(peso);
    const alturav = parseFloat(altura);

    const respostaIMC = document.getElementById('resp');

    if (isNaN(pesov) || isNaN(alturav) || alturav === 0) {
        respostaIMC.textContent = "Seu IMC é: Houve problemas com a digitação.";
        return;
    }

    const imc = (pesov / (alturav ** 2)).toFixed(2);
    respostaIMC.textContent = `Seu IMC é: ${imc.replace('.', ',')}`;
}
