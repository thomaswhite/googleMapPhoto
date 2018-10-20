<template>
    <div class = "window">
        <Backdrop v-if = "backdrop"/>
        <div class="google-map" id = "map"></div>
    </div>
    
</template>

<script>
    import {map} from './mixin/map.js';
    import backdrop from './component/backdrop/backdrop.vue';

    export default {
        mixins : [map],
        components:{
            'Backdrop':backdrop
        },
        data () {
            return {
                markers : [],
                map : {},
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
            createMarker : function(mark){
                const position = new google.maps.LatLng(mark.lat,mark.lng);
                const marker = new google.maps.Marker({
                        position : position,
                        map : this.map,
                        id : mark.id
                });
                this.markers.push(marker);

                // marker even listener
                marker.addListener('click',this.clickMarker.bind(marker,marker));
                marker.addListener('rightclick',this.deleteMarker.bind(marker,marker));
            },
            addMarkr : function(event){
                let mark = {
                    lat : event.latLng.lat(),
                    lng : event.latLng.lng()
                };

                axios.post('/api/mark/add',mark).then((res)=>{
                    if(res.data.success){
                        mark.id = res.data.id;
                    }
                    this.createMarker(mark);
                }).catch((err)=>{ console.log(err) });
            },
            clickMarker : function(marker){
                let data = {
                    id : marker.id
                }
                this.$store.dispatch('map/clickMarker',marker.id);
                
                axios.post('/api/photo/list',data).then((res)=>{
                    if(res.data.success != false){
                        this.$store.commit('photo/isUpload',false);
                        this.$store.commit('photo/setPhotoList',res.data);
                        this.$store.commit('map/spinner',false);
                    }else{
                        this.$store.commit('photo/setPhotoList',[]);
                        this.$store.commit('photo/isUpload',true);
                        this.$store.commit('map/spinner',false);
                    }
                }).catch((err)=> { console.log(err) });
            },
            deleteMarker : function(marker){
                let data = {
                    id : marker.id
                }
                axios.post('/api/mark/delete',data).then((res)=>{
                    if(res.data.success){
                        marker.setMap();
                    }
                }).catch((err)=>{ console.log(err) });
            },
        },
        computed : {
            backdrop : function(){
                return this.$store.state.map.backdrop;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .window{
        width:100%;
        height:100%;
    }
    .google-map{
        width:100%;
        height:90%;
    }
</style>
