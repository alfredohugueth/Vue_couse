
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
    },
    methods: {
        changeQuote() {
            this.author = 'Fernando Herrera'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')