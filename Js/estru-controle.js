let idade = 18;

if (idade < 18) {
    console.log("Menor de idade");
} else if (idade === 18) {
    console.log("Você acabou de atingir a maioridade!");
} else {
    console.log("Maior de idade");
}


let cor = 'vermelho';

switch (cor) {
    case 'azul':
        console.log("A cor é azul");
        break;
    case 'vermelho':
        console.log("A cor é vermelho");
        break;
    default:
        console.log("Cor não identificada");
}
