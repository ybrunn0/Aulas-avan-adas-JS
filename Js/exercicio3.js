EXERCICIO 43 QUESTOES BRUNO LUCAS

// Questão 1
let nota;
do {
  nota = parseFloat(prompt("Informe uma nota entre 0 e 10:"));
  if (nota < 0 || nota > 10) alert("Nota inválida.");
} while (nota < 0 || nota > 10);

// Questão 2
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Questão 3
let usuario, senha;
do {
  usuario = prompt("Informe o nome de usuário:");
  senha = prompt("Informe a senha:");
  if (usuario === senha) alert("Erro: a senha não pode ser igual ao nome de usuário.");
} while (usuario === senha);

// Questão 4
let nome, idade, salario, sexo, estadoCivil;
do {
  nome = prompt("Informe seu nome:");
} while (nome.length <= 3);

do {
  idade = parseInt(prompt("Informe sua idade:"));
} while (idade < 0 || idade > 150);

do {
  salario = parseFloat(prompt("Informe seu salário:"));
} while (salario <= 0);

do {
  sexo = prompt("Informe seu sexo (f/m):");
} while (sexo !== 'f' && sexo !== 'm');

do {
  estadoCivil = prompt("Informe seu estado civil (s, c, v, d):");
} while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

// Questão 5
let populacaoA = 80000, populacaoB = 200000, taxaA = 1.03, taxaB = 1.015, anos = 0;
while (populacaoA < populacaoB) {
  populacaoA *= taxaA;
  populacaoB *= taxaB;
  anos++;
}
console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B.`);

// Questão 6
do {
  populacaoA = parseFloat(prompt("Informe a população inicial do país A:"));
  populacaoB = parseFloat(prompt("Informe a população inicial do país B:"));
  taxaA = parseFloat(prompt("Informe a taxa de crescimento do país A (%):")) / 100 + 1;
  taxaB = parseFloat(prompt("Informe a taxa de crescimento do país B (%):")) / 100 + 1;
  anos = 0;

  if (populacaoA > 0 && populacaoB > 0 && taxaA > 1 && taxaB > 1) {
    while (populacaoA < populacaoB) {
      populacaoA *= taxaA;
      populacaoB *= taxaB;
      anos++;
    }
    console.log(`Serão necessários ${anos} anos para que a população de A ultrapasse ou iguale a de B.`);
  } else {
    alert("Dados inválidos.");
  }
} while (confirm("Deseja fazer outra operação?"));

// Questão 7
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log(Array.from({length: 20}, (_, i) => i + 1).join(" "));

// Questão 8
let maior = -Infinity;
for (let i = 0; i < 5; i++) {
  const numero = parseFloat(prompt(`Informe o número ${i + 1}:`));
  if (numero > maior) maior = numero;
}
console.log(`O maior número é: ${maior}`);

// Questão 9
let soma = 0;
for (let i = 0; i < 5; i++) {
  const numero = parseFloat(prompt(`Informe o número ${i + 1}:`));
  soma += numero;
}
console.log(`Soma: ${soma}, Média: ${soma / 5}`);

// Questão 10
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}
// Questão 11
let num1 = parseInt(prompt("Informe o primeiro número:"));
let num2 = parseInt(prompt("Informe o segundo número:"));
let menor = Math.min(num1, num2);
let maior = Math.max(num1, num2);
for (let i = menor + 1; i < maior; i++) {
  console.log(i);
}

// Questão 12
let soma = 0;
for (let i = menor + 1; i < maior; i++) {
  console.log(i);
  soma += i;
}
console.log(`Soma dos números no intervalo: ${soma}`);

// Questão 13
let numero = parseInt(prompt("Informe um número para ver a tabuada (1 a 10):"));
if (numero >= 1 && numero <= 10) {
  console.log(`Tabuada de ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} = ${numero * i}`);
  }
}

// Questão 14
let base = parseInt(prompt("Informe a base:"));
let expoente = parseInt(prompt("Informe o expoente:"));
let resultado = 1;
for (let i = 0; i < expoente; i++) {
  resultado *= base;
}
console.log(`Resultado: ${resultado}`);

// Questão 15
let pares = 0;
let impares = 0;
for (let i = 0; i < 10; i++) {
  let numero = parseInt(prompt(`Informe o número ${i + 1}:`));
  if (numero % 2 === 0) pares++;
  else impares++;
}
console.log(`Pares: ${pares}, Ímpares: ${impares}`);

// Questão 16
let n = parseInt(prompt("Informe o número de termos da sequência de Fibonacci:"));
let a = 1, b = 1;
console.log(a);
console.log(b);
for (let i = 3; i <= n; i++) {
  let proximo = a + b;
  console.log(proximo);
  a = b;
  b = proximo;
}

// Questão 17
a = 0;
b = 1;
console.log(a);
console.log(b);
while (true) {
  let proximo = a + b;
  if (proximo > 500) break;
  console.log(proximo);
  a = b;
  b = proximo;
}

// Questão 18
let numeroFatorial = parseInt(prompt("Informe um número para calcular o fatorial:"));
let fatorial = 1;
for (let i = numeroFatorial; i > 1; i--) {
  fatorial *= i;
}
console.log(`Fatorial de ${numeroFatorial} é: ${fatorial}`);

// Questão 19
let nValores = parseInt(prompt("Informe a quantidade de números do conjunto:"));
let valores = [];
for (let i = 0; i < nValores; i++) {
  valores.push(parseInt(prompt(`Informe o número ${i + 1}:`)));
}
let menorValor = Math.min(...valores);
let maiorValor = Math.max(...valores);
let somaValores = valores.reduce((a, b) => a + b, 0);
console.log(`Menor: ${menorValor}, Maior: ${maiorValor}, Soma: ${somaValores}`);

// Questão 20
valores = [];
for (let i = 0; i < nValores; i++) {
  let numero;
  do {
    numero = parseInt(prompt(`Informe um número entre 0 e 1000 (${i + 1}):`));
  } while (numero < 0 || numero > 1000);
  valores.push(numero);
}
menorValor = Math.min(...valores);
maiorValor = Math.max(...valores);
somaValores = valores.reduce((a, b) => a + b, 0);
console.log(`Menor: ${menorValor}, Maior: ${maiorValor}, Soma: ${somaValores}`);

// Questão 21
do {
  let numero = parseInt(prompt("Informe um número para calcular o fatorial (entre 1 e 15):"));
  if (numero > 0 && numero < 16) {
    let fatorial = 1;
    for (let i = numero; i > 1; i--) {
      fatorial *= i;
    }
    console.log(`Fatorial de ${numero} é: ${fatorial}`);
  } else {
    console.log("Número inválido.");
  }
} while (confirm("Deseja calcular outro fatorial?"));

// Questão 22
let numeroPrimo = parseInt(prompt("Informe um número para verificar se é primo:"));
let ehPrimo = true;
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
  if (numeroPrimo % i === 0) {
    ehPrimo = false;
    break;
  }
}
console.log(ehPrimo ? `${numeroPrimo} é primo` : `${numeroPrimo} não é primo`);

// Questão 23
ehPrimo = true;
let divisores = [];
for (let i = 2; i <= Math.sqrt(numeroPrimo); i++) {
  if (numeroPrimo % i === 0) {
    ehPrimo = false;
    divisores.push(i);
  }
}
console.log(ehPrimo ? `${numeroPrimo} é primo` : `${numeroPrimo} não é primo e é divisível por ${divisores.join(", ")}`);

// Questão 24
let n = parseInt(prompt("Informe o valor de N:"));
let divisoes = 0;
for (let num = 2; num <= n; num++) {
  let primo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    divisoes++;
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) console.log(num);
}
console.log(`Total de divisões realizadas: ${divisoes}`);

// Questão 25
let qtdNotas = parseInt(prompt("Informe a quantidade de notas:"));
let somaNotas = 0;
for (let i = 0; i < qtdNotas; i++) {
  somaNotas += parseFloat(prompt(`Informe a nota ${i + 1}:`));
}
console.log(`Média das notas: ${somaNotas / qtdNotas}`);

// Questão 26
let qtdPessoas = parseInt(prompt("Informe a quantidade de pessoas:"));
let somaIdades = 0;
for (let i = 0; i < qtdPessoas; i++) {
  somaIdades += parseInt(prompt(`Informe a idade da pessoa ${i + 1}:`));
}
let mediaIdade = somaIdades / qtdPessoas;
if (mediaIdade <= 25) console.log("Turma jovem");
else if (mediaIdade <= 60) console.log("Turma adulta");
else console.log("Turma idosa");

// Questão 27
let qtdEleitores = parseInt(prompt("Informe o número total de eleitores:"));
let votos = [0, 0, 0];
for (let i = 0; i < qtdEleitores; i++) {
  let voto = parseInt(prompt("Vote em 1, 2 ou 3:"));
  if (voto >= 1 && voto <= 3) votos[voto - 1]++;
  else console.log("Voto inválido.");
}
console.log(`Candidato 1: ${votos[0]} votos, Candidato 2: ${votos[1]} votos, Candidato 3: ${votos[2]} votos`);

// Questão 28
let qtdTurmas = parseInt(prompt("Informe a quantidade de turmas:"));
let totalAlunos = 0;
for (let i = 0; i < qtdTurmas; i++) {
  let alunos;
  do {
    alunos = parseInt(prompt(`Informe a quantidade de alunos na turma ${i + 1} (máximo 40):`));
  } while (alunos > 40 || alunos < 0);
  totalAlunos += alunos;
}
console.log(`Média de alunos por turma: ${totalAlunos / qtdTurmas}`);

// Questão 29
let qtdCds = parseInt(prompt("Informe a quantidade de CDs na coleção:"));
let totalInvestido = 0;
for (let i = 0; i < qtdCds; i++) {
  totalInvestido += parseFloat(prompt(`Informe o valor do CD ${i + 1}:`));
}
console.log(`Valor total investido: R$ ${totalInvestido}, Valor médio por CD: R$ ${totalInvestido / qtdCds}`);

// Questão 30 
console.log("Lojas Quase Dois - Tabela de preços");
for (let i = 1; i <= 50; i++) {
  console.log(`${i} - R$ ${(i * 1.99).toFixed(2)}`);
}

// Questão 31
let precoPao = parseFloat(prompt("Informe o preço do pão:"));
console.log("Panificadora Pão de Ontem - Tabela de preços");
for (let i = 1; i <= 50; i++) {
  console.log(`${i} - R$ ${(i * precoPao).toFixed(2)}`);
}

// Questão 32
do {
  let total = 0, produto, count = 1;
  console.log("Lojas Tabajara");
  while ((produto = parseFloat(prompt(`Produto ${count}:`))) !== 0) {
    total += produto;
    console.log(`Produto ${count}: R$ ${produto.toFixed(2)}`);
    count++;
  }
  console.log(`Total: R$ ${total.toFixed(2)}`);
  let dinheiro = parseFloat(prompt("Dinheiro:"));
  console.log(`Troco: R$ ${(dinheiro - total).toFixed(2)}`);
} while (confirm("Deseja registrar uma nova compra?"));

// Questão 33
let temperaturas = [];
let temp;
while ((temp = prompt("Informe uma temperatura ou deixe vazio para finalizar:")) !== "") {
  temperaturas.push(parseFloat(temp));
}
let menor = Math.min(...temperaturas);
let maior = Math.max(...temperaturas);
let media = temperaturas.reduce((a, b) => a + b, 0) / temperaturas.length;
console.log(`Menor: ${menor}, Maior: ${maior}, Média: ${media.toFixed(2)}`);

// Questão 34
let numPrimo = parseInt(prompt("Informe um número para verificar se é primo:"));
let ehPrimo = numPrimo > 1;
for (let i = 2; i <= Math.sqrt(numPrimo); i++) {
  if (numPrimo % i === 0) {
    ehPrimo = false;
    break;
  }
}
console.log(ehPrimo ? `${numPrimo} é primo` : `${numPrimo} não é primo`);

// Questão 35
let limite = parseInt(prompt("Informe o limite superior para verificar números primos:"));
for (let num = 2; num <= limite; num++) {
  let primo = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
  if (primo) console.log(num);
}

// Questão 36
let tabuada = parseInt(prompt("Informe o número para a tabuada:"));
let inicio = parseInt(prompt("Informe o valor inicial:"));
let fim = parseInt(prompt("Informe o valor final:"));
if (fim >= inicio) {
  console.log(`Tabuada de ${tabuada} começando em ${inicio} e terminando em ${fim}:`);
  for (let i = inicio; i <= fim; i++) {
    console.log(`${tabuada} X ${i} = ${tabuada * i}`);
  }
} else {
  console.log("O valor final deve ser maior ou igual ao valor inicial.");
}

// Questão 37
let codigo, maiorAltura = 0, menorAltura = Infinity, maiorPeso = 0, menorPeso = Infinity;
let codigoMaiorAltura, codigoMenorAltura, codigoMaiorPeso, codigoMenorPeso;
let totalAltura = 0, totalPeso = 0, count = 0;
while ((codigo = parseInt(prompt("Informe o código do cliente ou 0 para finalizar:"))) !== 0) {
  let altura = parseFloat(prompt("Informe a altura:"));
  let peso = parseFloat(prompt("Informe o peso:"));
  totalAltura += altura;
  totalPeso += peso;
  count++;
  if (altura > maiorAltura) {
    maiorAltura = altura;
    codigoMaiorAltura = codigo;
  }
  if (altura < menorAltura) {
    menorAltura = altura;
    codigoMenorAltura = codigo;
  }
  if (peso > maiorPeso) {
    maiorPeso = peso;
    codigoMaiorPeso = codigo;
  }
  if (peso < menorPeso) {
    menorPeso = peso;
    codigoMenorPeso = codigo;
  }
}
console.log(`Cliente mais alto: Código ${codigoMaiorAltura}, Altura: ${maiorAltura}`);
console.log(`Cliente mais baixo: Código ${codigoMenorAltura}, Altura: ${menorAltura}`);
console.log(`Cliente mais gordo: Código ${codigoMaiorPeso}, Peso: ${maiorPeso}`);
console.log(`Cliente mais magro: Código ${codigoMenorPeso}, Peso: ${menorPeso}`);
console.log(`Média de altura: ${(totalAltura / count).toFixed(2)}, Média de peso: ${(totalPeso / count).toFixed(2)}`);

// Questão 38
let salarioInicial = parseFloat(prompt("Informe o salário inicial do funcionário:"));
let ano = 1996;
let salario = salarioInicial * 1.015;
let aumento = 1.015;
while (ano <= new Date().getFullYear()) {
  aumento *= 2;
  salario += salarioInicial * aumento;
  ano++;
}
console.log(`Salário atual: R$ ${salario.toFixed(2)}`);

// Questão 39
let veiculosTotal = 0, acidentesTotal = 0, acidentesMenor2000 = 0, countMenor2000 = 0;
let maiorIndice = 0, menorIndice = Infinity, codigoMaiorIndice, codigoMenorIndice;
for (let i = 1; i <= 5; i++) {
  let codigoCidade = prompt(`Informe o código da cidade ${i}:`);
  let veiculos = parseInt(prompt("Informe o número de veículos de passeio:"));
  let acidentes = parseInt(prompt("Informe o número de acidentes com vítimas:"));
  let indice = acidentes / veiculos;
  veiculosTotal += veiculos;
  if (indice > maiorIndice) {
    maiorIndice = indice;
    codigoMaiorIndice = codigoCidade;
  }
  if (indice < menorIndice) {
    menorIndice = indice;
    codigoMenorIndice = codigoCidade;
  }
  if (veiculos < 2000) {
    acidentesMenor2000 += acidentes;
    countMenor2000++;
  }
}
console.log(`Maior índice de acidentes: ${maiorIndice.toFixed(2)} na cidade ${codigoMaiorIndice}`);
console.log(`Menor índice de acidentes: ${menorIndice.toFixed(2)} na cidade ${codigoMenorIndice}`);
console.log(`Média de veículos: ${(veiculosTotal / 5).toFixed(0)}`);
console.log(`Média de acidentes em cidades com menos de 2000 veículos: ${(acidentesMenor2000 / countMenor2000).toFixed(0)}`);

// Questão 40
let divida = parseFloat(prompt("Informe o valor da dívida:"));
let parcelas = [1, 3, 6, 9, 12];
let juros = [0, 10, 15, 20, 25];

console.log("Valor da Dívida | Valor dos Juros | Quantidade de Parcelas | Valor da Parcela");
for (let i = 0; i < parcelas.length; i++) {
  let valorJuros = (divida * juros[i]) / 100;
  let valorDivida = divida + valorJuros;
  let valorParcela = valorDivida / parcelas[i];
  console.log(
    `R$ ${valorDivida.toFixed(2)} | R$ ${valorJuros.toFixed(2)} | ${parcelas[i]} | R$ ${valorParcela.toFixed(2)}`
  );
}

// Questão 41
let cardapio = {
  100: { item: "Cachorro Quente", preco: 1.2 },
  101: { item: "Bauru Simples", preco: 1.3 },
  102: { item: "Bauru com ovo", preco: 1.5 },
  103: { item: "Hambúrguer", preco: 1.2 },
  104: { item: "Cheeseburguer", preco: 1.3 },
  105: { item: "Refrigerante", preco: 1.0 },
};

let total = 0;
let pedido;
while ((pedido = parseInt(prompt("Informe o código do item ou 0 para encerrar o pedido:"))) !== 0) {
  if (cardapio[pedido]) {
    let quantidade = parseInt(prompt(`Informe a quantidade de ${cardapio[pedido].item}:`));
    let valorItem = cardapio[pedido].preco * quantidade;
    total += valorItem;
    console.log(`${cardapio[pedido].item} - ${quantidade} x R$ ${cardapio[pedido].preco.toFixed(2)} = R$ ${valorItem.toFixed(2)}`);
  } else {
    console.log("Código inválido.");
  }
}
console.log(`Total do pedido: R$ ${total.toFixed(2)}`);

// Questão 42
let votos = [0, 0, 0, 0, 0, 0];
let voto;
while ((voto = parseInt(prompt("Digite o código do voto (1-4 para candidatos, 5 para nulo, 6 para branco, 0 para encerrar):"))) !== 0) {
  if (voto >= 1 && voto <= 6) votos[voto - 1]++;
}

let totalVotos = votos.reduce((a, b) => a + b, 0);
let percNulos = ((votos[4] / totalVotos) * 100).toFixed(2);
let percBrancos = ((votos[5] / totalVotos) * 100).toFixed(2);

console.log(`Votos candidato 1: ${votos[0]}`);
console.log(`Votos candidato 2: ${votos[1]}`);
console.log(`Votos candidato 3: ${votos[2]}`);
console.log(`Votos candidato 4: ${votos[3]}`);
console.log(`Votos nulos: ${votos[4]} (${percNulos}%)`);
console.log(`Votos em branco: ${votos[5]} (${percBrancos}%)`);

// Questão 43
let gabarito = ["A", "B", "C", "D", "A", "B", "C", "D", "A", "B"];
let maiorAcerto = 0, menorAcerto = 10, totalNotas = 0, totalAlunos = 0;
let repetir;

do {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    let resposta = prompt(`Resposta da questão ${i + 1}:`).toUpperCase();
    if (resposta === gabarito[i]) acertos++;
  }
  console.log(`Total de acertos: ${acertos}`);
  maiorAcerto = Math.max(maiorAcerto, acertos);
  menorAcerto = Math.min(menorAcerto, acertos);
  totalNotas += acertos;
  totalAlunos++;

  repetir = confirm("Outro aluno vai utilizar o sistema?");
} while (repetir);

let media = totalNotas / totalAlunos;
console.log(`Maior Acerto: ${maiorAcerto}`);
console.log(`Menor Acerto: ${menorAcerto}`);
console.log(`Total de Alunos: ${totalAlunos}`);
console.log(`Média da Turma: ${media.toFixed(2)}`);


