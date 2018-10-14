<template>
    <div class = "backdrop" id = "backdrop" v-on:click = "closeBackdrop">
        <div class = "control-area">
            <label class = "control" v-on:click = "uploadClick">
                Upload
                <input type="file" v-on:change="previewImage"/>
            </label>
            <div class = "control">Delete</div>
        </div>
        <div class = "carousel-area">
            <!-- Loading spinner -->
            <i class="fa fa-spinner fa-spin" v-if = "isReading"></i>
            
            <Carousel v-if = "!isReading"/>
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
            },
            closeBackdrop : function(event){
                console.log(event.target);
                if(event.target.id == "backdrop"){
                    this.$store.commit('backdropClose');
                }
            }
        },
        computed : {
            isUpload : function(){
                return this.$store.state.isUpload;
            },
            isReading : function(){
                return this.$store.state.isReading;
            }
        }
    }
</script>

<style lang="scss" scoped>
   @import './backdrop.scss';
</style>
