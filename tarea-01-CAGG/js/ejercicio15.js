const contrasenapre = 'salu2';
const contrasena = prompt('Ingrese la contraseña: ');

if(contrasena === contrasenapre){
    document.querySelector('.contenido').innerHTML = `La contraseña '${contrasena}' coincide con '${contrasenapre}'`;
}
else{
    document.querySelector('.contenido').innerHTML = `La contraseña '${contrasena}' NO coincide con la contraseña predefinida`;
}