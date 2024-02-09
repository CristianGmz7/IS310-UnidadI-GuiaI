let num1 = parseFloat(prompt('Ingrese el primer numero'));
let num2 = parseFloat(prompt('Ingrese el segundo numero'));
let resultado1 = num1 * num2;
let resultado2;
let flag = true;

if(num2 !== 0){
   resultado2 = num1 / num2;
}
else{
    flag = false;
}

if(flag){
    document.querySelector('.contenido').innerHTML = `El resultado de la multiplicacion de ${num1} * ${num2} es igual a ${Number(resultado1.toFixed(4))}<br>El resultado de la division de ${num1} / ${num2} es igual a ${Number(resultado2.toFixed(4))}`;
}
else{
    document.querySelector('.contenido').innerHTML = `El resultado de la multiplicacion de ${num1} * ${num2} es igual a ${Number(resultado1.toFixed(4))}<br>No se puede dividir por cero`;
}
