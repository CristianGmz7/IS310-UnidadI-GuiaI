const cantidadlitros = parseFloat(prompt('Ingrese la cantidad que estara en litros cubicos: '));
const cantidadyardas = parseFloat(prompt('Ingrese la cantidad que estara en yardas cubicas: '));

const sumatotal = 1 / 1000 * cantidadlitros + 27 * 0.0283 * cantidadyardas;

const consumodomestico = sumatotal * 0.75;
const riego = sumatotal * 0.25;

document.querySelector('.contenido').innerHTML = `La suma de ${cantidadlitros} litros y ${cantidadyardas} yardas cubicas equivale a:<br>${sumatotal.toFixed(4)} metros cubicos<br>De esta suma el 75% (${consumodomestico.toFixed(4)} metros cubicos) son para uso domestico y el otro 25% (${riego.toFixed(4)} metros cubicos) son para riego<br>Expresando en pies cubicos quedaria:<br>${(consumodomestico * 1 / 0.0283).toFixed(4)} pies cubicos para consumo domestico y ${(riego * 1 / 0.0283).toFixed(4)} pies cubicos para riego`;
