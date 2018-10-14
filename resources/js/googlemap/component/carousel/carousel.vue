<template>
    <div class="carousel">
        <i class="fas fa-angle-left" v-on:click = "clickLeft"></i>

        <div class = "carousel-block">
            <div class = "carousel-slider" ref = "slider"
                 v-bind:style = "{ transform: 'translateX(' +position+ 'px)'}">

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
                position:0,
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
                    this.position = nextPosition; 
                }
            },
            clickRight : function(){
                let nextPosition = this.position - this.item_width
                if(nextPosition > -(this.slider_width)){
                    this.position = nextPosition; 
                }
            }
        },
    }
</script>

<style lang="scss">
   @import './carousel.scss';
</style>
