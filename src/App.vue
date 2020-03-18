<template>
  <v-app>
    <v-app-bar app color="green">
      <v-container>
        <v-row>
          <h2>DG</h2>
          <v-spacer></v-spacer>
          <v-flex xs12 sm6 md3>
            <v-text-field
                    label='Movie Name'
                    v-model='searchMovieName'
            >
            </v-text-field>
          </v-flex>
          <v-btn flat v-on:click="searchMovie"
          >
            <span class="mr-2">Search</span>
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  components: {
  },
  data () {
    return {
      searchMovieName: ''
    }
  },
  methods: {
    searchMovie () {
      this.$router.push('/search/' + this.searchMovieName)
      this.searchMovieName = ''
    }
  }
};
</script>
