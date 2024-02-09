const tempC = parseFloat(prompt('Ingrese el valor de la temperatura en grado Celsius: '));
let tempF;
let flag = true;

if(tempC < -273.15){
    flag = false;
}

if(flag){
    tempF = parseFloat((tempC * 9/5) + 32);
    document.querySelector('.contenido').innerHTML = `${tempC} °C es igual a ${Number(tempF.toFixed(4))} °F`;
}
else{
    document.querySelector('.contenido').innerHTML = `La temperatura ingresada es menor a la temperatura mas baja posible`;
}