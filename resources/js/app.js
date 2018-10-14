import Vue from 'vue'
import {store} from './store/store';
import App from './googlemap/index.vue'

require('./bootstrap');
window.Vue = require('vue');

new Vue({
    store,
    el: '#app',
    render: h => h(App),
})