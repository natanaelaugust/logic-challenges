/*Problema proposto:

Desenvolver um aplicativo para auxiliar nutricionistas, com a função de calcular o Índice de Massa Corpórea (IMC). O programa deverá receber informações como sexo, peso e altura, e apresentar a condição da pessoa conforme a seguinte tabela:

+-----------------------+----------------------------+---------------------+
| Condição              | IMC (Mulheres)             | IMC (Homens)        |
+-----------------------+----------------------------+---------------------+
| Abaixo do peso        | Menor que 19,1             | Menor que 20,7      |
| Peso normal           | Entre 19,1 e 25,8          | Entre 20,7 e 26,4   |
| Pouco acima do peso   | Entre 25,8 e 27,3          | Entre 26,4 e 27,8   |
| Acima do peso ideal   | Entre 27,3 e 32,3          | Entre 27,8 e 31,1   |
| Obeso                 | Maior que 32,3            | Maior que 31,1       |
+-----------------------+----------------------------+---------------------+

*/

function calcularIMC(peso, altura) {
  let IMC = peso / altura ** 2;
  return IMC.toFixed(2);
}

function classificarIMC(genero, IMC) {
  if (genero === "homem") {
    if (IMC < 20.7) return "Abaixo do peso";
    if (IMC >= 20.7 && IMC <= 26.4) return "Peso normal";
    if (IMC >= 26.4 && IMC <= 27.8) return "Pouco acima do peso";
    if (IMC >= 27.8 && IMC <= 31.1) return "Acima do peso ideal";
    if (IMC >= 31.1) return "Obeso";
  } else if (genero === "mulher") {
    if (IMC < 19.1) return "Abaixo do peso";
    if (IMC >= 19.1 && IMC <= 25.8) return "Peso normal";
    if (IMC >= 25.8 && IMC <= 27.3) return "Pouco acima do peso";
    if (IMC >= 27.3 && IMC <= 32.3) return "Acima do peso ideal";
    if (IMC >= 32.3) return "Obeso";
  } else {
    return "Entrada inválida, tente novamente";
  }
}

//Teste:

//Calcular o IMC de um homem com 91kg e 1.75m de altura

let pesoHomem = 91;
let alturaHomem = 1.75;
let IMCHomem = calcularIMC(pesoHomem, alturaHomem);

console.log(
  "O IMC de um Homem com " +
    pesoHomem +
    "kg e " +
    alturaHomem +
    "m é de " +
    IMCHomem +
    " ,sendo classificado como " +
    classificarIMC("homem", IMCHomem)
);

//Calcular o IMC de uma mulher com 70kg e 1.69m de altura

let pesoMulher = 70;
let alturaMulher = 1.69;
let IMCMulher = calcularIMC(pesoMulher, alturaMulher);

console.log(
  "O IMC de uma Mulher com " +
    pesoMulher +
    "kg e " +
    alturaMulher +
    "m é de " +
    IMCMulher +
    " ,sendo classificado como " +
    classificarIMC("mulher", IMCMulher)
);
