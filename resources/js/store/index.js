import Vue from 'vue';
import Vuex from 'vuex';
import carousel from './modules/carousel';
import map from './modules/map';
import photo from './modules/photo';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carousel,
    map,
    photo
  },
})