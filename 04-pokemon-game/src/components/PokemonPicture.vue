<template>
  <h1>
    <div class="pokemon-container">
    <!--  Sin color  -->

    <img v-if="showPokemon"
         :src="imgSrc"
         alt="pokemon">

    <img v-else
         class="hidden-pokemon"
         :src="imgSrc"
         alt="pokemon">
    </div>
  </h1>
</template>

<script>
export default {
  name: "PokemonPicture",
  props: {
    pokemonId : {
      required: true,
      type : Number,
    },
    showPokemon : {
      required: true,
      type: Boolean
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
    }
  }
}
</script>

<style scoped>
/* Pokemon Picture */
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>