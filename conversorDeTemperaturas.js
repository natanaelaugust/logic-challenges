/* Problema proposto:
Desenvolver um programa em JavaScript para converter a temperatura de Fahrenheit para Celsius, utilizando a fórmula: TC = (5/9) * (TF - 32). Possibilitar que usuários globais obtenham a temperatura desejada, inserindo um valor numérico em °F, e incluir a funcionalidade de converter de °C para °F.*/

function CelsiusParaFahrenheit(celsius) {
  let temperaturaFahrenheit = (9 * celsius + 160) / 5;
  return temperaturaFahrenheit.toFixed(2);
}

function FahrenheitParaCelsius(fahrenheit) {
  let temperaturaCelsius = (5 * fahrenheit - 160) / 9;
  return temperaturaCelsius.toFixed(2);
}

//Teste:

//converter 100 °C para °F
console.log("100 °C equivale a " + CelsiusParaFahrenheit(100) + " °F");

//converter 100°F para °C

console.log("100 °F equivale a " + FahrenheitParaCelsius(100) + " °C");
