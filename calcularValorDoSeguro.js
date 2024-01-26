
/* Problema proposto:

Uma seguradora solicitou o desenvolvimento de um sistema para controlar dados de segurados e apólices, com valores base de R$ 500 para cobertura parcial e R$ 800 para cobertura total. O cálculo considera faixas etárias (jovens: 18-24 anos, adultos: 25-55 anos, idosos: 56-120 anos) e variáveis de gênero. Jovens e adultos do sexo feminino têm redução de 5%, enquanto jovens do sexo masculino têm acréscimo de 7%. Idosos, de qualquer sexo, têm acréscimo de 9% no valor base. O programa a ser desenvolvido deve receber informações do cliente (idade, sexo e tipo de cobertura) e exibir o valor total da apólice.

(Problema adaptado de: http://www.rodrigor.com.br/pt-br/disciplinas/2010.1/introprog/exercicios/lista1#seguradora)

*/

function valorDoSeguro(idade, sexo, tipoDeSeguro) {

    let precoSeguro
    if (tipoDeSeguro === "parcial") {
        precoSeguro = 500;
    } else if (tipoDeSeguro === "total") {
        precoSeguro = 800;
    } else {
        console.log("ParametroInvalido, insira dados validos");
    }


    if ((idade >= 18 && idade <= 55) && sexo == "feminino") {
        precoSeguro = precoSeguro * 0.95;
    } else if ((idade >= 18 && idade <= 24) && sexo == "masculino") {
        precoSeguro = precoSeguro * 1.07;
    } else if (idade >= 56 && idade <= 120) {
        precoSeguro = precoSeguro * 1.09;
    } else {
        console.log("Idade fora das faixas especificadas");
    }
    return precoSeguro;
}


//Teste: 

// Mulher, 35 anos, seguro parcial

console.log("O preço do seguro parcial para uma mulher de 35 anos é R$" + valorDoSeguro(35, "feminino", "parcial"));

//Homem, 70 anos, seguro total 

console.log("O preço do seguro total para um  homem de 70 anos é R$" + valorDoSeguro(70, "masculino", "total"));
