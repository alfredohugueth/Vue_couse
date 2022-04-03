import axios from "axios";

const apiKey = 'z36x21ftLyIxTGDg0mgnNOV6hzlVdSAX'
// https://api.giphy.com/v1/gifs/random?api_key=${apiKey}

// create a instance of axios 
const giphyApi = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`,
    params: {
        api_key: apiKey,
    }
})


giphyApi.get('/random')
    .then( ( res ) => {
        const { data } = res.data
        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })