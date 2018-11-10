<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
  
    <!-- font awesone -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">

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
<script src="https://maps.googleapis.com/maps/api/js?key={{env('GOOGLE_MAP_KEY')}}&callback=initMap" async defer></script>
<script src="{{ asset('js/app.js') }}"></script>



</html>