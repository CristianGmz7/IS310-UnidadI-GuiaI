let min1 = parseFloat(prompt('Ingrese el numero de MINUTOS del primer corredor: '));    //parseInt
let seg1 = parseFloat(prompt('Ingrese el numero de SEGUNDOS del primer corredor: '));   //parseInt
let min2 = parseInt(prompt('Ingrese el numero de MINUTOS del segundo corredor: '));
let seg2 = parseInt(prompt('Ingrese el numero de SEGUNDOS del primer corredor: '));

let acumulador1;
let acumulador2;

acumulador1 = (1 / 60 * min1 + 1 / 3600 * seg1);
acumulador2 = (1 / 60 * min2 + 1 / 3600 * seg2);

// console.log(`Acumulador 1: ${acumulador1.toFixed(6)} h`);
// console.log(`Acumulador 2: ${acumulador2} h`);

let horas1, horas2, minutos1, minutos2, segundos1, segundos2;

horas1 = Math.floor(acumulador1);
// console.log(`Horas del corredor 1: ${horas1}`);
minutos1 = acumulador1 - horas1;
minutos1 = minutos1 * 60;
// console.log(`Minutos del corredor 1: ${Math.floor(minutos1)}`);
segundos1 = minutos1 - Math.floor(minutos1);
segundos1 = segundos1 * 60; 
// console.log(`Segundos del corredor 1: ${segundos1.toFixed(4)}`);

horas2 = Math.floor(acumulador2);
// console.log(`Horas del corredor 2: ${horas2}`);
minutos2 = acumulador2 - horas2;
minutos2 = minutos2 * 60;
// console.log(`Minutos del corredor 2: ${Math.floor(minutos2)}`);
segundos2 = minutos2 - Math.floor(minutos2);
segundos2 = segundos2 * 60; 
// console.log(`Segundos del corredor 2: ${segundos2.toFixed(4)}`);

document.querySelector('.contenido').innerHTML = `El corredor 1 recorrio ${min1} min y ${seg1} seg, equivalen a ${horas1} h : ${Math.floor(minutos1)} min : ${segundos1.toFixed(2)} seg<br>El corredor 2 recorrio ${min2} min y ${seg2} seg, equivalen a ${horas2} h : ${Math.floor(minutos2)} min : ${segundos2.toFixed(2)} seg`;
