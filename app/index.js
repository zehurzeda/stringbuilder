function getQtdCaracteres() {
  var text = $('#entrada').val();
  var linhas = text.split('\n');
  var maiorQtdCaracteres = 0;

  linhas.forEach(function(linha) {
    if(linha.length > maiorQtdCaracteres){
      maiorQtdCaracteres = linha.length;
    }
  })

  return maiorQtdCaracteres;
}

function justificaTexto(texto){
  var textoFormatado = '';
  var linhas = texto.split('\n');
  var qtdDeCaracteres = getQtdCaracteres();
  var textoInicial = 'sql.append("';
  var textoFinal = '");'
  linhas.forEach(function(linha) {
    var qtdEspacos = qtdDeCaracteres - linha.length;
    if(qtdEspacos > 0){
      for(var i = linha.length; i < qtdDeCaracteres; i++){
        linha = linha.concat(' ');
      }
    }
    textoFormatado += textoInicial.concat(linha).concat(textoFinal).concat('\n');
  })

  return textoFormatado;
}

function clickBuild(){
  var textoFormatado = justificaTexto($('#entrada').val());
  $('#saida').val(textoFormatado);
}

$(document).ready(function() {
  $('#btnBuild').on('click', clickBuild);
})
