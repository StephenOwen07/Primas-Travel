// Google maps 
function initMap() {
  // Map Options
  var options = {
    zoom: 3,
    center: {
      lat: 22.3964,
      lng: 114.1095
    },
    gestureHandling: 'cooperative'
  }

  // New map
  var map = new google.maps.Map(document.getElementById('map'), options);

  // array of markers
  var markers = [{
      coords: {
        lat: 1.3041,
        lng: 103.8319
      },
      content: '<div class="info-window"><h3>Singapore Head Office</h3><p>Ion Orchard<br>2 Orchard Turn<br>Singapore<br> 238801</p></div>'
    },
    {
      coords: {
        lat: 22.2799,
        lng: 114.1737
      },
      content: '<div class="info-window"><h3>Hong Kong Office</h3><p>Central Plaza<br> 18 Harbour Rd<br> Wan Chai<br> Hong Kong</p></div>'
    },
    {
      coords: {
        lat: 25.0340,
        lng: 121.5645
      },
      content: '<div class="info-window"><h3>Taipei Office</h3><p>No.7, Sec. 5<br> Xinyi Rd<br> Xinyi Dist<br> Taipei City 110<br> Taiwan</p></div></p>'
    }
  ];

  // loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

  //  Add marker function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map
    });

    // check content 
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
        map.setZoom(17);
        map.setCenter(marker.getPosition());
      });
    }
  }
}