<template>
  <h2>
      {{ customTitle }} {{ start }}
  </h2>
  <p>
      {{ counter }}
      <sup>2</sup>
      = {{ squareCounter }}
  </p>

  <p data-testid="counter">
    {{ counter }}
  </p>

  <div class="buttons-changes">
    <button @click="sumCounter(1)">
        +1
    </button>

    <button @click="sumCounter(-1)">
        -1
    </button>
  </div>


</template>

<script>
export default {
    props: {
        title : {
            type: String,
            required: true,
            default: 'Contador'
        },
        start : {
            type: Number,
            required: true,
            default: 15,
            validator( value ) {
                return value >= 0
            }
        }
    },  
    data() {
        return {
            counter : this.start
        }
    },
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        sumCounter( value ) {
            this.counter = this.counter + value
        }
    },
    computed: { // se guardan en el cache, si se usa mas de una vez es recomendable usar computadas
        squareCounter() {
            return this.counter * this.counter
        },
        customTitle() {
            return this.title || 'Contador'
        }
    }
}
</script>

<style>
button {
    background-color: #64bb87;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>