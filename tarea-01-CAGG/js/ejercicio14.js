const string1 = prompt('Ingrese la primer cadena: ');
const string2 = prompt('Ingrese la segunda cadena: ');
flag = true;

if(string1 !== string2){
    flag = false;
}

if(flag){
    document.querySelector('.contenido').innerHTML = `Las cadenas '${string1}' y '${string2}' son iguales`;
}
else{
    document.querySelector('.contenido').innerHTML = `Las cadenas '${string1}' y '${string2}' son diferentes`;
}