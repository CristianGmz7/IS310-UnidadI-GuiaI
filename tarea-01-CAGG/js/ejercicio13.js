// Coste del dolar en lempiras el 8 de febrero de 2024:
// $ 1 = L 24.66

const dolares = parseFloat(prompt('Ingrese la cantidad de dolares que convertira a lempiras: '));
const lempiras = parseFloat(24.66 * dolares);

document.querySelector('.contenido').innerHTML = `$ ${dolares} equivalen a L ${lempiras}`;