import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    photos : [],
    marker_id : 0,
    position : 0,
    isUpload : false,
    uploadPhoto : { src : "" , value : "" },
  },
  mutations: {
    setMarkerId(state,id){
      state.marker_id = id;
    },
    setPosition(state,position){
      state.position = position;
    },
    isUpload(state,isUpload){
      if(isUpload){
        state.position = 0;
      }
      state.isUpload = isUpload
    },
    previewImage(state,payload){
      state.uploadPhoto.value = payload.value;
      state.uploadPhoto.src = payload.src;
    },
    cancelUpload(state){
      state.isUpload = false;
      state.uploadPhoto.src = "",
      state.uploadPhoto.value = ""
    }
  },
})