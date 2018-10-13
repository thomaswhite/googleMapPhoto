<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    {{--CSRF Token--}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>My Google Map</title>
</head>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<body>
    <div id="app"></div>
</body>

<script>
    // this function is google map api default require function, juset leave it empty
    function initMap() {}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD198yGEhOe7wh1NpIMc_Mdhy1bZMo9sv0&callback=initMap" async defer></script>
<script src="{{ asset('js/app.js') }}"></script>



</html>