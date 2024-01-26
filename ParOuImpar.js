/*
Problema proposto:

Criar um algoritmo para determinar o vencedor de uma partida de par ou ímpar com base em duas listas de números inteiros. O primeiro jogador escolhe par e o segundo, ímpar. O algoritmo imprime na tela quem venceu: "VENCEDOR_PRIMEIRO" para o primeiro jogador, "VENCEDOR_SEGUNDO" para o segundo ou "EMPATE" em caso de empate. Exemplo: primeiro = [3, 4, 5, 8, 9, 7] e segundo = [2, 2, 1, 5, 9, 3] resultaria em "VENCEDOR_PRIMEIRO".

*/

function parOuImpar(jogadas_1, jogadas_2) {
  let vitoriasJogadorA = 0;
  let vitoriasJogadorB = 0;
  let somaDasJogadas;

  for (let i = 0; i < jogadas_1.length; i++) {
    somaDasJogadas = jogadas_1[i] + jogadas_2[i];

    if (somaDasJogadas % 2 === 0) {
      vitoriasJogadorA = vitoriasJogadorA + 1;
    } else {
      vitoriasJogadorB = vitoriasJogadorB + 1;
    }
  }

  if (vitoriasJogadorA > vitoriasJogadorB) {
    console.log("Vitória do primeiro jogador");
  } else if (vitoriasJogadorA < vitoriasJogadorB) {
    console.log("Vitória do segundo jogador");
  } else {
    console.log("Empate");
  }
}

//Teste:

let jogadasPrimeiroJogador = [3, 4, 5, 8, 9, 7];

let jogadasSegundoJogador = [2, 2, 1, 5, 9, 3];

parOuImpar(jogadasPrimeiroJogador, jogadasSegundoJogador);
