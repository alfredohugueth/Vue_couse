let variableChange = true; // Solo para variables que van a ser modificadas
const nombre = 'Tony';
const apellido = 'Stark';

console.log(nombre, apellido);

if ( true ) {
    const nombre = 'Peter'; // Verifica si la variable esta en el scope
    console.log( nombre );
}

console.log(nombre)