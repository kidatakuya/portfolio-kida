import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Test from './components/profileDetails/workDetails/test.vue';

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {path:'/',component:Home},
        {path:'/test',component:Test}]
})