num1 = parseFloat(prompt('Ingrese el primer numero'));
num2 = parseFloat(prompt('Ingrese el segundo numero'));
let resultado = num1 + num2;

document.querySelector('.contenido').innerHTML = `El resultado de la suma de ${num1} + ${num2} es igual a ${Number(resultado.toFixed(4))}`;
