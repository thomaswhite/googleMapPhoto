export const photo = {
    methods : {
        upload : function(){
            if(this.uploadPhoto.value != ''){
                this.sending = true;

                let data = new FormData();
                data.append('id', this.markerId);
                data.append('photo', this.uploadPhoto.value);
                
                axios.post('/api/photo/upload',data).then((res)=>{
                    this.sending = false;
                    this.$store.commit('isUpload',false);
                }).catch((err)=>{ console.log(err) })
            }
        }
    }
}