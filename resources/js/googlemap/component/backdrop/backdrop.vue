<template>
    <div class = "backdrop">
        <div class = "control-area">
            bbbb
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
        methods: {
        },
    }
</script>

<style lang="scss">
   .backdrop{
       width:100%;
       height:100%;
       position:fixed;
       display: flex;
       flex-direction: column;
       align-items: center;
       background-color: rgba(175, 174, 174, 0.3);
       /* opacity: 0.3; */
       z-index: 100;
   }
   .carousel-area{
       width:60%;
       height:70%;
       background-color: antiquewhite;
   }
   .control-area{
       width:100%;
       height:10%;
       background-color: gold;
   }
</style>
