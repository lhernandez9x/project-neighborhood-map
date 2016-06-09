var viewModel = function() {
    var self = this;

    // Texas History API and Information
    var txHistURL = 'http://texashistory.unt.edu/explore/collections/EPMT/opensearch/?format=json&q=';

    function txHistAPI(locationTitle) {
        XMLHttpRequest.open("POST", txHistURL + locationTitle, true);
        XMLHttpRequest.send();
    }

    var map, place, marker, placeImg, placeLat, placeLng, placeTitle, placePosition, placeDesc,
        allMarkers = [],
        isMobile = function() {
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
                return true;
            } else {
                return false;
            }
        },
        infoSection = document.getElementById('info-section'),
        infoWindowElem = document.createElement('div'),
        infoWindowTitle = document.createElement('h3'),
        infoWindowDesc = document.createElement('p');
    infoWindowList = document.createElement('ul'),
        infoWindowListItem = document.createElement('li'),
        infoWindowButton = document.createElement('button'),
        infoButtonLabel = document.createTextNode('x');

    //This initializes the map and draws it to our page.

    function initMap() {

        //This initiates the map and map options.
        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: 31.759689,
                lng: -106.488586
            },
            zoom: (function() {
                if (isMobile() === true) {
                    return 17;
                } else {
                    return 18;
                }
            })(),
            tilt: 5,
            disableDefaultUI: true
        });
        setMarkers(map);
    };

    //This creates markers for each one of our model items.
    function setMarkers(map) {
        model.places.forEach(function(lat, index) {
            place = model.places[index];
            placeImg = place.icon;
            placeLat = place.lat;
            placeLng = place.lng;
            placeDesc = place.description;
            placeTitle = place.title;
            placePosition = {
                lat: placeLat,
                lng: placeLng
            };

            marker = new google.maps.Marker({
                map: map,
                position: placePosition,
                title: placeTitle,
                icon: 'images/marker.png',
                description: placeDesc
            })

            //This adds a click event listenere to each marker and appends the infowindow to the bottom of the page.
            marker.addListener('click', function() {
                map.setCenter(this.position);
                setTimeout(function() {
                    (function() {
                        if (isMobile() === true) {
                            return map.panBy(0, 225);
                        } else {
                            return map.panBy(0, 400);
                        }
                    })();
                }, 1);
                (function() {
                    if (isMobile() === true) {
                        return map.setZoom(19);
                    } else {
                        return map.setZoom(20);
                    }
                })();
                /**
                 * This will call our API functions using the above foreach function to get appropriate title and keywords for each location.
                 */
                //Clean out the info window element.
                clearInfo();
                // this function call gathers the info for our info window.
                setInfo(this.title, this.description);
                txHistAPI(this.title);
            })
        });


        /**
         * this cleans up our info window so there isn't any elemnets left behind
         */

        function clearInfo() {
            infoWindowElem.innerHTML = '';
        };

        /**
         * This creates the info window and adds all of the info to it
         */
        function setInfo(locationTitle, locationDescription) {
            //This creates the button that closes the info window
            infoWindowButton.setAttribute('onclick', 'closeInfoWindow()');
            infoWindowButton.appendChild(infoButtonLabel);

            // This adds the Title  and the description to their elements
            infoWindowTitle.innerHTML = locationTitle;
            infoWindowDesc.innerHTML = locationDescription;

            //This appends all children to their parent elements
            infoWindowElem.appendChild(infoWindowButton);
            infoWindowElem.appendChild(infoWindowTitle);
            infoWindowElem.appendChild(infoWindowDesc);
            infoWindowElem.className = 'info-window';

            //This appends everything in to our info window element. 
            infoSection.appendChild(infoWindowElem);
        };
    }

    /**
     *This function closes our info window, so user can go to other location.
     */

    function closeInfoWindow() {
        infoSection.innerHTML = '';
    };
initMap();
};

ko.applyBindings(new viewModel());