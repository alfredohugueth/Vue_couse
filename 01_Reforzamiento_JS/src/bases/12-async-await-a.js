

const miPromesa = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            // resolve( 'Tenemos un valor en la promesa' )
            reject('Tenemos un error en la promesa')
        }, 1000);
    })
}

const medirTiempo = async() => {
    
    try {
        
        console.log('Inicio');
        
        const response = await miPromesa()
    
        console.log(response);
    
        console.log('Fin');
    
        return 'Fin de medir tiempo async'
        // throw 'Error en tiempo de ejecucion'

    } catch (error) {
        throw 'Error en tiempo de ejecucion'
    }
}

medirTiempo()
    .then( console.log )
    .catch( console.error )


    
