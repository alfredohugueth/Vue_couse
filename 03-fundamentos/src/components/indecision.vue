<template>

    <!--suppress HtmlUnknownTarget -->
  <img :src="img" alt="Indecition">
    
    <div class="bg-dark"></div>

    <div class="div indecision-container">
        
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>
            Recuerda terminar con un signo de interrogación (?)
            
        </p>

        <div v-if="isValidQuestion">
            <h2>
                {{ question }}
            </h2>
            <h1>
              {{ answer === 'yes' ? 'Si' : 'No' }}
            </h1>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            question: 'Hola Mundo',
            answer: null,
            img: null,
            isValidQuestion: false
        }
    },
    methods: {
      async getAnswers() {

        try {

          this.answer = 'Pensando...'

          const { answer, image } = await fetch('https://yesno.wtf/api')
              .then( res => res.json() )

          this.answer = answer
          this.img = image

        } catch ( error ) {

          this.answer = 'API not loading data correctly'
          this.img = null

        }
      }
    },
    watch: {
      question( value ) {
        this.isValidQuestion = false

        console.log( {value} )

        if( value.includes('?')) {
          this.isValidQuestion = true
          this.getAnswers()
        }
      }
    }
}
</script>

<style scoped>
  img, .bg-dark {
        height: 100vh;
        left: 0;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>