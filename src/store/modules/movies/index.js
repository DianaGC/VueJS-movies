import {getMovies} from "@/service/movies";
import _ from 'lodash';
const state = {
    movies:[],
    value:'cry'
};
const actions = {

    getMovies: async function ({commit, state}) {
        const data = await getMovies(state.value)
            .then(response => {
                let movies = response.Search;
                movies = _.orderBy(movies, 'Year', 'imdbID')
                return movies
            })
            .catch(e => console.log(e))
        const movies = await data;
        commit('moviesMutation', movies)
    }
};
const mutation = {
    moviesMutation(state, moviesAction){
        state.movies = moviesAction
    }
};
export default {
    state,
    actions,
    mutation
}
