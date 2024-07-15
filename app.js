var incluirTexto = document.querySelector ("#textoInicial");
var textoDecodificado = document.querySelector ("#textoFinal");

function Decodificar(){
    var texto = incluirTexto.value;

    var resultDecod = texto.replace (/vaca/g, "PRÊMIO");

    document.getElementById('textoFinal').innerHTML = resultDecod 
}

function Copiar(){
    var copText = document.getElementById('#textoInicial');

    copText.select();
    document.execCommand('copy');
}