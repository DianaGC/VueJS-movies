<template>
  <v-container grid-list-xl>
    <v-flex xs12 sm12 md12>
      <v-card><h2 class="text-sm-center">Movies</h2></v-card>
    </v-flex>
    <v-layout wrap>
      <v-flex xs12 sm5 md4 v-for="item in movies" :key="item.imdbID">
        <v-card>
          <div>
            <v-img :src="item.Poster" contain aspect-ratio="1"></v-img>
          </div>
          <v-card-text>
            <div class="text-sm-left">
              <h3>{{ item.Title }}</h3>
              <div>Year: {{ item.Year }}</div>
              <div>Type: {{ item.Type }}</div>
              <div>IMDB-id: {{ item.imdbID }}</div>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="green" v-on:click="movieDetail(item.imdbID)">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: 'Home',
    mounted () {
      this.$store.dispatch('getMovies')
    },

    methods: {
      movieDetail (id) {
        this.$router.push('/movie/' + id)
      },
    },
    computed: {
      ...mapState(["movies"])
    }
  }
</script>
