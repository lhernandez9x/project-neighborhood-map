var viewModel = function() {
    var self = this;

    // Texas History API and Information
    var txHistURL = 'http://texashistory.unt.edu/explore/collections/EPMT/opensearch/?format=json&q=';

    function txHistAPI(locationTitle) {
        XMLHttpRequest.open("POST", txHistURL + locationTitle, true);
        XMLHttpRequest.send();
    }
};

ko.applyBindings(new viewModel());