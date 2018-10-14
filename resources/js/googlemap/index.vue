<template>
    <div class = "window">
        <Backdrop v-if = "isShow"/>
        <div class="google-map" id = "map"></div>
    </div>
    
</template>

<script>
    import {map} from './mixin/map.js';
    import {marker} from './mixin/marker.js';
    import backdrop from './component/backdrop/backdrop.vue';

    export default {
        mixins : [map,marker],
        components:{
            'Backdrop':backdrop
        },
        data () {
            return {
                markers : [],
                map : {},
                isShow : true
            }
        },
        mounted(){
            // init google map
            this.initMap();

            // load markers
            axios.get('/api/mark/list').then((res)=>{
                for(let i in res.data){
                    this.createMarker(res.data[i]);
                } 
            }).catch((err)=> { console.log(err) });
        },
        methods: {
            // markerClick : function(e){
            //     const position = new google.maps.LatLng(11,22);
            //     const marker = new google.maps.Marker({position,map});
            // },
        },
    }
</script>

<style lang="scss">
    .window{
        width:100%;
        height:100%;
    }
    .google-map{
        width:100%;
        height:90%;
    }
    .iw-container{
        width:100px;
        height:100px;
        color:red;
        border-radius: 15px;
    }
</style>
