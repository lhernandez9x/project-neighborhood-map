// Declare global variables
var map,
    place,
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

function addMarker(i, location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: 'images/marker.png',
        animation: google.maps.Animation.DROP,
        visible: false
    })
    markers.push(marker);

    // bind marker to places
    places[i].marker = marker;
}

function displayMarkers() {
    this.marker = places.marker;
    this.marker.setVisible(true);
}

function hideMarkers() {
    this.marker = places.marker;
    this.marker.setVisible(false);
}

/**
 * This is our view model
 */
var viewModel = function() {
    var self = this;

    //observable arry that holds all locations
    self.unfilteredLocations = ko.observableArray();

    // create markers for each location

    for (let i = 0; i < places.length; i++) {
        place = places[i];

        //add markers to map.
        addMarker(i, place.location);
        
        self.unfilteredLocations().push(place)
    };

    /**
     * Gets the value in search bar and filters all locations. Once locations are filtered they will be pushed to filtered array.
     */
    self.searchValue = ko.observable('');

    self.filteredLocations = ko.computed(function() {
        var filter = self.searchValue().toLowerCase(),
            filteredList,
            location;

        if (!filter) {
            for (let i = 0; i < places.length; i++) {
                location = places[i].marker;
                location.setVisible(true);
                filteredList = self.unfilteredLocations();
            }
        } else {
            filteredList = ko.utils.arrayFilter(places, function(place) {
                if (place.title.toLowerCase().indexOf(filter) != -1) {
                    place.marker.setVisible(true);
                    return true;
                } else {
                    place.marker.setVisible(false);
                } return false;
            })
        }
        return filteredList;
    })
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