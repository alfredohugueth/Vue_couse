<template>
  <h1>
    ¿Quién es ese pokémon?
  </h1>

  <PokemonPicture :pokemonId="9" :showPokemon="false"/>

  <PokemonOptions :pokemon-arr="pokemonArr"/>

</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from "@/components/PokemonOptions";
import getPokemonOptions from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data() {
    return {
      pokemonArr : []
    }
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions()
      console.log( this.pokemonArr )
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>