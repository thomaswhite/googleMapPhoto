export const map = {
    methods : {
        initMap : function(){
            const element = document.getElementById('map');
            const options = {
                zoom : 3,
                center : new google.maps.LatLng(21.501527,-0.1921837),
                disableDoubleClickZoom : true,
                disableDefaultUI : true,
            };
            this.map = new google.maps.Map(element, options);

            // map even listener
            this.map.addListener('dblclick',this.addMarkr);
        },
    }
}