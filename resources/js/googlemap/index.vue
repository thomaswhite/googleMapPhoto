<template>
    <div class="google-map" id = "map"></div>
</template>

<script>

    export default {
        data () {
            return {
                center :{},
                markers:[],
                map:{}
            }
        },
        created() {

        },
        mounted(){
            // init google map
            this.initMap();

            // load markers
            axios.get('/api/mark/list').then((res)=>{
                this.markers = res.data;
                for(let i in this.markers){
                    this.createMarker(this.markers[i]);
                } 
            }).catch((err)=> { console.log(err) });
        },
        methods: {
            initMap : function(){
                const element = document.getElementById('map');
                const options = {
                    zoom : 4,
                    center : new google.maps.LatLng(21.501527,-0.1921837),
                    disableDoubleClickZoom : true,
                    disableDefaultUI : true,
                };
                this.map = new google.maps.Map(element, options);

                // map even listener
                this.map.addListener('dblclick',this.clickAddMark);
            },
            createMarker : function(mark){
                const position = new google.maps.LatLng(mark.lat,mark.lng);
                const marker = new google.maps.Marker({
                        position : position,
                        map : this.map,
                        id : mark.id
                });

                // marker even listener
                marker.addListener('click',this.markerClick);
            },
            clickAddMark : function(event){
                let mark = {
                    lat : event.latLng.lat(),
                    lng : event.latLng.lng()
                };

                axios.post('/api/mark/add',mark).then((res)=>{
                    if(res.data.success){
                        mark.id = res.data.id;
                    }
                    this.createMarker(mark);
                })
                
            },
            markerClick : function(e){
                const position = new google.maps.LatLng(11,22);
                const marker = new google.maps.Marker({position,map});
            },
        },
    }
</script>

<style lang="scss">
    .google-map{
        width:100%;
        height:90%;
    }
</style>
