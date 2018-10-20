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
                        <div class = "yes" v-on:click = "upload">
                            <i class="fas fa-check"></i>
                        </div>

                        <div class = "no" v-on:click = "cancel">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                </div>

                <!-- photo from db -->
                <div class = "item" ref = "item"
                     v-if = "photos.length > 0"
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
    export default {
        data () {
            return {
                sending : false,
                photoIndex : 0,
            }
        },
        created(){
            this.photoIndex = this.$store.state.photo_index;
        },
        mounted(){
            this.$store.commit('carousel/sliderWidth',this.$refs.slider.clientWidth);
            if(this.$refs.item){
                this.$store.commit('carousel/itemWidth',this.$refs.item[0].clientWidth + 40);
            }
        },
        methods: {
            clickLeft : function(){
                this.$store.commit('carousel/clickLeft');
            },
            clickRight : function(){
                this.$store.commit('carousel/clickRight');
            },
            upload : function(){
                if(this.uploadPhoto.value != ''){
                    this.$store.commit('map/spinner',true);

                    let data = new FormData();
                    data.append('id', this.markerId);
                    data.append('photo', this.uploadPhoto.value);

                    axios.post('/api/photo/upload',data).then((res)=>{
                        if(res.data.success){
                            let payload = {
                                id : res.data.id,
                                path : res.data.url
                            }
                            this.$store.commit('photo/addPhoto',payload);
                            this.$store.commit('photo/isUpload',false);
                            this.$store.commit('map/spinner',false);
                        }else{
                            this.$store.commit('map/spinner',true);
                        }
                        
                    }).catch((err)=>{ console.log(err) })
                }
            },
            cancel : function(){
                this.$store.commit('photo/isUpload',false);
            }
        },
        computed : {
            photos : function(){
                return this.$store.state.photo.photo_list;
            },
            uploadPhoto : function(){
                return this.$store.state.photo.uploadPhoto;
            },
            position : function(){
                return this.$store.state.carousel.position;
            },
            isUpload : function(){
                return this.$store.state.photo.isUpload;
            },
            markerId : function(){
                return this.$store.state.map.mark_id;
            }
        }
    }
</script>

<style lang="scss" scoped>
   @import './carousel.scss';
</style>
