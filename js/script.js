function initMap(){
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(48.8342, 9.1526);
  
  var mapOptions = {
    center: myLocation,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'media/explosion.gif'
  });

  var contentString = '<h1>The Porsche Museum</h1><p>One of the best places for my car lovers!</p>';

  var infowindow = new google.maps.InfoWindow ({
    content: contentString
  });

  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initMap);