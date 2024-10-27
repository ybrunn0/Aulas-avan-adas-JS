// Exercício JavaScript

// 1)Escreva um programa que peça dois números e exiba a soma deles. 

var primeiro = parseInt(prompt("Digite o primeiro número"));
var segundo = parseInt(prompt("Digite o segundo número"));

soma = primeiro + segundo

console.log("A soma é: " + soma)
document.write("1) Resposta" + "A soma é: " + soma + "<br>")
alert("A soma é: " + soma)

// 2)Escreva um programa que peça dois números e exiba a subtração do primeiro pelo segundo.

var primeiro = parseInt(prompt("Digite o primeiro número"));
var segundo = parseInt(prompt("Digite o segundo número"));

subtração = primeiro - segundo

console.log("O resultado da subtração é: " + subtração)
document.write("2) Resposta" + "O resultado da subtração é: " + subtração + "<br>")
alert("O resultado da subtração é: " + subtração)

// 3)Escreva um programa que peça dois números e exiba a multiplicação deles.

var primeiro = parseInt(prompt("Digite o primeiro número"));
var segundo = parseInt(prompt("Digite o segundo número"));

multiplicacao = primeiro * segundo

console.log("O resultado da multiplicação é: " + multiplicacao)
document.write("3) Resposta" + "O resultado da multiplicação é: " + multiplicacao + "<br>")
alert("O resultado da multiplicação é: " + multiplicacao)

// 4)Escreva um programa que peça dois números e exiba a divisão do primeiro pelo segundo.

var primeiro = parseInt(prompt("Digite o primeiro número"));
var segundo = parseInt(prompt("Digite o segundo número"));

divisao = primeiro / segundo

console.log("O resultado da divisão é: " + divisao)
document.write("4) Resposta" + "O resultado da divisão é: " + divisao + "<br>")
alert("O resultado da divisão é: " + divisao)

// 5)Escreva um programa que peça dois números e exiba o resto da divisão do primeiro pelo segundo.

var primeiro = parseInt(prompt("Digite o primeiro número: "));
var segundo = parseInt(prompt("Digite o segundo número: "));

modulo = primeiro % segundo

console.log("O resto da divisão é: " + modulo)
document.write("5) Resposta" + "O resto da divisão é: " + modulo + "<br>")
alert("O resto da divisão é: " + modulo)

// 6)Escreva um programa que incremente o valor de uma variável em 1 e exiba o resultado.

var numero = parseInt(prompt("Digite um número: "))

numero += 1;

console.log("O número incrementado é: " + numero);
document.write("6) Resposta" + "O número incrementado é: " + numero + "<br>")
alert("O número incrementado é: " + numero)

// 7)Escreva um programa que decremente o valor de uma variável em 1 e exiba o resultado.
var numero = parseInt(prompt("Digite um número: "))

numero -= 1;

console.log("O número decrementado é: " + numero);
document.write("O número decrementado é: " + numero + "<br>")
alert("O número decrementado é: " + numero)

// 8)Atribua o valor de uma variável a outra.

var numero = parseInt(prompt("Digite um número: "))
var novoNumero = numero;

console.log(novoNumero);
document.write(novoNumero + "<br>")
alert(novoNumero)

// 9)Some 10 a uma variável existente usando o operador +=.
let valor = parseInt(prompt("Digit um número: "))
valor += 10;

console.log("O valor incrementado da váriavel com 10 é: " + valor);
document.write("O valor incrementado da váriavel com 10 é: " + valor + "<br>")
alert("O valor incrementado da váriavel com 10 é: " + valor)

// 10)Subtraia 5 de uma variável existente usando o operador -=.

let velorDecrement = parseInt(prompt("Digit um número: "))
valor -= 5;

console.log("O valor decrementado da váriavel com 10 é: " + velorDecrement);
document.write("O valor decrementado da váriavel com 10 é: " + velorDecrement + "<br>")
alert("O valor decrementado da váriavel com 10 é: " + velorDecrement)

// 11)Multiplique o valor de uma variável por 4 usando o operador *=.

let increment = parseInt(prompt("Digit um número: "))
valor -= 5;

console.log("O valor é: " + increment);
document.write("O valor é: " + increment + "<br>")
alert("O valor é: " + increment)

// 12)Divida o valor de uma variável por 2 usando o operador /=.

let primeiroNumber = parseInt(prompt("Digit o primeiro: "))
primeiroNumber /= 2;

console.log("O valor da divisão por '2' é: " + primeiroNumber);
document.write("O valor da divisão por '2' é: " + primeiroNumber + "<br>")
alert("O valor da divisão por '2' é: " + primeiroNumber)

// 13)Obtenha o resto da divisão de uma variável por 3 usando o operador %=.

let segundoNumber = parseInt(prompt("Digit o primeiro: "))
segundoNumber %= 3;

console.log("O valor do resto da divisão por 3 é: " + segundoNumber);
document.write("O valor do resto da divisão por 3 é: " + segundoNumber + "<br>")
alert("O valor do resto da divisão por 3 é: " + segundoNumber)

// 14)Escreva um programa que verifique se um número é positivo ou negativo.

let positivoOuNegativo = parseInt(prompt("Digit um número: "))
segundoNumber %= 3;

console.log("O valor do resto da divisão por 3 é: " + segundoNumber);
document.write("O valor do resto da divisão por 3 é: " + segundoNumber + "<br>")
alert("O valor do resto da divisão por 3 é: " + segundoNumber)

// 15)Escreva um programa que verifique se um número é par ou ímpar.

let numero = Math.abs(parseFloat(prompt("Digite um número, positivo ou negativo: ")) || NaN)
const resultado = ["Negatrivo", "Positivo"][Math.sign(numero)]

