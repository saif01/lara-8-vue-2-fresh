import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './components/home.vue'

const router = new VueRouter({
    mode: 'history',
    routes : [

        { 
            path: '/', 
            component: Home,
            name: 'Home',
        },

    ]
});

export default router;