
let nome = prompt("Digite o seu nome!");

let anoNascimento = parseInt(prompt("Digite o ano em que você nasceu!"));

idade = calcularIdade(anoNascimento)

function calcularIdade(anoNascimento){

    const anoAtual = 2021;
    idade = anoAtual - anoNascimento;
    return idade;

}

alert(`Olá, seu nome é  ${nome} , e você tem ${idade} anos.`);



