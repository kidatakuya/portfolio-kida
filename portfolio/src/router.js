import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/home.vue';
import Test from './components/profileDetails/workDetails/test.vue';
import Masureita from './components/worksDetails/masureita.vue';
import Ecoloop from './components/worksDetails/ecoloop.vue';
import Momory from './components/worksDetails/momory.vue';
import Nomimatti from './components/worksDetails/nomimatti.vue';
import Nomimon from './components/worksDetails/nomimon.vue';
import Puzzle from './components/worksDetails/puzzle.vue';


Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {path:'/',component:Home},
        {path:'/test',component:Test},
        {path:'/masureita',component:Masureita},
        {path:'/ecoloop',component:Ecoloop},
        {path:'/momory',component:Momory},
        {path:'/nomimatti',component:Nomimatti},
        {path:'/nomimon',component:Nomimon},
        {path:'/puzzle',component:Puzzle}
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { x: 0, y: 0 }
        }
      }
      
})