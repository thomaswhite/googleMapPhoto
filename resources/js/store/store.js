import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    backdrop : false,
    spinner : false,
    photo_list : [],
    // photo_index :0,
    marker_id : 0,
    // position : 0,
    // isUpload : false,
    // isReading : true,
    // uploadPhoto : { src : "" , value : "" },
    
  },
  mutations: {
    
    
    setPhotoList(state,data){
      state.photo_list = data;
    }
    // setPosition(state,payload){
    //   state.position = payload.position;
    //   state.photo_index = payload.index;
    // },
    // setPhotos(state,data){
    //   state.photos = data;
    //   state.isReading = false;
    //   state.isUpload = false;
    //   state.position = 0;
    //   state.photo_index = 0;
    // },
    // backdropShow(state){
    //   state.backdrop = true;
    //   state.isReading = true;
    // },
    // backdropClose(state){
    //   state.backdrop = false;
    //   state.photos = [];
    //   state.position = 0;
    // },
    // isUpload(state,isUpload){
    //   state.isUpload = isUpload;
    //   state.position = 0;
    //   state.isReading = false;
    // },
    // isReading(state,data){
    //   state.isReading = data;
    // },
    // previewImage(state,payload){
    //   state.uploadPhoto.value = payload.value;
    //   state.uploadPhoto.src = payload.src;
    // },
    // cancelUpload(state){
    //   state.isUpload = false;
    //   state.uploadPhoto.src = "",
    //   state.uploadPhoto.value = ""
    // },
    // deletePhoto(state,index){
    //   state.photos.splice(index, 1);
    //   state.position = 0;
    // },
  },
  actions : {
    
  }
})