function getQtdCaracteres() {
  var text = $('#entrada').val();
  var linhas = text.replace(/\t/g, ' ').split('\n');
  var maiorQtdCaracteres = 0;

  linhas.forEach(function(linha) {
    linha = linha.rtrim();
    for(var i = 0; i < linha.length; i++){
      if(linha.charAt(i) === '\t'){

      }
    }
    if(linha.length > maiorQtdCaracteres){
      maiorQtdCaracteres = linha.length;
    }
  });
  return maiorQtdCaracteres;
}

String.prototype.rtrim = function () {
		return this.replace(/\s+$/,'');
}


var getTextoInicial = (nomeVariavel) => {
  return `final StringBuilder ${nomeVariavel} = new StringBuilder();\n\n`
}

var getNomeVariavel = (text = 'sql') => {
  return text;
};

function justificaTexto(texto){
  var linhas = texto.replace(/\t/g, ' ').split('\n');
  var nomeVariavel = getNomeVariavel($('#nomeVariavel').val() == '' ? undefined : $('#nomeVariavel').val());
  var qtdDeCaracteres = getQtdCaracteres();
  console.log(qtdDeCaracteres);
  var textoFinal = '");'
  var textoFormatado = '';
  var textoInicial = nomeVariavel.concat('.append("');

  linhas.forEach(function(linha) {
    linha = linha.rtrim();
    for(var i = linha.length; i < qtdDeCaracteres; i++){
      linha = linha.concat(' ');
    }
    textoFormatado += textoInicial.concat(linha).concat(textoFinal).concat('\n');
  });
  return textoFormatado;
}

function clickBuild(){
  var textoFormatado = justificaTexto($('#entrada').val());
  $('#saida').val(textoFormatado);
}

$(document).ready(function() {
  $('#btnBuild').on('click', clickBuild);
})
