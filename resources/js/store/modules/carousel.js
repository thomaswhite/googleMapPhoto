const state = {
    slider_width : 0,
    item_width : 0,
    position : 0,
    photo_index : 0,
}
const mutations = {
    sliderWidth(state,width){
        state.slider_width = width;
    },
    itemWidth(state,width){
        state.item_width = width;
    },
    position(state,position){
        state.position = position;
    },
    photo_index(state,index){
        state.photo_index = index;
    },
    clickRight(state){
        if(state.item_width != 0){
            let nextPosition = state.position - state.item_width;
            if(nextPosition > -(state.slider_width)){
                state.photo_index++;
                state.position = nextPosition;
            }
        }
    },
    clickLeft(state){
        if(state.item_width != 0){
            let nextPosition = state.position + state.item_width;
            if(nextPosition <= 0){
                state.photo_index--;
                state.position = nextPosition;
            }
        }
    }
}
const actions = {
    backdropClose({commit}){
        commit('sliderWidth',0);
        commit('itemWidth',0);
        commit('position',0);
        commit('photo_index',0);
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}