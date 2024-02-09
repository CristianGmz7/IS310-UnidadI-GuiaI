let b = parseFloat(prompt('Ingrese la base del triangulo'));
let h = parseFloat(prompt('Ingrese la altura del triangulo'));
let a = (b * h) / 2;
let flag = true;

if(b <= 0 || h <= 0){
    flag = false;
}

if(flag){
    document.querySelector('.contenido').innerHTML = `El area del triangulo de base ${b} unidades y de altura ${h} unidades es igual a ${Number(a.toFixed(4))} unidades cuadradas`;
}
else{
    document.querySelector('.contenido').innerHTML = `La base o la altura no pueden ser un numero negativo o cero`;
}