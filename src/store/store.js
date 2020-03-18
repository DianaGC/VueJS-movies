import Vue from "vue";
import Vuex from "vuex";
// import actions from "./modules/movies/actions/actions"
// import mutation from "./modules/movies/mutations/mutations";
// import state from "./modules/movies/state";
import movies from "./modules/movies"

Vue.use(Vuex);

export default new Vuex.Store({modules:{movies}});
