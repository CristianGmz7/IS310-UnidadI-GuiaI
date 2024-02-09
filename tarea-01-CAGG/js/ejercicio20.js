// Segun formula sugerida de Repsol.es la formula es: Litros llenados / km recorridos
const kilometros = parseFloat(prompt('Ingrese el numero de kilometros recorridos: '));
const litros = parseFloat(prompt('Ingrese la cantidad de litros consumidos: '));

const resultado = litros / kilometros;
document.querySelector('.contenido').innerHTML = `El consumo de combustible por kilometro es de: ${resultado.toFixed(4)} litros/km`;
