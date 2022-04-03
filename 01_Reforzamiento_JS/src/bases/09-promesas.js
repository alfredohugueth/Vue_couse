import { getHeroById } from "./bases/08-imp-exp";
// console.log('Inicio');

// new Promise( (resolve, reject) => {
//     console.log('cuerpo de la promesa');
//     resolve('Promesa resuelta')
// })
// .then( console.log )
// .catch( console.error )

// console.log('Fin');


const getHeroByIdAsync = ( id ) => {
    return new Promise( (res, rej) => {

        setTimeout( () => {
            const hero = getHeroById( id )
            if ( !hero ) rej('el heroe no existe')  
            res( hero );
        }, 1000)

    })
}


getHeroByIdAsync( 10 )
.then( console.log )
.catch( console.error )