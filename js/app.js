'use strict';

// Declare global variables
var map,
    place,
    marker = ko.observable(),
    markers = ko.observableArray(),
    elPasoDowntown,
    articles,
    allArticles;


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
    if (isMobile() == true) {
        $('.menu-bar').toggleClass('menu-open');
        $('.menu').toggleClass('menu-list-open');
    };
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
        }
    } else {
        return {
            lat: 31.7583499,
            lng: -106.487835
        }
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

    ko.applyBindings(new viewModel());
};

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
    })

    places[i].marker = marker; // bind marker to places
    markers.push(marker); // pushes markers to array

    //This adds a click event listener to each marker
    marker.addListener('click', function() {
        map.setCenter(place.location);
        (function() {
            if (isMobile() === true) {
                return map.setZoom(18);
            } else {
                return map.setZoom(19);
            }
        })();
        toggleBounce(place);
        infoWindow(place);
    })
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
        }, 1420);
    }
}



/**
 * Add infoWindow to each marker and list item
 */
function infoWindow(place) {
    var locationName = place.title,
        locationDesc = place.description,
        locationCategory = place.category,
        infoWindowElem = $('#info-section'),

        //API urls
        txHistURL = 'https://texashistory.unt.edu/explore/collections/EPMT/opensearch/?q=' + place.title + '&format=json', // API url for Texas History
        wikiURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + place.title + '&limit=500&format=json&callback=wikiResponse', // API url for Wikipedia

        /**
         * Create timeout for error handling on Wikipedia API
         */
        wikiRequestTimeout = setTimeout(function() {
            $('#articles').prepend('<h2 class="error">Wikipedia Articles could not be loaded. Please check your internet connection</h2>');
        }, 1000);
    
    // Appends all elements to info window
    infoWindowElem.html('<div class="info-window"> <button class="close-button" onclick="closeInfoWindow()">x</button> <button class="more-button" onclick="moreInfo()">More</button> <h3 class="location-title">' + locationName + '</h3> <p><span class="category">Categories: <em>' + locationCategory + '</em></span></p> <p class="location-desc">' + locationDesc + '</p> <h4 class="iw-title">Click below to go to the Wikipedia page for ' + locationName + '</h4> <div id="articles"> <h4 class="iw-title">Click images below to see historical newspapers about ' + locationName + '</h4> <div id="article-images"></div></div></div>');

    // TX Hist Api Call
    $.ajax({
        url: txHistURL,
    }).done(function(data) {
        var articleList = data.feed.entry;

        // iterates through API response and inputs info into the info window
        for (let i = 0; i < articleList.length; i++) {
            var articles = articleList[i],
                articleLink = articles.link,
                articleImg = articles.thumbnail,
                articleElem = '<a href="' + articleLink + 'hits/?q=' + locationName + '" target="_blank"><img src="' + articleImg + '"></a>'
            $('#article-images').append(articleElem);

        }
    }).fail(function() {
        $('#article-images').append('<h2 class="error">Texas History Articles could not be loaded. Please check your internet connection</h2>') // APi error handling
    })

    //Wikipedia API Call

    $.ajax({
        url: wikiURL,
        dataType: 'jsonp',
        success: function(response) {
            var articles = response[1];

            if (articles.length == 0) {
                $('#articles').prepend('<h4 class="no-articles">Sorry there were 0 articles found for ' + locationName + '</h4>');
            } else {

                for (var i = 0; i < articles.length; i++) {
                    var articleStr = articles[i],
                        articleURL = 'http://en.wikipedia.org/wiki/' + articleStr;

                    if (articleStr.includes('El Paso') || articles.length == 1) {
                        $('#articles').prepend('<li class="wiki-articles"><a href="' + articleURL + '" target="_blank">' + articleStr + '</a></li>');
                    }
                }
            }
            clearInterval(wikiRequestTimeout);
        }
    })
    return false;
}

/**
 *This function closes our info window, so user can go to other location.
 */
function closeInfoWindow() {
    $('#info-section').html('');
};

/**
 * Increases the height of the infoWindow in order to show the rest of the information on mobile devices
 */

function moreInfo() {
    var infoWindowElem = $('.info-window');
    infoWindowElem.css('top', '10vh')
    infoWindowElem.css('height', '100vh');
    infoWindowElem.css('overflow', 'scroll');
};

/**
 * This is our view model
 */
var viewModel = function() {
    var self = this;

    allArticles = ko.observableArray();
    console.log(allArticles());

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
    };

    /**
     * Calls out info window when menu item is clicked
     */
    self.currentMarker = ko.observable('');
    self.setCurrentMarker = function(place) {
        function placeClick(place) {
            infoWindow(place);
            map.setCenter(place.location);
            map.setZoom(18);
            toggleBounce(place);
        };
        google.maps.event.trigger(place, 'click', placeClick(place));
    }

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