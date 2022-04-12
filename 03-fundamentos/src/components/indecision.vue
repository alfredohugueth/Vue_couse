<template>

    <!--suppress HtmlUnknownTarget -->
  <img src="https:via.placeholder.com/250" alt="Indecition">
    
    <div class="bg-dark"></div>

    <div class="div indecision-container">
        
        <input type="text" placeholder="Hazme una pregunta" v-model="question">
        <p>
            Recuerda terminar con un signo de interrogación (?)
            
        </p>

        <div>
            <h2>
                {{ question }}
            </h2>
            <h1>
                Sí, No, ...Pensando
            </h1>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            question: ''
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