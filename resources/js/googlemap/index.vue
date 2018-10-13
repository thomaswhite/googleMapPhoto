<template>
    <div id = "app">
        <GmapMap map-type-id="terrain"
                 style="width: 500px; height: 300px"
                 :center="center"
                 :zoom="3">
            <GmapMarker v-for="(m, index) in markers"
                        :key="index"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"/>
        </GmapMap>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                center :{
                    lat : 50,
                    lng : 20 
                },
                markers:[]
            }
        },
        created() {
            axios.get('/api/mark/list').then((res)=>{
                for(let i in res.data){
                    let mark = {
                        position :{
                            lat : res.data[i].lat,
                            lng : res.data[i].lng
                        }
                    }
                    this.markers.push(mark);
                }
            }).catch((err)=> { console.log(err) });
        },
        methods: {
          
        },
    }
</script>

<style lang="scss">
    .map{
        width:500px;
        height:500px;
    }
</style>
