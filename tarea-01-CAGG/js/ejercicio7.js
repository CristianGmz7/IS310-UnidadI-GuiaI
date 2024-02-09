const num = parseInt(prompt('Ingrese un numero: '));
flag = true;

if(num % 2 !== 0){
    flag = false;
}

if(flag){
    document.querySelector('.contenido').innerHTML = `El numero ${num} es par`;
}
else{
    document.querySelector('.contenido').innerHTML = `El numero ${num} es impar`;
}