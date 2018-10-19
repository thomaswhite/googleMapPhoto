const state = {
   photo_list : [],
   isUpload : false,
   uploadPhoto : { src : "" , value : "" }
}

const getters = {}

const mutations = {
    isUpload(state,status){
        state.isUpload = status;
    },
    setPhotoList(state,data){
        state.photo_list = data;
    },
    uploadPhoto(state,payload){
        state.uploadPhoto.src = payload.src;
        state.uploadPhoto.value = payload.value;
    },
    addPhoto(state,payload){
        state.photo_list.splice(0,0,payload);
    }
}

const actions = {

}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}