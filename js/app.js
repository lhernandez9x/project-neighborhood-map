// Declare global variables
var map,
    place,
    marker,
    markers = [],
    currentMarker,
    txHistArticles = [],
    foursquareVenues = [];


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
        position: location.location,
        map: map,
        icon: 'images/marker.png',
        animation: google.maps.Animation.DROP
    })

    markers.push(marker);

    // bind marker to places
    places[i].marker = marker;

    //This adds a click event listener to each marker
    marker.addListener('click', function() {
        map.setCenter(location.location);
        (function() {
            if (isMobile() === true) {
                return map.setZoom(19);
            } else {
                return map.setZoom(20);
            }
        })();
        toggleBounce();
        infoWindow(location);
    });

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 1420);
        }
    }
}



/**
 * Add infoWindow to each marker and list item
 */
function infoWindow(place) {
    var locationName = place.title,
        locationDesc = place.description,
        locationCategory = place.category,
        txHistURL = 'https://texashistory.unt.edu/explore/collections/EPMT/opensearch/?q=' + place.title + '&format=json',
        infoSectionElem = $('#info-section'); // gets the infoWindow element
    infoSectionElem.html('<div class="info-window"><button class="close-button" onclick="closeInfoWindow()">x</button><button class="more-button" onclick="moreInfo()">More</button><h3 class="cf">' + locationName + '</h3><p>Categories: <em>' + locationCategory + '</em></p><p class="location-desc">' + locationDesc + '</p><div id="articles"><h4>Click to see articles about ' + locationName + '</h4></div></div>');

    /**
     * This calls the api and inputs info into the corresponding info window.
     */
    $.ajax({
        url: txHistURL,
    }).success(function(data) {
        var articleList = data.feed.entry;

        // iterates through API response and inputs info into the info window
        for (let i = 0; i < articleList.length; i++) {
            var articles = articleList[i],
                articleLink = articles.link,
                articleImg = articles.thumbnail,
                articleElem = '<a href="' + articleLink + 'hits/?q=' + locationName + '"><img src="' + articleImg + '"></a>'
            $(articleElem).insertAfter('#articles');

        }
    }).error(function() {
        $('<h2 align="center">Texas History Articles could not be loaded. Please check your internet connection</h2>').insertAfter('.location-desc');
    })

}

/**
 *This function closes our info window, so user can go to other location.
 */
function closeInfoWindow() {
    $('#info-section').html('');
};

/**
 * Increases the height of the infoWindow to 90vh in order to show the rest of the information
 */

function moreInfo() {
    var infoWindowElem = $('.info-window');
    infoWindowElem.css('height', '80vh');
};

/**
 * Gets APIs from Texas History Online (https://texashistory.unt.edu) and pushes info into an array to be called within the infoWindow.
 */
//function getAPI(place) {
//    var txHistURL = 'https://texashistory.unt.edu/explore/collections/EPMT/opensearch/?q=' + place.title + '&format=json'
//    $.ajax({
//        url: txHistURL,
//    }).success(function(data){
//        var articleList = data.feed.entry;
//        for (let i = 0; i < articleList.length; i++){
//            var articles = articleList[i];
//            txHistArticles.push({name: place.title, link: articles.link, thumbnail: articles.thumbnail});
//            console.log(txHistArticles);
//            console.log(txHistArticles.length);
//        }
//    })
//}

/**
 * Gets API from FourSquare and inputs data into infowindow.
 */


/**
 * This is our view model
 */
var viewModel = function() {
    var self = this;

    //observable arry that holds all locations
    self.unfilteredLocations = ko.observableArray();

    // iterates through our model to get API info for each location
    // and creates markers, unfilteredLocations

    for (let i = 0; i < places.length; i++) {
        place = places[i];

        //API calls for Texas History and Foursquare
        //getAPI(place)

        //add markers to map.
        addMarker(i, place);

        // pushes all locations to array
        //used for initial and unfiltered lists and markers
        self.unfilteredLocations().push(place);

        self.currentLocation = ko.observable();
        self.setCurrentLocation = ko.computed(function() {
            self.currentLocation = place.marker;
        });
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
                }
                return false;
            })
        }
        return filteredList;
    })

}

//Initialize map on page.
initMap();

ko.applyBindings(new viewModel());