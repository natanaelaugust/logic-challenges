/*Problema proposto : 

Desenvolver um programa em JavaScript para calcular o fatorial de um determinado número. */


function calcularFatorial(fatorial) {
    let resultado = 1;

    for (let i = fatorial; i >= 1; i--) {
        resultado = resultado * i;
    }

    return resultado;

}

//Teste:

let numeroTeste = 5

console.log(numeroTeste + "! é igual a " + calcularFatorial(numeroTeste))

