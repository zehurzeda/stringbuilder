function getQtdCaracteres(linhas) {
  var maiorQtdCaracteres = 0;

  linhas.forEach(function(linha) {
    var tamanhoLinha = linha.length;
    linha = linha.rtrim();
    for(var i = 0; i < linha.length; i++){
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
  var qtdEspacos = 0;
  indexInicial += 1;
  if(indexInicial%8 == 0){
    qtdEspacos =  8;
  }else {
    for(var i = indexInicial; i< (indexInicial + 8); i++){
      qtdEspacos ++;
      if(i%8 == 0){
        break;
      }
    }
  }
  return qtdEspacos;
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

function dividirTextoEmLinhas(texto){
  return texto.split('\n');
}

function retirarTabs(linhas, qtdDeCaracteres){
  var linhasFormatadas = [];
  linhas.forEach(function(linha){
    linha = linha.rtrim();
    for(var i = 0; i < qtdDeCaracteres; i++){
      if(linha.charAt(i) === '\t'){
        linha = linha.substring(0, i) + removeTabs(i) + linha.substring(i+1);
      }
    }
    linhasFormatadas.push(linha); 
  });
  return linhasFormatadas;
}

function justificaTexto(linhas, qtdDeCaracteres){
  var nomeVariavel = getNomeVariavel($('#nomeVariavel').val() == '' ? undefined : $('#nomeVariavel').val());
  var textoFinal = '");'
  var textoFormatado = $('#isImprimirVariavel').is(":checked") ? getTextoInicial(nomeVariavel) : '';
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
  var linhas = dividirTextoEmLinhas($('#entrada').val())
  var qtdDeCaracteres = getQtdCaracteres(linhas);
  var linhasFormatadas = retirarTabs(linhas, qtdDeCaracteres);
  qtdDeCaracteres = getQtdCaracteres(linhasFormatadas);
  var textoFormatado = justificaTexto(linhasFormatadas, qtdDeCaracteres);
  $('#saida').val(textoFormatado);
}

$(document).ready(function() {
  $('#btnBuild').on('click', clickBuild);
})
