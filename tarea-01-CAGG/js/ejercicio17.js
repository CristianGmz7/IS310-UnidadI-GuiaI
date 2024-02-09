const cantidadpies = parseFloat(prompt('Ingrese la cantidad que estara en pies'));
const cantidadmetros = parseFloat(prompt('Ingrese la cantidad que estara en metros'));

const sumapulgada = 12 * cantidadpies + 1 / 0.0254 * cantidadmetros;
const sumayarda = 1 / 3 * cantidadpies + 1 / 0.0254 * 1 / 36 * cantidadmetros;
const sumametro = 12 * 0.0254 * cantidadpies + cantidadmetros;
const sumamilla = 1 / 5280 * cantidadpies + 1 / 1609.34 * cantidadmetros;

document.querySelector('.contenido').innerHTML = `La suma de ${cantidadpies} pies y ${cantidadmetros} metros equivale a:<br>${sumapulgada.toFixed(4)} pulgadas<br>${sumayarda.toFixed(4)} yardas<br>${sumametro.toFixed(4)} metros<br>${sumamilla.toFixed(9)} millas`;
