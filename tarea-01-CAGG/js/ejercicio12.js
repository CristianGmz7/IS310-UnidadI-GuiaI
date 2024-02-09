const opc = parseInt(prompt('\tCALCULADORA SIMPLE\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\nOpcion: '));
let num1, num2, resultado;

function pedirdatos(){
    num1 = parseFloat(prompt('Ingrese el primer numero'));
    num2 = parseFloat(prompt('Ingrese el segundo numero'));
    return num1, num2;
}

switch(opc){
    case 1:
        pedirdatos();
        resultado = parseFloat(num1 + num2);
        document.querySelector('.contenido').innerHTML = `${num1} + ${num2} = ${Number(resultado.toFixed(4))}`;
        break;

    case 2:
        pedirdatos();
        resultado = parseFloat(num1 - num2);
        document.querySelector('.contenido').innerHTML = `${num1} - ${num2} = ${Number(resultado.toFixed(4))}`;
        break;

    case 3:
        pedirdatos();
        resultado = parseFloat(num1 * num2);
        document.querySelector('.contenido').innerHTML = `${num1} * ${num2} = ${Number(resultado.toFixed(4))}`;
        break;

    case 4:
        pedirdatos();
        if(num2 === 0){
            document.querySelector('.contenido').innerHTML = `No se puede dividir por cero`;
        }
        else{
            resultado = parseFloat(num1 / num2);
            document.querySelector('.contenido').innerHTML = `${num1} / ${num2} = ${Number(resultado.toFixed(4))}`; 
        }
        break;

    default:
        document.querySelector('.contenido').innerHTML = `Opcion digitada no disponible`;
        break;

}