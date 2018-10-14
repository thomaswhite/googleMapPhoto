import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    photos : [],
    photo_index :0,
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
    setPosition(state,payload){
      state.position = payload.position;
      state.photo_index = payload.index;
    },
    setPhotos(state,data){
      state.photos = data;
      state.isReading = false;
      state.isUpload = false;
      state.position = 0;
      state.photo_index = 0;
    },
    backdropShow(state){
      state.backdrop = true;
      state.isReading = true;
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
    },
    deletePhoto(state,index){
      state.photos.splice(index, 1);
      state.position = 0;
    },
    isReading(state,data){
      state.isReading = data;
    }
  },
})