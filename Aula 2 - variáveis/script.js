// tipos primitivos

// boolean
var vOuF = false;
console.log(typeof vOuF);

// number
var numeroqualquer = 1;
console.log(typeof numeroqualquer);

// string
var nome = "diana";
console.log(typeof nome);

// function
var funcao = function () {};
console.log(typeof funcao);

// como declarar
var variavel = "diana";
variavel = "martine";
console.log(variavel);

let variavel2 = "diana";
variavel2 = "martine";
console.log(variavel2);

const constante = "diana";
constante = "martine";
console.log(constante);

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
  let escopoLocalInterno = "local";
  console.log(escopoLocalInterno);
}

escopoLocal();

// atribuição
var atribuição = "diana";

// comparacao
var comparacao = "0" == 0;
console.log(comparacao);

// comparacao identica
var comparacaoIdentica = "0" === 0;
console.log(comparacaoIdentica);

// adicao
var adicao = 1 + 1;
console.log(adicao);

// subtracao
var subtracao = 2 - 1;
console.log(subtracao);

// multiplicacao
var multiplicacao = 2 * 3;
console.log(multiplicacao);

// divisão real
var divisãoReal = 6 / 2;
console.log(divisãoReal);

// divisão inteira
var divisaãoInteira = 5 & 2;
console.log(divisaãoInteira);

// potenciação
var potenciação = 2 ** 10;
console.log(potenciação);

// maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// menor
var menorQue = 5 < 2;
console.log(menorQue);

// maior ou Igual a
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// menor ou Igual
var menorOuIgual = 5 <= 2;
console.log(maiorOuIgual);

var e = true && false;
console.log(e);

var nao = !true;
console.log(nao);
