import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Movie from './components/MovieDetail'
import SearchMovie from './components/SearchMovie'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/movie/:id',
        name: 'Movie',
        props: true,
        component: Movie
    },
    {
        path: '/search/:name',
        name: 'SearchMovie',
        props: true,
        component: SearchMovie
    }];

const router = new VueRouter({
    routes
});

export default router;

