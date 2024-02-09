const num1 = parseFloat(prompt('Ingrese el primer numero: '));
const num2 = parseFloat(prompt('Ingrese el segundo numero: '));
const num3 = parseFloat(prompt('Ingrese el tercer numero: '));

const prom = parseFloat((num1 + num2 + num3) / 3);

document.querySelector('.contenido').innerHTML = `El promedio de ${num1}, ${num2} y ${num3} es igual a ${Number(prom.toFixed(4))}`;