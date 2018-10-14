<template>
    <div class="carousel">
        <i class="fas fa-angle-left" v-on:click = "clickLeft"></i>

        <div class = "carousel-block">
            <div class = "carousel-slider" ref = "slider"
                 v-bind:style = "{ transform: 'translateX(' +position+ 'px)'}">

                <!-- upload preview -->
                <div class = "item" v-if = "isUpload">
                    <div class = "photo">
                        <img v-bind:src="uploadPhoto.src">
                    </div>
                    <div class = "select">
                        <div class = "yes" v-if = "!sending" v-on:click = "upload">
                            <i class="fas fa-check"></i>
                        </div>
                        <div class = "yes" v-if = "sending">
                            <i class="fa fa-spinner fa-spin"></i>
                        </div>

                        <div class = "no" v-on:click = "cancel">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </div>

                <!-- photo from db -->
                <div class = "item" ref = "item"
                     v-for = "item in photos" >
                    <div class = "photo">
                        <img v-bind:src="item.path">
                    </div>
                    <div class = "discription"></div>
                </div>
            </div>
        </div>

        <i class="fas fa-angle-right" v-on:click = "clickRight"></i>
    </div>
</template>

<script>
    import {photo} from '../../mixin/photo';
    export default {
        mixins : [photo],
        data () {
            return {
                slider_width :0,
                item_width:0,
                sending : false
            }
        },
        created(){
            
        },
        mounted(){
            this.slider_width = this.$refs.slider.clientWidth;
            if(this.$refs.item){
                this.item_width = this.$refs.item[0].clientWidth + 40;
            }
        },
        methods: {
            clickLeft : function(){
                let nextPosition = this.position + this.item_width;
                if(nextPosition <= 0){
                    this.$store.commit('setPosition',nextPosition);
                }
            },
            clickRight : function(){
                let nextPosition = this.position - this.item_width
                if(nextPosition > -(this.slider_width)){
                    this.$store.commit('setPosition',nextPosition);
                }
            },
            cancel : function(){
                if(this.photos.length != 0){
                    this.$store.commit('cancelUpload');
                }else{
                    this.$store.commit('backdropClose');
                } 
            }
        },
        computed : {
            photos : function(){
                return this.$store.state.photos;
            },
            uploadPhoto : function(){
                return this.$store.state.uploadPhoto;
            },
            position : function(){
                return this.$store.state.position;
            },
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
   @import './carousel.scss';
</style>
