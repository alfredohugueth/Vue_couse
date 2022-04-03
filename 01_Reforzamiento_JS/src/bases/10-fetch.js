
const apiKey = 'z36x21ftLyIxTGDg0mgnNOV6hzlVdSAX'


// make http request via fetch
// fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
//     .then( res => {
//         res.json()
//             .then( response => {
//                 console.log(response);
//             })
//     })
//     .catch(console.error)

// more readeable code using fetch

fetch( `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then( resp => resp.json() )
    .then( ( {data} ) => {
        const { url } = data.images.original;

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })
