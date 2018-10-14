<template>
    <div class = "backdrop">
        <div class = "control-area">
            <label class = "control" v-on:click = "uploadClick">
                Upload
                <input type="file" v-on:change="previewImage"/>
            </label>
            <div class = "control">Delete</div>
        </div>
        <div class = "carousel-area">
            <Carousel/>
        </div>
    </div>
</template>

<script>
    import carousel from '../carousel/carousel.vue';
    
    export default {
        components:{
            'Carousel' : carousel
        },
        data () {
            return {
            }
        },
        mounted(){
        },
        methods : {
            uploadClick : function(){
                this.$store.commit('isUpload',true);
            },
            previewImage : function(event){
                let payload = {};

                let reader = new FileReader();
                reader.readAsDataURL(event.target.files[0]);
                reader.onload = () => {
                    payload.src = reader.result;
                    payload.value = event.target.files[0];
                    this.$store.commit('previewImage',payload);
                }
            }
        },
        computed : {
            markerId : function(){
                return this.$store.state.marker_id;
            },
            isUpload : function(){
                return this.$store.state.isUpload;
            }
        }
    }
</script>

<style lang="scss" scoped>
   @import './backdrop.scss';
</style>
