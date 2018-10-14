<template>
    <div class="carousel">
        <i class="fas fa-angle-left" v-on:click = "clickLeft"></i>

        <div class = "carousel-block">
            <div class = "carousel-slider" ref = "slider"
                 v-bind:style = "{ transform: 'translateX(' +position+ 'px)'}">

                <div class = "item" v-if = "isUpload">
                    <div class = "photo">
                        <img v-bind:src="uploadPhoto.src">
                    </div>
                    <div class = "select">
                        <div class = "yes"><i class="fas fa-check"></i></div>
                        <div class = "no" v-on:click = "cancel">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </div>


                <div class = "item" v-for = "item in item" ref = "item">
                    <div class = "photo">
                        {{item}}
                    </div>
                    <div class = "discription">
                            Both mean "when", so I was wondering what the difference is between them, and when each should be used.
                    </div>
                </div>
                
            </div>
        </div>

        <i class="fas fa-angle-right" v-on:click = "clickRight"></i>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                slider_width :0,
                item_width:0,
                item : ['a','b','c','d',]
            }
        },
        mounted(){
            this.slider_width = this.$refs.slider.clientWidth;
            this.item_width = this.$refs.item[0].clientWidth + 40;
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
                this.$store.commit('cancelUpload');
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
            }
        }
    }
</script>

<style lang="scss" scoped>
   @import './carousel.scss';
</style>
