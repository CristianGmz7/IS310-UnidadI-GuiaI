const r = parseFloat(prompt('Ingrese el valor del radio del circulo: '));
let a;
let flag = true;

if(r <= 0){
    flag = false;
}

if(flag){
    a = parseFloat (r * r * Math.PI);
    document.querySelector('.contenido').innerHTML = `El area del circulo de radio ${r} unidades es igual a ${Number(a.toFixed(4))} unidades cuadradas`;
}
else{
    document.querySelector('.contenido').innerHTML = `El radio no puede ser un numero negativo o cero`;
}