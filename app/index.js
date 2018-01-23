function getQtdCaracteres() {
  var text = $('#entrada').val();
  var linhas = text.split('\n');
  var maiorQtdCaracteres = 0;

  linhas.forEach(function(linha) {
    var tamanhoLinha = 0;
    linha = linha.rtrim();
    for(var i = 0; i < linha.length; i++){
      tamanhoLinha ++;
      if(linha.charAt(i) === '\t'){
        tamanhoLinha = tamanhoLinha + getQtdCaracteresTab(i)
      }
    }
    if(tamanhoLinha > maiorQtdCaracteres){
      maiorQtdCaracteres = tamanhoLinha;
    }
  });
  return maiorQtdCaracteres;
}

String.prototype.rtrim = function () {
		return this.replace(/\s+$/,'');
}

function getQtdCaracteresTab(indexInicial) {
  var texto = '';
  indexInicial += 1;
  if(indexInicial%8 == 0){
    texto =  '        ';
  }else {
    for(var i = indexInicial; i< (indexInicial + 8); i++){
      if(i%8 == 0){
        break;
      }
      texto += ' ';
    }
  }

  return texto.length;
}

function removeTabs(indexInicial) {
  var texto = '';
  indexInicial += 1;
  if(indexInicial%8 == 0){
    return '        ';
  }else {
    for(var i = indexInicial; i< (indexInicial + 8); i++){
      texto += ' ';
      if(i%8 == 0){
        break;
      }
    }
  }

  return texto
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
  console.log(qtdDeCaracteres);
  var textoFinal = '");'
  var textoFormatado = '';
  var textoInicial = nomeVariavel.concat('.append("');

  linhas.forEach(function(linha) {
    linha = linha.rtrim();
    for(var i = 0; i < qtdDeCaracteres; i++){
      if(linha.charAt(i) === '\t'){
        linha = linha.substring(0, i) + removeTabs(i) + linha.substring(i+1); 
      }
    }
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
