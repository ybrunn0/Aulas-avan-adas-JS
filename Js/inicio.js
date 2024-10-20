  // var -> ES5 - CROSS-BROWSER
  let teste =  "minha string"; // JavaScript é uma linguagem fracamente tipada.
  teste = 30;

  let teste1 =  "minha string"; // O Let não permite que a mesma variável seja novamente atribuída.
  //let teste1 = 10; // comentando para não aparecer o erro. 

  var teste2 = "Minha string";
  var teste2 = 40;  // O var permite por ser de escopo global e isso é um perigo.

  const teste4 = "Eu sou imutável";

  // Exibindo os valores no navegador
  document.getElementById("output").innerHTML = `
      <strong>Valor de teste:</strong> ${teste} <br>
      <strong>Valor de teste1:</strong> ${teste1} <br>
      <strong>Valor de teste2:</strong> ${teste2} <br>
      <strong>Valor de teste4:</strong> ${teste4}
  `;