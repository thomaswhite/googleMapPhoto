<template>
    <div class="google-map" id = "map"></div>
</template>

<script>
    import {map} from './mixin/map.js';
    import {marker} from './mixin/marker.js';

    export default {
        mixins : [map,marker],
        data () {
            return {
                center :{},
                markers:[],
                map:{}
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
    .google-map{
        width:100%;
        height:90%;
    }
</style>
