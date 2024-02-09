const string = prompt('Ingrese una cadena para mostrar la longitud de la misma: ');

document.querySelector('.contenido').innerHTML = `La longitud de la cadena '${string}' es ${string.length}`;