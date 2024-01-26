/*
Problema proposto:
Criar um programa para avaliar se os valores X, Y e Z atendem às condições para serem os comprimentos dos lados de um triângulo, seguindo as seguintes diretrizes:

- Garantir que cada lado seja menor que a soma dos outros dois.
- Identificar se é um triângulo equilátero, com todos os lados iguais.
- Identificar se é um triângulo isósceles, com dois lados iguais, considerando que um triângulo equilátero também é isósceles.
- Reconhecer se é um triângulo escaleno, com todos os lados distintos. Em caso de impossibilidade de formar um triângulo, o programa deve exibir uma mensagem apropriada.
*/




function classificarTriangulo(X, Y, Z) {
    if (X === Y || X === Z || Y === Z) {
        return "triângulo isóceles";
    } else if (X === Y && Y === Z) {
        return "triângulo equilatério";
    } else
        return "triangulo escaleno";
}




function medidasValidasTriangulo(X, Y, Z) {

    if (X < Y + Z && Y < X + Z && Z < X + Y) {
        return X + ", " + Y + " e  " + Z + " são medidas validas de um triangulo";
        classificarTriangulo(X, Y, Z);
    }

    else {
        return X + ", " + Y + " e  " + Z + " não são medidas validas de um triangulo";
    }


}


//Teste:

// Um triângulo com lados 4,4,4

console.log(medidasValidasTriangulo(4, 4, 4))


// Um triângulo com lados 1,4,6

console.log(medidasValidasTriangulo(1, 4, 6))

