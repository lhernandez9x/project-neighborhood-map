// Declare global variables
var map,
    marker,
    markers = [],
    infoWindow,
    isFiltered;

/**
 * Used to check if customer is using a mobile device. If true, some of the map options will render differently to better fit mobile devices. 
 **/
var isMobile = function() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
        return true;
    } else {
        return false;
    }
};

//This initializes the map and draws it to our page.
function initMap() {
    /**
     * Holds map center variable of El Paso Downtown
     */
    var elPasoDowntown = {
        lat: 31.7583499,
        lng: -106.487835
    };

    //This initiates the map and map options.
    map = new google.maps.Map(document.getElementById('map'), {
        center: elPasoDowntown,
        zoom: (function() {
            if (isMobile() === true) {
                return 17;
            } else {
                return 18;
            }
        })(),
        styles: [{
            "featureType": "poi",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "poi.park",
            "stylers": [{
                "visibility": "on"
            }]
        }]
    });
};

/**
 * Add markers to the map
 */

function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: 'images/marker.png',
        animation: google.maps.Animation.DROP
    })
    markers.push(marker);

    // bind marker to places
    places.marker = marker;
}

/**
 * This is our view model
 */
var viewModel = function() {
    var self = this,
        isFiltered;

    // create markers for each location

    for (let i = 0; i < places.length; i++) {
        var place = places[i];

        //add markers to map.
        setTimeout(addMarker(place.location), 500);
        
        //filter markers when filteredLocation() is run
        if (isFiltered == true) {
            place.marker.setVisible(true);
        } else if (isFiltered == false) {
            place.marker.setVisible(false);
        }
    };

    /**
     * Gets the value in search bar and filters all locations. Once locations are filtered they will be pushed to filtered array.
     */
    self.searchValue = ko.observable('');

    self.filteredLocations = ko.computed(function() {
        return ko.utils.arrayFilter(places, function(place) {
            if (place.title.toLowerCase().indexOf(self.searchValue().toLowerCase()) >= 0) {
                return true, isFiltered = true;
            }
        })
        return false
    });

    /**
     * Description
     

    function setVisibility() {
        if (isFiltered == true) {
            places.marker.setVisible(false);
        } else {
            places.marker.setVisible(true);
        }
    };*/


}

/**
 *This function closes our info window, so user can go to other location.
 */
function closeInfoWindow() {
    $('#info-section').html('');
};

//Initialize map on page.
initMap();

ko.applyBindings(new viewModel());