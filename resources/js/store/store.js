import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    photos : [],
    marker_id : 0,
    position : 0,
    isUpload : false,
    isReading : true,
    uploadPhoto : { src : "" , value : "" },
    backdrop : false
  },
  mutations: {
    setMarkerId(state,id){
      state.marker_id = id;
    },
    setPosition(state,position){
      state.position = position;
    },
    setPhotos(state,data){
      state.photos = data;
      state.isReading = false;
    },
    backdropShow(state){
      state.backdrop = true;
    },
    backdropClose(state){
      state.backdrop = false;
      state.photos = [];
      state.position = 0;
    },
    isUpload(state,isUpload){
      state.isUpload = isUpload;
      state.position = 0;
      state.isReading = false;
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