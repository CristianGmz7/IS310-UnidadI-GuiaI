const nombre = prompt('Ingrese el nombre del producto a comprar: ');
const precio = parseFloat(prompt('Ingrese el precio del producto: '));

const total = 1.15 * precio;

document.querySelector('.contenido').innerHTML = `El producto: ${nombre} tiene un precio de L ${precio}<br>El IVA (15%) del producto es de L ${0.15 * precio.toFixed(2)}<br>Total a pagar es de L ${total.toFixed(2)}`;
