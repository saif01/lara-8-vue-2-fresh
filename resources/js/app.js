require('./bootstrap');
window.Vue = require('vue').default;


// Project Routes
import router from './router'

import  BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue)


Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('main-vue', require('./components/main.vue').default);



const app = new Vue({
    el: '#app',
    router,
});
