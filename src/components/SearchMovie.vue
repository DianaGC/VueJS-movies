<template>
  <v-container v-if="data" grid-list-xl>
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
  <v-container v-else >
    <div class="text-xs-center">
      <h2>No Movie in API with {{this.name}}</h2>
      <v-card-actions>
        <v-btn flat color="green" v-on:click="getBack">back</v-btn>
      </v-card-actions>
    </div>
  </v-container>
</template>

<script>
import {getMovies} from '@/service/movies'

export default {
  name: 'SearchMovie',
  props: ['name'],
  data () {
    return {
      movies: [],
      data: false
    }
  },
  mounted () {
      getMovies(this.name)
        .then(response => {
          this.movies = response.Search;
          this.data = (response.Response === 'True')
        })
        .catch(e => console.log(e))
  },
  methods: {
    movieDetail (id) {
      this.$router.push('/movie/' + id)
    },

    getBack () {
      this.$router.push('/')
    }

  }
}
</script>
