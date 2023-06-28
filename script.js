var botaoCalc = document.querySelector('button#botao-calc');

// Eventos
botaoCalc.addEventListener('click', calculeOIMC);

// Funções
function calculeOIMC(){
    let peso = document.querySelector('input#peso-v').value;
    let altura = document.querySelector('input#altura-v').value;

    peso = peso.replace(',', '.');
    altura = altura.replace(',', '.');

    pesov = Number.parseFloat(peso).toFixed(2);
    alturav = Number.parseFloat(altura).toFixed(2);
    imc = (pesov/(alturav**2)).toFixed(2);

    var respostaIMC = document.getElementById('resp');
    if(pesov == 'NaN' || alturav == 'NaN' || imc == 'NaN'){
        respostaIMC.innerText = `Seu IMC é: Houve problemas com a digitação.`;
    }else{
        respostaIMC.innerText = `Seu IMC é: ${imc.replace('.', ',')}`;
    }
}
