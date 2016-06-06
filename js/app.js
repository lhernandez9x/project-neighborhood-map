// This will hold all of the data for the app.
var model = {
    places: [{
        title: 'San Jacinto Plaza',
        description: '',
        category: ['Early Years', 'Old-West'],
        lat: 31.759675,
        lng: -106.488557,
        icon: 'images/markers/park.png'
    }, {
        title: 'Plaza Hotel',
        description: '',
        category: ['Early 20th Century'],
        lat: 31.758993,
        lng: -106.488544,
        icon: 'images/markers/building.png'
    }, {
        title: 'Pioneer Plaza',
        description: '',
        category: [],
        lat: 31.7585614,
        lng: -106.4888291,
        icon: 'images/markers/monument.png'
    }, {
        title: 'Plaza Theatre',
        description: '',
        category: [],
        lat: 31.7589099,
        lng: -106.489631,
        icon: 'images/markers/star.png'
    }, {
        title: 'Winhgam Theatre',
        description: '',
        category: [],
        lat: 31.7577712,
        lng: -106.4885762,
        icon: 'images/markers/building.png'
    }],
};


var viewModel = function() {
    var self = this;

    var isMobile = function() {
        if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
            return true;
        } else {
            return false;
        }
    }

    function initMap() {

        var map;
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
            })()
        });

        //This creates markers for each one of our model items.

        model.places.forEach(function(lat, index) {
            var elem, marker,markerImg, markerLat, markerLng, title, latLng;
            elem = model.places[index];
            markerImg = elem.icon;
            markerLat = elem.lat;
            markerLng = elem.lng;
            title = elem.title;
            latLng = {
                lat: markerLat,
                lng: markerLng
            }

            marker = new google.maps.Marker({
                map: map,
                position: latLng,
                title: title,
                icon: markerImg
            })
    });
};

initMap()
};


ko.applyBindings(new viewModel());