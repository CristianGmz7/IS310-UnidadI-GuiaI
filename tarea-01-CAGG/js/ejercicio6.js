const nombres = prompt('Ingrese su(s) nombres(s): ');
const apellidos = prompt('Ingrese su(s) apellidos(s): ');

document.querySelector('.contenido').innerHTML = `Su nombre completo es: ${nombres} ${' '} ${apellidos}`;
console.log(`Su nombre completo es: ${nombres} ${apellidos}`);