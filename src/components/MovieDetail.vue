<template>
 <v-container>
   <v-layout wrap>
     <v-flex xs12 mr-1 ml-1>
       <v-card>
         <v-img contain
                :src="movieDetail.Poster"
                aspect-ratio="2"></v-img>
         <v-card-text primary-title>
           <div>
             <h1 class="headline mb-0">{{movieDetail.Title}}-{{movieDetail.Year}}</h1>
             <p>{{ movieDetail.Plot}} </p>
             <h3>Actors: </h3>{{movieDetail.Actors}}
             <h3>Awards: </h3> {{movieDetail.Awards}}
             <h3>Genre: </h3> {{movieDetail.Genre}}
           </div>
         </v-card-text>
         <v-card-actions>
           <v-btn flat color="green" v-on:click="getBack">back</v-btn>
         </v-card-actions>
       </v-card>
     </v-flex>
   </v-layout>

   <v-layout  wrap>
     <v-flex xs12>
       <div class="justify-center" >
         <v-dialog  v-model="dialog" width="500">
           <v-btn  slot="activator"
                   color="black"
                   @click.stop="dialog = true"
                   dark>
             View Ratings
           </v-btn>
           <v-card>
             <v-card-title class="headline grey lighten-2" primary-title>
               Ratings
             </v-card-title>
             <v-card-text>
               <table style="width:100%" >
                 <tr>
                   <th>Source</th>
                   <th>Ratings</th>
                 </tr>
                 <tr v-for="(rating, index) in ratings" :key="index">
                   <td align="center">{{rating.Source}}</td>
                   <td align="center">
                     <v-rating :half-increments="true" :value="rating.Value"></v-rating>
                   </td>
                 </tr>
               </table>
             </v-card-text>
             <v-divider></v-divider>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn
                       color="primary"
                       flat
                       v-on:click="dialog = false"
               >

                 OK
               </v-btn>
             </v-card-actions>
           </v-card>
         </v-dialog>
       </div>
     </v-flex>
   </v-layout>
   <Comments></Comments>
 </v-container>

</template>

<script>
import {getMovieDetail} from '@/service/movies'
import Comments from "./Comments";

export default {
  components: {Comments},
  props: ['id'],
  data () {
    return {
      movieDetail: '',
      ratings: '',
      dialog: false
    }
  },
  mounted () {
    getMovieDetail(this.id)
      .then(response => {
        this.movieDetail = response;
        this.ratings = response.Ratings;
        this.ratings.forEach(function (element) {
          element.Value = parseFloat(element.Value)
          element.Value = element.Value <= 10 ? element.Value / 2 : element.Value / 20
        })
      })
      .catch(e => console.log(e))
  },
  methods: {
    getBack () {
      this.$router.push('/')
    }
  }
}
</script>
