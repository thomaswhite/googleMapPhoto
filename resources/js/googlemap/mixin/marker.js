export const marker = {
    methods : {
        createMarker : function(mark){
            const position = new google.maps.LatLng(mark.lat,mark.lng);
            const marker = new google.maps.Marker({
                    position : position,
                    map : this.map,
                    id : mark.id
            });
            this.markers.push(marker);

            // marker even listener
            marker.addListener('click',this.markerClick.bind(marker,marker));
            marker.addListener('rightclick',this.deleteMarker.bind(marker,marker));
        },
        addMarkr : function(event){
            let mark = {
                lat : event.latLng.lat(),
                lng : event.latLng.lng()
            };

            axios.post('/api/mark/add',mark).then((res)=>{
                if(res.data.success){
                    mark.id = res.data.id;
                }
                this.createMarker(mark);
            }).catch((err)=>{ console.log(err) });
        },
        markerClick : function(marker){
            let cont = "<div class = 'iw-container'>aaa</div>"
            let infowindow = new google.maps.InfoWindow({
                content: cont,
            });
            infowindow.open(map, marker);
            console.log(infowindow);
        },
        deleteMarker : function(marker){
            let data = {
                id : marker.id
            }
            axios.post('/api/mark/delete',data).then((res)=>{
                if(res.data.success){
                    marker.setMap();
                }
            }).catch((err)=>{ console.log(err) });
        }
    }
}