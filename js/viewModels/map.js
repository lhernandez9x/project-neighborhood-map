var map, place, marker, placeImg, placeLat, placeLng, placeTitle, placePosition,
    allMarkers = [],
    isMobile = function() {
    if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
        return true;
    } else {
        return false;
    }
},
    infoSection = document.getElementById('info-section'),
    infoWindowElem = document.createElement('div');
    infoWindowTitle = document.createElement('h3'),
    infoWindowList = document.createElement('ul'),
    infoWindowListItem = document.createElement('li'),
    infoWindowButton = document.createElement('button');

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
        placeTitle = place.title;
        placePosition = {
            lat: placeLat,
            lng: placeLng
        };

        marker = new google.maps.Marker({
            map: map,
            position: placePosition,
            title: placeTitle,
            icon: placeImg
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
            clearInfo();
            setInfo(this.title);
        })
    });

    function clearInfo() {
        infoWindowElem.innerHTML = '';
    };

    function setInfo(locationTitle) {
        infoWindowTitle.innerHTML = locationTitle;
        infoWindowButton.innerhtml = 'Close';
        infoWindowButton.setAttribute('onclick', 'closeInfoWindow()');
        infoWindowElem.appendChild(infoWindowButton);
        infoWindowElem.appendChild(infoWindowTitle);
        infoWindowElem.className = 'info-window';
        infoSection.appendChild(infoWindowElem);
    };
}
function closeInfoWindow() {
        infoSection.innerHTML = '';
    };