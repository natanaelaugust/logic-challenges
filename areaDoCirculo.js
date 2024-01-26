
/*Problema proposto:
Desenvolver um programa para calcular automaticamente a área, o comprimento da circunferência e determinar a quantidade de rolos de arame necessários (cada um com 20m) ao cercar um canteiro circular, baseado no raio fornecido para auxiliar a agricultura familiar.
*/

function areaCircunferencia(raio) {
    let area = Math.PI * (raio ** 2);

    return area.toFixed(2);
}

function comprimentoCircunferencia(raio) {
    let comprimento = 2 * Math.PI * raio;
    return comprimento.toFixed(2);

}

function rolosNecessarios(raio, extensaoRolo) {
    let quantidadeDeRolos = comprimentoCircunferencia(raio) / extensaoRolo;

    return Math.ceil(quantidadeDeRolos);
}


//Teste:

let raioCanteiro = 10;
console.log("Àrea :" + areaCircunferencia(raioCanteiro))
console.log("Comprimento :" + comprimentoCircunferencia(raioCanteiro))
console.log("Rolos necessários :" + rolosNecessarios(raioCanteiro, 20))

