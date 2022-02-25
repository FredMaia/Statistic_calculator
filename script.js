var amostragem = [];
var numberTypedtxt;
var numberTyped;
var res = document.getElementById("res");
var soma = 0;
var mediaAritmética;
var varianciaPopulacional = 0;
var varianciaAmostral = 0;
var somaDosQuadrados = 0;
var desvioPadrao;
var coeficienteDeVariacao = 0;
var amplitude = 0;
var mediana = 0;
var maiorNumero;
var maiorNumero;

function adicionar() {
  numberTypedtxt = document.getElementById("numberTypedtxt");
  numberTyped = Number(numberTypedtxt.value);

  amostragem.push(numberTyped);
  res.innerHTML += `O número de ${numberTyped} foi adicionado <br>`;
  document.getElementById("numberTypedtxt").value = "";
  document.getElementById("numberTypedtxt").focus();
}

function calcular() {
  maiorNumero = Math.max(...amostragem)
  menorNumero = Math.min(...amostragem)

  for (var i = 0; i < amostragem.length; i++) {
    soma += amostragem[i];
  }

  mediaAritmetica = soma / amostragem.length;

  for (var i = 0; i < amostragem.length; i++) {
    somaDosQuadrados += (mediaAritmetica - amostragem[i]) ** 2;
  }

  varianciaAmostral = somaDosQuadrados / (amostragem.length - 1);
  varianciaPopulacional = somaDosQuadrados / amostragem.length;

  desvioPadrao = Math.sqrt(varianciaPopulacional);

  coeficienteDeVariacao = (desvioPadrao * 100) / mediaAritmetica;

  amplitude = Math.max(...amostragem) - Math.min(...amostragem);

  var numeroInicialDeElementos = amostragem.length
  var n = 0
  // while (amostragem.length >= 2 &&  numeroInicialDeElementos % 2 !== 0) {
  //   for (var i = 0; i < amostragem.length; i++) {
  //     if (amostragem[i] === Math.max(...amostragem) && n % 2 == 0) {
  //       amostragem.splice(i, 1);
  //     } 
      
  //     if (amostragem[i] === Math.min(...amostragem) && n % 2 != 0) {
  //       amostragem.splice(i, 1);
  //     }
  //     n++
  //   }
  // }
  // console.log(amostragem)
  // if (amostragem.length == 2) {
  //   mediana = (amostragem[0] + amostragem[1]) / 2
  // } else {
  //     mediana = amostragem[0]
  // }

  res.innerHTML = `Média aritmética: ${mediaAritmetica.toFixed(4)} <br>
                    Variância amostral: ${varianciaAmostral.toFixed(4)} <br>
                    Variância populacional: ${varianciaPopulacional.toFixed(
                      4
                    )} <br>
                    Desvio Padrão (Variância populacional): ${desvioPadrao.toFixed(
                      4
                    )} <br>
                    Coeficiente de variação: ${coeficienteDeVariacao.toFixed(
                      2
                    )}% <br>
                    Amplitude: ${amplitude.toFixed(2)}`;
}

function limpar() {
  document.getElementById("numberTypedtxt").value = "";
  res.innerHTML = "";
  amostragem = [];
}
