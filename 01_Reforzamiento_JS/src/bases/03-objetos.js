
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 533113,
        lat: 14.543,
        long: 31.233
    }
}

console.log(persona);

const persona2 = { ...persona }; // Rompe la referencia y me permite cambiar el objeto sin modificar el primero

persona2.nombre = 'Peter';

console.log(persona2)
console.log(persona)