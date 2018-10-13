import Vue from 'vue'
import * as VueGoogleMaps from "vue2-google-maps";
import App from './googlemap/index.vue'

require('./bootstrap');
window.Vue = require('vue');

Vue.use(VueGoogleMaps, {
    load: {
      key: "AIzaSyD198yGEhOe7wh1NpIMc_Mdhy1bZMo9sv0",
      libraries: "places" // necessary for places input
    }
});


new Vue({
    el: '#app',
    render: h => h(App),
})