console.log("O número é: " + resultado);
document.write("O número é: " + resultado);
alert("O número é: " + resultado);

// 16)Escreva um programa que verifique qual dos dois números é maior.

let numero = Math.abs(parseFloat(prompt("Digite um númeoro")))
let outroNumero = Math.abs(parseFloat(prompt("Digite um númeoro")))
resultado = numero > outroNumero ? "O número " + numero + " que o " + outroNumero : "O número " + outroNumero + " que o " + numero

console.log(resultado);
document.write(resultado);
alert(resultado);

// 17)Escreva um programa que verifique se uma pessoa tem mais de 18 anos.
let pessoa = prompt("Digite o ano de nascimento: ")

idade = (2024 - pessoa) > 18 ? "Vôce é tem mais de 18 anos" : "Vôce é tem menos de 18 anos"

console.log(idade);
document.write(idade);
alert(idade);

// 18)Escreva um programa que verifique se um número está no intervalo entre 0 e 100.
let numero = Math.abs(parseInt(prompt("Digite um número: ")))

saida = numero >= 0 && numero <= 100 ? "Esse número esta entre '0' e '100'" : "Esse número esta entre '0' e '100'"

console.log(saida);
document.write(saida);
alert(saida);

// 19)Escreva um programa que verifique se uma letra é uma vogal ou consoante.

let letra = prompt("Digite uma letra: ").toLowerCase();
let alfabeto = ["a", "e", "i", "o", "u"].includes(letra) ? "É uma vogal" : "É uma consoante";
console.log(alfabeto);
document.write(alfabeto);
alert(alfabeto);

// 20)Escreva um programa que verifique qual dos três números é o maior.

let a = parseFloat(prompt("Digite o primeiro número:"));
let b = parseFloat(prompt("Digite o segundo número:"));
let c = parseFloat(prompt("Digite o terceiro número:"));

let maior = Math.max(a, b, c);

console.log("O maior número é: " + maior);
document.write("O maior número é: " + maior);
alert("O maior número é: " + maior);

// 21)Escreva um programa que verifique se um ano é bissexto.

let ano = parseInt(prompt("Digite um ano:"));

let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ? "É um ano bissexto" : "Não é um ano bissexto";

console.log(bissexto);
document.write(bissexto);
alert(bissexto);


// 22)Escreva um programa que verifique se dois números são positivos.

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));

let algumNegativo = n1 < 0 || n2 < 0 ? "Pelo menos um dos números é negativo" : "Nenhum dos números é negativo";

console.log(algumNegativo);
document.write(algumNegativo);
alert(algumNegativo);


// 23)Escreva um programa que verifique se pelo menos um dos dois números é negativo.

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let algumNumNegativo = num1 < 0 || num2 < 0 ? "Pelo menos um dos números é negativo" : "Nenhum dos números é negativo";

console.log(algumNumNegativo);
document.write(algumNumNegativo);
alert(algumNumNegativo);


// 24)Escreva um programa que verifique se um número é par e positivo.

let numero = parseInt(prompt("Digite um número:"));

let parEPositivo = numero > 0 && numero % 2 === 0 ? "O número é par e positivo" : "O número não é par e positivo";

console.log(parEPositivo);
document.write(parEPositivo);
alert(parEPositivo);

// 25)Escreva um programa que verifique se um número não é múltiplo de 5.

let numero = parseInt(prompt("Digite um número:"));

let naoMultiploDe5 = numero % 5 !== 0 ? "O número não é múltiplo de 5" : "O número é múltiplo de 5";

console.log(naoMultiploDe5);
document.write(naoMultiploDe5);
alert(naoMultiploDe5);


// 26)Escreva um programa que verifique se um número está fora do intervalo de 1 a 10.

let numero = parseInt(prompt("Digite um número:"));

let foraDoIntervalo = numero < 1 || numero > 10 ? "O número está fora do intervalo de 1 a 10" : "O número está dentro do intervalo de 1 a 10";

console.log(foraDoIntervalo);
document.write(foraDoIntervalo);
alert(foraDoIntervalo);

// 27)Escreva um programa que verifique se dois números são pares.

let numb1 = parseInt(prompt("Digite o primeiro número:"));
let numb2 = parseInt(prompt("Digite o segundo número:"));

let ambosPares = numb1 % 2 === 0 && numb2 % 2 === 0 ? "Ambos os números são pares" : "Pelo menos um dos números não é par";

console.log(ambosPares);
document.write(ambosPares);
alert(ambosPares);

// 28)Escreva um programa que verifique se a soma de dois números é maior que 100.

let num5 = parseFloat(prompt("Digite o primeiro número:"));
let num6 = parseFloat(prompt("Digite o segundo número:"));

let somaMaiorQue100 = (num5 + num6) > 100 ? "A soma dos números é maior que 100" : "A soma dos números não é maior que 100";

console.log(somaMaiorQue100);
document.write(somaMaiorQue100);
alert(somaMaiorQue100);

// 29)Escreva um programa que verifique se dois números são iguais ou diferentes.

let num7 = parseFloat(prompt("Digite o primeiro número:"));
let num8 = parseFloat(prompt("Digite o segundo número:"));

let iguaisOuDiferentes = num7 === num8 ? "Os números são iguais" : "Os números são diferentes";

console.log(iguaisOuDiferentes);
document.write(iguaisOuDiferentes);
alert(iguaisOuDiferentes);

// 30)Escreva um programa que verifique se uma string não está vazia.

let texto = prompt("Digite um texto:");

let naoVazia = texto.length > 0 ? "A string não está vazia" : "A string está vazia";

console.log(naoVazia);
document.write(naoVazia);
alert(naoVazia);


