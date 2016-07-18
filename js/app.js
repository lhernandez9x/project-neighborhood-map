'use strict';

// Declare global variables
var map,
    place,
    marker = ko.observable(),
    markers = ko.observableArray(),
    elPasoDowntown,
    articles,
    vm;


// Any additional scripts for our view will be housed here.

/**
 * Opens menu on mobile to maximize window real estate.
 */

$('aside img').click(function() {
    $('.menu-bar').toggleClass('menu-open');
    $('.menu').toggleClass('menu-list-open');
});

/**
 * Closes menu on mobile to maximize window real estate.
 */

function hideMenu() {
    if (isMobile()) {
        $('.menu-bar').toggleClass('menu-open');
        $('.menu').toggleClass('menu-list-open');
    }
}

/**
 * Used to check if user is on a mobile device. If true, some of the map options will render differently to better fit mobile devices. Teken and modified from https://www.abeautifulsite.net/detecting-mobile-devices-with-javascript
 **/
var isMobile = function() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
        return true;
    } else {
        return false;
    }
};

//returns different lat and lng dependent on users browser type. (mobile or desktop)
elPasoDowntown = (function() {
    if (!isMobile()) {
        return {
            lat: 31.7584309,
            lng: -106.4886108
        };
    } else {
        return {
            lat: 31.7583499,
            lng: -106.487835
        };
    }
})();


function initMap() {

    //setting the map and map options
    map = new google.maps.Map(document.getElementById('map'), {
        center: elPasoDowntown,
        zoom: (function() {
            if (isMobile()) {
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
    vm = new viewModel();
    ko.applyBindings(vm);
}

/**
 * funtion that will create map markers and add to our map
 */

function addMarker(i, place) {
    var marker = new google.maps.Marker({
        position: place.location,
        map: map,
        icon: 'images/marker.png',
        title: location.title,
        animation: google.maps.Animation.DROP
    });

    places[i].marker = marker; // bind marker to places
    markers.push(marker); // pushes markers to array

    //This adds a click event listener to each marker
    marker.addListener('click', function() {
        map.panTo(place.location);
        map.setZoom(18);

        //calls our infoWindow and our toggleBounce functions
        toggleBounce(place);
        infoWindow(place);
        vm.infoWindowVisible(true);
        //$('#info-section').css('display', 'inherit');
    });
}
/**
 * This toggles the marker bounce animation after marker has been clicked. 
 */
function toggleBounce(place) {
    if (place.marker.getAnimation() !== null) {
        place.marker.setAnimation(null);
    } else {
        place.marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
            place.marker.setAnimation(null);
        }, 1400);
    }
}



/**
 * Add infoWindow to each marker and list item
 */
function infoWindow(place) {
    vm.locationName(place.title);
    vm.locationDesc(place.description);
    vm.locationCategory(place.category);

    //API urls
    var txHistURL = 'https://texashistory.unt.edu/explore/collections/EPMT/opensearch/?q=' + place.title + '&format=json', // API url for Texas History
        wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + place.title + '&limit=500&format=json&callback=wikiResponse', // API url for Wikipedia

        /**
         * Create timeout for error handling on Wikipedia API
         */
        wikiRequestTimeout = setTimeout(function() {
            $('#articles').prepend('<h2 class="error">Wikipedia Articles could not be loaded. Please check your internet connection</h2>');
        }, 1000);

    // TX Hist Api Call
    $.ajax({
        url: txHistURL,
    }).done(function(data) {
        vm.papers([]);
        var articleList = data.feed.entry,
            paper = {};

        // iterates through API response and inputs info into the info window
        for (let i = 0; i < articleList.length; i++) {
            var articles = articleList[i];
            paper.link = articles.link;
            paper.img = articles.thumbnail;
            vm.papers.push(paper);

        }
    }).fail(function() {
        $('#article-images').append('<h2 class="error">Texas History Articles could not be loaded. Please check your internet connection</h2>'); // APi error handling
    });

    //Wikipedia API Call

    $.ajax({
        url: wikiURL,
        dataType: 'jsonp',
        success: function(response) {
            vm.wikiArticles([]);
            var articles = response[1],
                article = {};

            //sets articles without 'El Paso' to false
            var hasElPaso = false;

            if (articles.length > 0) {
                for (var i = 0; i < articles.length; i++) {
                    var articleStr = articles[i];
                    if (articleStr.includes('El Paso') || articles.length == 1) {
                        article.title = articleStr;
                        article.link = 'http://en.wikipedia.org/wiki/' + articleStr;
                        vm.wikiArticles.push(article);

                        hasElPaso = true;
                    }
                }
            }
            // fallback if no articles or if none are of El Paso

            if (!hasElPaso) {
                article.title = 'Sorry there were 0 Articles found for ' + vm.locationName();
                article.link = '';
                vm.wikiArticles.push(article);
            }
            clearInterval(wikiRequestTimeout);
        }
    });
    return false;
}

/**
 *This function closes our info window, so user can go to other location.
 */
function closeInfoWindow() {
    
    vm.infoWindowVisible(false);

    if (isMobile) {
        var iw = $('.info-window');
        iw.css('top', '');
        iw.css('height', '');
        iw.css('overflow', '');
    }

}

/**
 * Increases the height of the infoWindow in order to show the rest of the information on mobile devices
 */

function moreInfo() {
    var infoWindowElem = $('.info-window');
    infoWindowElem.css('top', '0');
    infoWindowElem.css('height', '100vh');
    infoWindowElem.css('overflow', 'scroll');
}

/**
 * This is our view model
 */
var viewModel = function() {
    var self = this;

    self.locationName = ko.observable();
    self.locationDesc = ko.observable();
    self.locationCategory = ko.observable();
    self.wikiArticles = ko.observableArray();
    self.papers = ko.observableArray();
    self.infoWindowVisible = ko.observable(false);

    //observable arry that holds all locations
    self.unfilteredLocations = ko.observableArray();

    // iterates through our model to get API info for each location
    // and creates markers, unfilteredLocations

    for (let i = 0; i < places.length; i++) {
        place = places[i];

        //add markers to map.
        addMarker(i, place);

        // pushes all locations to array
        //used for initial and unfiltered lists and markers
        self.unfilteredLocations().push(place);
    }

    /**
     * Calls out info window when menu item is clicked
     */
    self.setCurrentMarker = function(place) {
        vm.infoWindowVisible(true);
        infoWindow(place);
        map.panTo(place.location);
        toggleBounce(place);
        google.maps.event.trigger(marker, 'click');
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
            });
        }
        return filteredList;
    });
};