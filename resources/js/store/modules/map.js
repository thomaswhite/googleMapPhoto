const state = {
    backdrop : false,
    spinner : false,
    mark_id : 0,
}

const getters = {}

const mutations = {
    backdrop(state,status){
        state.backdrop = status;
    },
    spinner(state,status){
        state.spinner = status;
    },
    setMarkerId(state,id){
        state.mark_id = id;
    },
}

const actions = {
    clickMarker({commit},id){
        commit('backdrop',true);
        commit('spinner',true);
        commit('setMarkerId',id);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}