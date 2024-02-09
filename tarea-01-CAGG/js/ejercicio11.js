const num = parseInt(prompt('Ingrese un numero entero: '));
let flag1 = true;
let flag2 = true;
let contador = 0;

if(num <= 1){
    flag1 = false;
}
else{

    for(let i = 1; i <= num; i++){
        
        if(num % i === 0){
            contador++;
        }

    }

    if(contador > 2){
        flag2 = false;
    }

}

if(flag1){

    if(flag2){
        document.querySelector('.contenido').innerHTML = `El numero ${num} es primo`;
    }
    else{
        document.querySelector('.contenido').innerHTML = `El numero ${num} NO es primo`;
    }
    
}
else{
    document.querySelector('.contenido').innerHTML = `El numero ${num} no se puede catalogar si es primo o no`;
}