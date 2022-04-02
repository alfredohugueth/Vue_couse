
// function() {
//     return `hola mundo`
// }

const saludar = ( name ) => `hola ${name}`


console.log( saludar( 'tony' ) );

const getUser = () => ({uid: 'ABC123',username: 'Tony123'})

console.log(getUser())

const heroes = [
    {
        id: 1,
        name: 'batman'
    },
    {
        id: 2,
        name: 'Superman'
    }
]

const existe = (arrayObjects) => heroes.some( el => el.id == 1 )


const { name } = heroes.find( heroe => heroe.id == 1);
console.log(existe())