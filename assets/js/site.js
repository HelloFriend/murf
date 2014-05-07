// Create a map in the div #map
var map = L.mapbox.map('map', 'justinthrelkeld.map-sx96mhp3');

map.setView([35.854513,-86.415847], 15);

$( document ).ready(function(){
  console.log("initialized");
  $('a.event').on('mouseenter', function(){
    console.log($(this).data('lat') + ', ' + $(this).data('lon'));

    map.panTo([$(this).data('lat'), $(this).data('lon')],{duration: 7, easeLinearity:.1});

  });
});
