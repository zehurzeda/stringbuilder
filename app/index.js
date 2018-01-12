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

var getTextoInicial = (nomeVariavel) => {
  return `final StringBuilder ${nomeVariavel} = new StringBuilder();\n\n`
}

var getNomeVariavel = (text = 'sql') => {
  return text;
};

function justificaTexto(texto){
  var linhas = texto.split('\n');
  var nomeVariavel = getNomeVariavel($('#nomeVariavel').val() == '' ? undefined : $('#nomeVariavel').val());
  var qtdDeCaracteres = getQtdCaracteres();
  var textoFinal = '");'
  var textoFormatado = getTextoInicial(nomeVariavel);
  var textoInicial = nomeVariavel.concat('.append("');

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
