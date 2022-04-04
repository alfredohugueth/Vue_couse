
// Options Api
const app = Vue.createApp({
    // template: `
    // <h1> Hola mundo </h1>
    // <p> Desde app.js</p>
    // `,
    
    data() {
        return {
            author : 'Bruce Wayne',
            quote : 'Soy Batman'
        }
    }
})

app.mount('#myApp')